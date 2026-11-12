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
import * as Spec from './spec/index.ts'

export interface TestOptions {
  library: string
  repository: string
  category: string
  message: string
  directory: string
}

interface TestReport extends TestOptions {
  report: Spec.SegmentReport
}

const reports: TestReport[] = []
const cloneDirectory = './clone/JSON-Schema-Test-Suite'
let suiteReady = false

export async function runTestSuite(options: TestOptions, callback: Spec.ValidationCallback): Promise<void> {
  const segmentOptions: Spec.SegmentOptions = {
    cloneDirectory,
    segmentedDirectory: options.directory,
    refresh: !suiteReady && process.argv.includes('--refresh-suite')
  }
  const report = await Spec.Segment(callback, segmentOptions)
  suiteReady = true
  reports.push({ ...options, report })
  console.log(options.library, report.total)
}

export function updateReadme(): void {
  if (!suiteReady) throw new Error('Cannot update the README before running the test suite')
  const output = [
    Fs.readFileSync('./harness/__template.md', 'utf8'),
    '## Results',
    `Updated: ${new Date().toDateString()}`,
    '\n'
  ]
  const anchor = (report: TestReport) => `${report.library}-${report.category}`
  const categories: string[] = []
  for (const report of reports) {
    if (!categories.includes(report.category)) categories.push(report.category)
  }
  for (const category of categories) {
    const categoryReports = reports
      .filter((report) => report.category === category)
      .sort((left, right) => right.report.total.passed - left.report.total.passed)
    const visited = new Set<string>()
    output.push(`### ${category}`, '\n', 'Results show aggregate coverage across all JSON Schema versions.', '\n')
    output.push('| Library | Results     | Test      | Passed  | Failed | Coverage |')
    output.push('| :--     | :--        | :--       | :--     | :--    | :--      |')
    for (const report of categoryReports) {
      const library = visited.has(report.library) ? '' : `[${report.library}](${report.repository})`
      const coverage = `${report.report.total.rate?.toFixed(1) ?? '0.0'}%`
      output.push(`| ${library} | [Results](#${anchor(report)}) | ${report.category} | ${report.report.total.passed} | ${report.report.total.failed} | ${coverage} |`)
      visited.add(report.library)
    }
    output.push('\n')
  }
  output.push('## Coverage', '\n', 'Coverage reports for each library are shown below:', '\n')
  for (const report of reports) {
    output.push('---', '\n', `<a name="${anchor(report)}"></a>`, '\n')
    output.push(`\n### ${report.library}\n\n${report.message}\n\n`)
    output.push('<details>', '<summary>Specification Coverage</summary>', '\n', report.report.required, '\n', '</details>', '\n')
    output.push('<details>', '<summary>Optional Formats and Proposals</summary>', '\n', report.report.optional, '\n', '</details>', '\n')
  }
  Fs.writeFileSync('./readme.md', output.join('\n'))
}
