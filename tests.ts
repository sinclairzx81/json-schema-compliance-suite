import Test from './harness/index.ts'

// ------------------------------------------------------------------
// Clone Remote JSON Schema Test Suite
// ------------------------------------------------------------------
console.log('running: clone-test-suite')
Test.cloneTestSuite()

// ------------------------------------------------------------------
// TypeBox
// ------------------------------------------------------------------
import TypeBox from 'typebox/schema'
await Test.runTestSuite({
  library: 'TypeBox',
  category: 'Validation',
  message: 'Results for the TypeBox validation library.',
  directory: './results/typebox'
}, (_draft, schema, value) => {
  return TypeBox.Check(schema, value)
})
// ------------------------------------------------------------------
// CFWorker
// ------------------------------------------------------------------
import * as CFWorker from '@cfworker/json-schema'
function createCFWorkerValidator(schema: boolean | Record<string, unknown>, draft: string) {
  const spec = (
    draft === 'draft7' ? '7' :
    draft === 'draft2019-09' ? '2019-09' :
    draft === 'draft2020-20' ? '2020-20' :
    '4'
  ) as never
  return (new CFWorker.Validator(schema, spec))
}
await Test.runTestSuite({
  library: 'CFWorker',
  category: 'Validation',
  directory: './results/cfworker',
  message: 'Results for the @cfworker/json-schema validation library.'
}, (draft, schema, value) => {
  return createCFWorkerValidator(schema, draft).validate(value).valid
})
// ------------------------------------------------------------------
// Ajv
// ------------------------------------------------------------------
import * as Ajv7 from 'ajv'
import * as Ajv2019 from 'ajv/dist/2019.js'
import * as Ajv2020 from 'ajv/dist/2020.js'
import AjvFormats from 'ajv-formats'
const AjvKeywords = [
  'date-time', 'time', 'date', 'email', 'hostname',
  'ipv4', 'ipv6', 'uri', 'uri-reference', 'uuid',
  "duration", "idn-email", "idn-hostname",
  'uri-template', 'json-pointer', 'relative-json-pointer',
  'idn-hostname', 'iri', 'iri-reference', 'regex'
]
function createAjvValidator(draft: string) {
  const logger = { log: () => { }, warn: () => { }, error: () => { } }
  return (
    (draft === 'draft2019-09') ? AjvFormats.default(new Ajv2019.Ajv2019({ strict: false, logger }), AjvKeywords as never) :
    (draft === 'draft2020-12') ? AjvFormats.default(new Ajv2020.Ajv2020({ strict: false, logger }), AjvKeywords as never) :
    AjvFormats.default(new Ajv7.Ajv({ strict: false, logger }), AjvKeywords as never)
  )
}
await Test.runTestSuite({
  library: 'Ajv',
  category: 'Validation',
  message: "Results for Ajv testing Draft 3 to 2020-12. Tests disable Ajv strict mode.",
  directory: './results/ajv',
}, (draft, schema, value) => {
  return createAjvValidator(draft).validate(schema, value)
})
// ---------------------------------------------------------------
// Ata
// ---------------------------------------------------------------
import * as Ata from 'ata-validator'
await Test.runTestSuite({
  library: 'Ata',
  category: 'Validation',
  message: 'Results for the Ata validator using the `isValidObject(...)` function.',
  directory: './results/ata',
}, (_draft, schema, value) => {
  return (new Ata.Validator(schema as never)).isValidObject(value)
})
// ---------------------------------------------------------------
// Zod-Semantics
// ---------------------------------------------------------------
import Zod from 'zod'
await Test.runTestSuite({
  library: 'Zod',
  category: 'Semantics',
  message: "Results using `fromJSONSchema(...)` to test Zod semantics against the Json Schema specification.",
  directory: './results/zod-semantics'
}, (_draft, schema, value) => {
  return Zod.fromJSONSchema(schema).safeParse(value).success
})
// ---------------------------------------------------------------
// Zod-Translation
// ---------------------------------------------------------------
await Test.runTestSuite({
  library: 'Zod',
  category: 'Translation',
  message: "Results using `z.fromJSONSchema(...)` and `z.toJSONSchema(...)` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.",
  directory: './results/zod-translation'
}, (draft, schema, value) => {
  const transformedSchema = Zod.fromJSONSchema(schema).toJSONSchema()
  return createCFWorkerValidator(transformedSchema, draft).validate(value).valid
})
// ---------------------------------------------------------------
// ArkType-Semantics
// ---------------------------------------------------------------
import * as Ark from '@ark/json-schema'
await Test.runTestSuite({
  library: 'ArkType',
  category: 'Semantics',
  directory: './results/arktype-semantics',
  message: "Results using `jsonSchemaToType(...)` to test ArkType semantics against the Json Schema specification.",
}, (_draft, schema, value) => {
  return Ark.jsonSchemaToType(schema).allows(value)
})
// ---------------------------------------------------------------
// ArkType-Translation
// ---------------------------------------------------------------
await Test.runTestSuite({
  library: 'ArkType',
  category: 'Translation',
  directory: './results/arktype-translation',
  message: "Results using `@ark/json-schema` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.",
}, (draft, schema, value) => {
  const transformedSchema: any = Ark.jsonSchemaToType(schema).toJsonSchema()
  return createCFWorkerValidator(transformedSchema, draft).validate(value).valid
})
// ---------------------------------------------------------------
// Finalize
// ---------------------------------------------------------------
Test.updateReadme()