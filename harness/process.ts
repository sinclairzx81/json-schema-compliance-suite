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

import * as fs from 'node:fs';
import * as path from 'node:path';
import type { JSONSchemaTestFile, JSONSchemaTestGroup, JSONSchemaTestSuite } from './types.ts';

export type ProcessCallback = (draft: string, schema: Record<string, unknown> | boolean, value: unknown) => boolean | null;

// ------------------------------------------------------------------
// JSONTestSource: A loaded test file before segmentation
// ------------------------------------------------------------------
interface JSONTestSource {
  sourcePath: string;
  draft: string;
  keyword: string;
  groups: JSONSchemaTestGroup[];
}
// ------------------------------------------------------------------
// CollectJsonPaths: Load all test files from disk into memory
// ------------------------------------------------------------------
function collectJsonPaths(directory: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectJsonPaths(full));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      results.push(full);
    }
  }
  return results;
}
function resolveDraftAndKeyword(sourcePath: string, rootDirectory: string): { draft: string; keyword: string } | null {
  const root = rootDirectory.replace(/\\/g, '/').replace(/\/$/, '');
  const normalized = sourcePath.replace(/\\/g, '/');
  if (!normalized.startsWith(root + '/')) return null;
  const relative = normalized.slice(root.length + 1);
  const parts = relative.split('/');
  if (parts.length < 2) return null;
  const draft = parts[0];
  const keyword = parts.slice(1).join('/').replace(/\.json$/, '');
  return { draft, keyword };
}
function collectJSONTests(directory: string): JSONTestSource[] {
  const results: JSONTestSource[] = [];
  const jsonPaths = collectJsonPaths(directory);

  for (const sourcePath of jsonPaths) {
    const resolved = resolveDraftAndKeyword(sourcePath, directory)
    if (resolved === null) continue;
    const { draft, keyword } = resolved
    const content = fs.readFileSync(sourcePath, 'utf-8')
    const groups = JSON.parse(content) as JSONSchemaTestGroup[]
    results.push({ sourcePath, draft, keyword, groups })
  }
  return results
}
// ------------------------------------------------------------------
// RunTest
// ------------------------------------------------------------------
function runTest(callback: ProcessCallback, draft: string, schema: Record<string, unknown> | boolean, data: unknown): boolean | null {
  try {
    return callback(draft, schema, data)
  } catch {
    return null
  }
}
function createAccumulator(input: JSONSchemaTestGroup[]): JSONSchemaTestGroup[] {
  return input.map((group) => ({ ...group, tests: [] }))
}
function resolveFailingPath(relativePath: string): string {
  return relativePath.replace(/\\/g, '/').split('/').map((s, i, a) => (i === a.length - 1 ? '_' + s : s)).join('/')
}
// ------------------------------------------------------------------
// AssertCounts
// ------------------------------------------------------------------
function assertCounts(sources: JSONTestSource[], suite: JSONSchemaTestSuite): void {
  const sourceTotal = sources.reduce((n, s) => n + s.groups.reduce((m, g) => m + g.tests.length, 0), 0)
  const segmentedTotal = Object.values(suite.report).reduce((n, s) => n + s.total, 0)
  const passed = Object.values(suite.report).reduce((n, s) => n + s.passed, 0)
  const failed = Object.values(suite.report).reduce((n, s) => n + s.failed, 0)
  console.log(`spec: loaded ${sourceTotal}, passed ${passed}, failed ${failed}, total ${segmentedTotal}`)
  if (sourceTotal !== segmentedTotal) {
    throw new Error(`Test count mismatch: loaded ${sourceTotal} tests from disk but segmented ${segmentedTotal}`)
  }
}
// ------------------------------------------------------------------
// Process: Run all tests and split into passing/failing files
// ------------------------------------------------------------------
export function process(directory: string, callback: ProcessCallback = () => true): JSONSchemaTestSuite {
  const absoluteDirectory = path.resolve(directory)
  const sources = collectJSONTests(absoluteDirectory)
  const files: JSONSchemaTestFile[] = []
  const report: JSONSchemaTestSuite['report'] = {}
  const root = absoluteDirectory.replace(/\\/g, '/').replace(/\/$/, '')
  for (const { sourcePath, draft, keyword, groups } of sources) {
    const passed = createAccumulator(groups)
    const failed = createAccumulator(groups)
    for (let i = 0; i < groups.length; i++) {
      const schema = groups[i].schema
      for (const test of groups[i].tests) {
        const actual = runTest(callback, draft, schema, test.data)
        if (actual !== null && test.valid === actual) {
          passed[i].tests.push(test)
        } else {
          failed[i].tests.push(test)
        }
      }
    }
    const passedGroups = passed.filter((group) => group.tests.length > 0)
    const failedGroups = failed.filter((group) => group.tests.length > 0)
    const passedCount = passedGroups.reduce((n, g) => n + g.tests.length, 0)
    const failedCount = failedGroups.reduce((n, g) => n + g.tests.length, 0)
    const relativePath = sourcePath.replace(/\\/g, '/').slice(root.length + 1)
    if (passedGroups.length > 0) {
      files.push({ path: relativePath, draft, keyword, failing: false, groups: passedGroups })
    }
    if (failedGroups.length > 0) {
      files.push({ path: resolveFailingPath(relativePath), draft, keyword, failing: true, groups: failedGroups })
    }
    report[`${draft}/${keyword}`] = {
      passed: passedCount,
      failed: failedCount,
      total: passedCount + failedCount,
    };
  }
  files.sort((a, b) => a.path.localeCompare(b.path))
  const suite = { files, report }
  assertCounts(sources, suite)
  return suite
}