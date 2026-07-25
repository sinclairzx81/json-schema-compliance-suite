/*--------------------------------------------------------------------------

JSON Schema Compliance Suite

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---------------------------------------------------------------------------*/

import * as Fs from 'node:fs'
import * as Path from 'node:path'
import * as Process from 'node:child_process'
import * as Report from './report.ts'

import type { JSONSchemaTestFile, JSONSchemaTestGroup, JSONSchemaTestSuite } from './types.ts'

// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
export type ProcessCallback = (
  draft: string,
  schema: Record<string, unknown> | boolean,
  value: unknown,
  index: number
) => Promise<boolean | null> | boolean | null

export interface RefreshOptions {
  library: string
  repository: string
  category: string
  message: string
  directory: string
}
interface TestSource {
  sourcePath: string
  draft: string
  keyword: string
  groups: JSONSchemaTestGroup[]
}
interface SegmentedFile {
  passing: JSONSchemaTestGroup[]
  failing: JSONSchemaTestGroup[]
  passedCount: number
  failedCount: number
  relativePath: string
  draft: string
  keyword: string
}
// ------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------
const CLONE_REPO = 'git@github.com:json-schema-org/JSON-Schema-Test-Suite.git'
const CLONE_DIRECTORY = 'clone'
const TEST_SUBDIRECTORY = 'JSON-Schema-Test-Suite/tests'
// ------------------------------------------------------------------
// File system helpers
// ------------------------------------------------------------------
function collectJsonPaths(directory: string): string[] {
  if (!Fs.existsSync(directory)) return []
  return Fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = Path.join(directory, entry.name)
    if (entry.isDirectory()) return collectJsonPaths(fullPath)
    if (entry.isFile() && entry.name.endsWith('.json')) return [fullPath]
    return []
  })
}
function resolveDraftAndKeyword(
  sourcePath: string,
  rootDirectory: string
): { draft: string; keyword: string } | null {
  const root = rootDirectory.replace(/\\/g, '/').replace(/\/$/, '')
  const normalized = sourcePath.replace(/\\/g, '/')
  if (!normalized.startsWith(root + '/')) return null
  const relative = normalized.slice(root.length + 1)
  const parts = relative.split('/')
  if (parts.length < 2) return null

  return {
    draft: parts[0],
    keyword: parts.slice(1).join('/').replace(/\.json$/, ''),
  }
}
function loadTestSources(directory: string): TestSource[] {
  return collectJsonPaths(directory).flatMap((sourcePath) => {
    const resolved = resolveDraftAndKeyword(sourcePath, directory)
    if (!resolved) return []

    const groups = JSON.parse(Fs.readFileSync(sourcePath, 'utf-8')) as JSONSchemaTestGroup[]
    return [{ sourcePath, ...resolved, groups }]
  })
}
function writeTestSuite(directory: string, suite: JSONSchemaTestSuite): void {
  Fs.rmSync(directory, { recursive: true, force: true })
  for (const file of suite.files) {
    const filePath = Path.join(directory, file.path)
    Fs.mkdirSync(Path.dirname(filePath), { recursive: true })
    Fs.writeFileSync(filePath, JSON.stringify(file.groups, null, 2))
  }
}
// ------------------------------------------------------------------
// Report
// ------------------------------------------------------------------
interface Report extends RefreshOptions {
  metrics: Metrics
  required: string
  optional: string
}
const reports: Report[] = []
function addReport(report: Report) {
  console.log(report.library, report.metrics)
  reports.push(report)
}
// ------------------------------------------------------------------
// Test execution
// ------------------------------------------------------------------
async function runTest(
  callback: ProcessCallback,
  draft: string,
  schema: Record<string, unknown> | boolean,
  data: unknown,
  index: number
): Promise<boolean | null> {
  try {
    return await callback(draft, schema, data, index)
  } catch {
    return null
  }
}
async function segmentTestSource(source: TestSource, callback: ProcessCallback, rootDirectory: string, indexOffset: number): Promise<{ 
  segmented: SegmentedFile; 
  testsRun: number 
}> {
  const { sourcePath, draft, keyword, groups } = source
  const passing: JSONSchemaTestGroup[] = groups.map((g) => ({ ...g, tests: [] }))
  const failing: JSONSchemaTestGroup[] = groups.map((g) => ({ ...g, tests: [] }))
  let testIndex = indexOffset
  for (let i = 0; i < groups.length; i++) {
    for (const test of groups[i].tests) {
      const result = await runTest(callback, draft, groups[i].schema, test.data, testIndex++)
      const bucket = result !== null && test.valid === result ? passing : failing
      bucket[i].tests.push(test)
    }
  }
  const nonEmpty = (result: JSONSchemaTestGroup[]) => result.filter((group) => group.tests.length > 0)
  const count = (result: JSONSchemaTestGroup[]) => result.reduce((result, group) => result + group.tests.length, 0)
  const root = rootDirectory.replace(/\\/g, '/').replace(/\/$/, '')
  const relativePath = sourcePath.replace(/\\/g, '/').slice(root.length + 1)
  return {
    segmented: {
      passing: nonEmpty(passing),
      failing: nonEmpty(failing),
      passedCount: count(passing),
      failedCount: count(failing),
      relativePath,
      draft,
      keyword,
    },
    testsRun: testIndex - indexOffset,
  }
}
function failingPath(relativePath: string): string {
  return relativePath
    .replace(/\\/g, '/')
    .split('/')
    .map((part, i, arr) => (i === arr.length - 1 ? '_' + part : part))
    .join('/')
}
// ------------------------------------------------------------------
// Metrics
// ------------------------------------------------------------------
export interface Metrics {
  total: number
  passed: number
  failed: number
  elapsed: number
}
function getMetrics(sources: TestSource[], suite: JSONSchemaTestSuite, elapsed: number): Metrics {
  const sourceTotal = sources.reduce((result, source) => result + source.groups.reduce((m, g) => m + g.tests.length, 0), 0)
  const { passed, failed } = Object.values(suite.report).reduce((result, s) => ({ passed: result.passed + s.passed, failed: result.failed + s.failed }), { passed: 0, failed: 0 })
  const total = passed + failed
  if (sourceTotal !== total) throw new Error(`Test count mismatch: loaded ${sourceTotal} tests from disk but segmented ${total}`)
  return { total, passed, failed, elapsed }
}
// ------------------------------------------------------------------
// ExecuteTestSuite
// ------------------------------------------------------------------
async function executeTestSuite(directory: string, callback: ProcessCallback = () => true): Promise<[suite: JSONSchemaTestSuite, metrics: Metrics]> {
  const absoluteDirectory = Path.resolve(directory)
  const sources = loadTestSources(absoluteDirectory)
  const files: JSONSchemaTestFile[] = []
  const report: JSONSchemaTestSuite['report'] = {}
  let index = 0
  let start = Date.now()
  for (const source of sources) {
    const { segmented, testsRun } = await segmentTestSource(source, callback, absoluteDirectory, index)
    index += testsRun
    const { passing, failing, passedCount, failedCount, relativePath, draft, keyword } = segmented
    if (passing.length > 0) files.push({ path: relativePath, draft, keyword, failing: false, groups: passing })
    if (failing.length > 0) files.push({ path: failingPath(relativePath), draft, keyword, failing: true, groups: failing })
    report[`${draft}/${keyword}`] = {
      passed: passedCount,
      failed: failedCount,
      total: passedCount + failedCount,
    }
  }
  const elapsed = Date.now() - start
  files.sort((a, b) => a.path.localeCompare(b.path))
  const suite = { files, report }
  const metrics = getMetrics(sources, suite, elapsed)
  return [suite, metrics]
}
// ------------------------------------------------------------------
// CloneTestSuite
// ------------------------------------------------------------------
export function cloneTestSuite(): void {
  if (Fs.existsSync(CLONE_DIRECTORY)) return
  Fs.mkdirSync(CLONE_DIRECTORY)
  Process.execSync(`git clone ${CLONE_REPO}`, { cwd: CLONE_DIRECTORY, stdio: 'inherit' })
}
// ------------------------------------------------------------------
// CleanTestSuite
// ------------------------------------------------------------------
export function cleanTestSuite(): void {
  Fs.rmSync(CLONE_DIRECTORY, { recursive: true, force: true })
}
// ------------------------------------------------------------------
// RegisterTest
// ------------------------------------------------------------------
export async function runTestSuite(options: RefreshOptions, callback: ProcessCallback): Promise<void> {
  Fs.rmSync(options.directory, { recursive: true, force: true })
  const [suite, metrics] = await executeTestSuite(`${CLONE_DIRECTORY}/${TEST_SUBDIRECTORY}`, callback)
  await writeTestSuite(options.directory, suite)
  await addReport({ ...options, 
    metrics,
    required: Report.reportRequiredTests(suite, {}),
    optional: Report.reportOptionalTests(suite, {})
  })
}
// ------------------------------------------------------------------
// UpdateReadme
// ------------------------------------------------------------------
export function updateReadme(): void {
  const output = [ Fs.readFileSync('./harness/__template.md', 'utf-8')]
  output.push(`## Results`)
  output.push(`Updated: ${new Date().toDateString()}`)
  output.push('\n')
  const anchor = (report: Report) => `${report.library}-${report.category}`
  // Preserve category order based on first appearance in `reports`
  const categories: string[] = []
  for (const report of reports) {
    if (!categories.includes(report.category)) categories.push(report.category)
  }
  for (const category of categories) {
    const categoryReports = reports
      .filter(report => report.category === category)
      .sort((a, b) => b.metrics.passed - a.metrics.passed)
    const visited = new Set()

    output.push(`### ${category}`)
    output.push('\n')
    output.push(`| Library | Results     | Test      | Passed  | Failed | Coverage |`)
    output.push(`| :--     | :--        | :--       | :--     | :--    | :--      |`)
    for (const report of categoryReports) {
      const library = !visited.has(report.library) ? `[${report.library}](${report.repository})` : ''
      const pagelink = `[Results](#${anchor(report)})`
      visited.add(report.library)
      const coverage = `${((report.metrics.passed / report.metrics.total) * 100).toFixed(1)}%`
      output.push(`| ${library} | ${pagelink} | ${report.category} | ${report.metrics.passed} | ${report.metrics.failed} | ${coverage} |`)
    }
    output.push('\n')
  }
  output.push(`## Coverage`)
  output.push('\n')
  output.push('Coverage reports for each library are shown below:')
  output.push('\n')
  for(const report of reports) {
    output.push(`---`)
    output.push('\n')
    output.push(`<a name="${anchor(report)}"></a>`)
    output.push('\n')
    output.push(`\n### ${report.library}\n\n${report.message}\n\n`)
    output.push('<details>')
    output.push('<summary>Specification Coverage</summary>')
    output.push('\n')
    output.push(report.required)
    output.push('\n')
    output.push('</details>')
    output.push('\n')
    output.push('<details>')
    output.push('<summary>Optional Formats and Proposals</summary>')
    output.push('\n')
    output.push(report.optional)
    output.push('\n')
    output.push('</details>')
    output.push('\n')
  }
  Fs.writeFileSync('./readme.md', output.join('\n'))
}