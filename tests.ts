import Test from './harness/index.ts'

// ------------------------------------------------------------------
// Clone Remote JSON Schema Test Suite
// ------------------------------------------------------------------
console.log('running: clone-test-suite')
Test.cloneTestSuite()

// ------------------------------------------------------------------
// TypeBox: Validation
// ------------------------------------------------------------------
import TypeBox from 'typebox/schema'
await Test.runTestSuite({
  library: 'TypeBox',
  repository: 'https://github.com/sinclairzx81/typebox',
  category: 'Validation',
  message: 'Results for the TypeBox validation library.',
  directory: './results/typebox'
}, (_draft, schema, value) => {
  return TypeBox.Check(schema, value)
})
// ------------------------------------------------------------------
// CFWorker: Validation
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
  repository: 'https://github.com/cfworker/cfworker/blob/main/packages/json-schema/README.md',
  category: 'Validation',
  directory: './results/cfworker',
  message: 'Results for the @cfworker/json-schema validation library.'
}, (draft, schema, value) => {
  return createCFWorkerValidator(schema, draft).validate(value).valid
})
// ---------------------------------------------------------------
// JsonSchema: Validation
// ---------------------------------------------------------------
import { Validator } from 'jsonschema'
await Test.runTestSuite({
  library: 'JsonSchema',
  repository: 'https://github.com/tdegrunt/jsonschema',
  category: 'Validation',
  message: 'Results for the jsonschema validation library.',
  directory: './results/jsonschema'
}, (_draft, schema, value) => {
  const v = new Validator()
  const result = v.validate(value, schema as never)
  return result.valid
})
// ------------------------------------------------------------------
// Ajv: Validation
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
  repository: 'https://github.com/ajv-validator/ajv',
  category: 'Validation',
  message: "Results for Ajv testing Draft 3 to 2020-12. Tests disable Ajv strict mode.",
  directory: './results/ajv',
}, (draft, schema, value) => {
  return createAjvValidator(draft).validate(schema, value)
})
// ---------------------------------------------------------------
// Ata: Validation
// ---------------------------------------------------------------
import * as Ata from 'ata-validator'
await Test.runTestSuite({
  library: 'Ata',
  repository: 'https://github.com/ata-core/ata-validator',
  category: 'Validation',
  message: 'Results for the Ata validator using the `isValidObject(...)` function.',
  directory: './results/ata',
}, (_draft, schema, value) => {
  return (new Ata.Validator(schema as never)).isValidObject(value)
})
// ---------------------------------------------------------------
// Djv: Validation
// ---------------------------------------------------------------
// @ts-ignore
import djv from 'djv'
await Test.runTestSuite({
  library: 'Djv',
  repository: 'https://github.com/korzio/djv',
  category: 'Validation',
  message: 'Results for the djv validation library.',
  directory: './results/djv'
}, (draft, schema, value) => {
  const version = (draft === 'draft-04') ? 'draft-04' : 'draft-06';
  const env = new djv({ version })
  const schemaName = 'test-schema'
  env.addSchema(schemaName, schema as any)
  return env.validate(schemaName, value) === undefined
})
// ---------------------------------------------------------------
// Zod: Semantics
// ---------------------------------------------------------------
import Zod from 'zod'
await Test.runTestSuite({
  library: 'Zod',
  repository: 'https://github.com/colinhacks/zod',
  category: 'Semantics',
  message: "Results using `fromJSONSchema(...)` to test Zod semantics against the Json Schema specification.",
  directory: './results/zod-semantics'
}, (_draft, schema, value) => {
  return Zod.fromJSONSchema(schema).safeParse(value).success
})
// ---------------------------------------------------------------
// Zod: RoundTrip
// ---------------------------------------------------------------
await Test.runTestSuite({
  library: 'Zod',
  category: 'RoundTrip',
  repository: 'https://github.com/colinhacks/zod',
  message: "Results using `z.fromJSONSchema(...)` and `z.toJSONSchema(...)` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.",
  directory: './results/zod-roundtrip'
}, (draft, schema, value) => {
  const transformedSchema = Zod.fromJSONSchema(schema).toJSONSchema()
  return createCFWorkerValidator(transformedSchema, draft).validate(value).valid
})
// ---------------------------------------------------------------
// ArkType: Semantics
// ---------------------------------------------------------------
import * as Ark from '@ark/json-schema'
await Test.runTestSuite({
  library: 'ArkType',
  repository: 'https://github.com/arktypeio/arktype',
  category: 'Semantics',
  directory: './results/arktype-semantics',
  message: "Results using `jsonSchemaToType(...)` to test ArkType semantics against the Json Schema specification.",
}, (_draft, schema, value) => {
  return Ark.jsonSchemaToType(schema).allows(value)
})
// ---------------------------------------------------------------
// ArkType: RoundTrip
// ---------------------------------------------------------------
await Test.runTestSuite({
  library: 'ArkType',
  repository: 'https://github.com/arktypeio/arktype',
  category: 'RoundTrip',
  directory: './results/arktype-roundtrip',
  message: "Results using `@ark/json-schema` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.",
}, (draft, schema, value) => {
  const transformedSchema: any = Ark.jsonSchemaToType(schema).toJsonSchema()
  return createCFWorkerValidator(transformedSchema, draft).validate(value).valid
})
// ---------------------------------------------------------------
// Finalize
// ---------------------------------------------------------------
Test.updateReadme()