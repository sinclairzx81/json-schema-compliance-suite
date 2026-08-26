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
}, (_draft, remotes, schema, value) => {
  // TypeBox supports dynamic and compiled checking. We test both
  // to ensure TypeBox produces a coherent result. Mismatched
  // results are thrown indicating a failed test.
  const result1 = TypeBox.Check(remotes, schema, value)
  const result2 = TypeBox.Compile(remotes, schema).Check(value)
  if(result1 !== result2) throw Error('Result Mismatch')
  return result1
})
// ------------------------------------------------------------------
// CFWorker: Validation
// ------------------------------------------------------------------
import * as CFWorker from '@cfworker/json-schema'
function createCFWorkerValidator(draft: string, remotes: Record<string, boolean | Record<string, unknown>>, schema: boolean | Record<string, unknown>) {
  const spec = (
    draft === 'draft7' ? '7' :
    draft === 'draft2019-09' ? '2019-09' :
    draft === 'draft2020-12' ? '2020-12' :
    '4'
  ) as never
  const validator = (new CFWorker.Validator(schema, spec))
  for (const [uri, remoteSchema] of Object.entries(remotes)) validator.addSchema(remoteSchema as {}, uri)
  return validator
}
await Test.runTestSuite({
  library: 'CFWorker',
  repository: 'https://github.com/cfworker/cfworker/blob/main/packages/json-schema/README.md',
  category: 'Validation',
  directory: './results/cfworker',
  message: 'Results for the @cfworker/json-schema validation library.'
}, (draft, remotes, schema, value) => {
  return createCFWorkerValidator(draft, remotes, schema).validate(value).valid
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
}, (_draft, remotes, schema, value) => {
  const validator = new Validator()
  for (const [uri, remoteSchema] of Object.entries(remotes)) validator.addSchema(remoteSchema as {}, uri)
  const result = validator.validate(value, schema as never)
  return result.valid
})
// Ata reads its dialect from the schema's own `$schema` keyword rather than
// from a constructor argument, so a schema that carries none is read as
// 2020-12. The suite states the draft out of band, the same way it hands Ajv a
// draft-specific instance, so stamp it on when the schema does not say.
const ataDialects: Record<string, string> = {
  draft7: 'http://json-schema.org/draft-07/schema#',
  'draft2020-12': 'https://json-schema.org/draft/2020-12/schema',
  v1: 'https://json-schema.org/v1',
}
function withDialect(draft: string, schema: unknown): unknown {
  const uri = ataDialects[draft]
  if (uri === undefined) return schema
  if (typeof schema !== 'object' || schema === null || Array.isArray(schema)) return schema
  return '$schema' in schema ? schema : { ...schema, $schema: uri }
}

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
}, (draft, remotes, schema, value) => {
  const remotesWithIds = Object.entries(remotes).flatMap(([uri, s]) => typeof s === "object" ? [{ ...s, $id: uri }] : []);
  return (new Ata.Validator(withDialect(draft, schema) as never, { schemas: remotesWithIds })).isValidObject(value)
})
// ---------------------------------------------------------------
// ZSchema: Validation
// ---------------------------------------------------------------
import ZSchema from 'z-schema'
await Test.runTestSuite({
  library: 'ZSchema',
  repository: 'https://github.com/zaggino/z-schema',
  category: 'Validation',
  message: 'Results for the z-schema validator using the `validate(...)` function wrapped in try/catch.',
  directory: './results/z-schema',
}, (_draft, remotes, schema, value) => {
  const validator = ZSchema.create()
  for (const [uri, remoteSchema] of Object.entries(remotes)) validator.setRemoteReference(uri, remoteSchema as never)
  try {
    validator.validate(value, schema as never);
    return true
  } catch (error) {
    return false
  }
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
function createAjvValidator(draft: string, remotes: Record<string, boolean | Record<string, unknown>>) {
  const logger = { log: () => { }, warn: () => { }, error: () => { } }
  const options = { strict: false, validateSchema: false, logger }
  const validator = (
    (draft === 'draft2019-09') ? AjvFormats.default(new Ajv2019.Ajv2019(options), AjvKeywords as never) :
    (draft === 'draft2020-12') ? AjvFormats.default(new Ajv2020.Ajv2020(options), AjvKeywords as never) :
    AjvFormats.default(new Ajv7.Ajv(options), AjvKeywords as never)
  ) as Ajv7.Ajv
  for (const [uri, remoteSchema] of Object.entries(remotes)) validator.addSchema(remoteSchema, uri)
  return validator
}
await Test.runTestSuite({
  library: 'Ajv',
  repository: 'https://github.com/ajv-validator/ajv',
  category: 'Validation',
  message: "Results for Ajv testing Draft 3 to 2020-12. Tests disable Ajv strict mode.",
  directory: './results/ajv',
}, (draft, remotes, schema, value) => {
  return createAjvValidator(draft, remotes).validate(schema, value)
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
}, (draft, remotes, schema, value) => {
  const version = (draft === 'draft-04') ? 'draft-04' : 'draft-06';
  const validator = new djv({ version })
  const root = 'test-schema'
  for (const [uri, remoteSchema] of Object.entries(remotes)) validator.addSchema(uri, remoteSchema as never)
  validator.addSchema(root, schema as never)
  return validator.validate(root, value as never) === undefined
})
// ---------------------------------------------------------------
// Sury: Semantics
// ---------------------------------------------------------------
import * as Sury from 'sury'
await Test.runTestSuite({
  library: 'Sury',
  repository: 'https://github.com/DZakh/sury',
  category: 'Semantics',
  message: "Results using `S.fromJSONSchema(...)` to test Sury semantics against the Json Schema specification.",
  directory: './results/sury-semantics'
}, (_draft, _remotes, schema, value) => {
  return Sury.safe(() => Sury.parser(Sury.fromJSONSchema(schema as never))(value)).success
})
// ---------------------------------------------------------------
// Sury: RoundTrip
// ---------------------------------------------------------------
await Test.runTestSuite({
  library: 'Sury',
  category: 'RoundTrip',
  repository: 'https://github.com/DZakh/sury',
  message: "Results using `S.fromJSONSchema(...)` and `S.toJSONSchema(...)` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.",
  directory: './results/sury-roundtrip'
}, (draft, remotes, schema, value) => {
  const transformedSchema = Sury.toJSONSchema(Sury.fromJSONSchema(schema as never))
  return createCFWorkerValidator(draft, remotes, transformedSchema as never).validate(value).valid
})
// ---------------------------------------------------------------
// Zod: Semantics
// ---------------------------------------------------------------
import Zod from 'zod'
await Test.runTestSuite({
  library: 'Zod',
  repository: 'https://github.com/colinhacks/zod',
  category: 'Semantics',
  message: "Results using `z.fromJSONSchema(...)` to test Zod semantics against the Json Schema specification.",
  directory: './results/zod-semantics'
}, (_draft, _remotes, schema, value) => {
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
}, (draft, remotes, schema, value) => {
  const transformedSchema = Zod.fromJSONSchema(schema).toJSONSchema()
  return createCFWorkerValidator(draft, remotes, transformedSchema).validate(value).valid
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
}, (_draft, _remotes, schema, value) => {
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
}, (draft, remotes, schema, value) => {
  const transformedSchema: any = Ark.jsonSchemaToType(schema).toJsonSchema()
  return createCFWorkerValidator(draft, remotes, transformedSchema).validate(value).valid
})
// ---------------------------------------------------------------
// Finalize
// ---------------------------------------------------------------
Test.updateReadme()