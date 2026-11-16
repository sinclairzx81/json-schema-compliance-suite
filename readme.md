# JSON Schema Compliance Suite

JSON Schema Compliance Suite for JavaScript Validators

## Overview

This project is a tool that tests JSON Schema compliance across a number of JavaScript validation libraries. The tool runs compliance checks for specification validators (such as Ajv) as well as indirect compliance via schema translation (such as Zod). The tool is written to document specification adherence for systems dependent on the JSON Schema specification.

This project uses the official [JSON Schema Test Suite](https://github.com/JSON-schema-org/JSON-Schema-Test-Suite) for compliance testing.

## Local

Clone the project and run the following

```bash
$ npm install              # install packages
$ npm run upgrade          # upgrade packages
$ npm run test             # run against the current suite revision and regenerate reports
```

## Tests

This tool peforms the following tests

| Test | Description |
|:-----|:------------|
| **Validation** | JSON Schema is passed directly to the library and used for validation. Results indicate compliance with the official JSON Schema test suite. |
| **Semantics** | The JSON Schema is decoded into library types and validated using the library’s internal logic. Results indicate how closely the library aligns with the formal semantics of JSON Schema. |
| **RoundTrip** | JSON Schema is decoded then re-encoded using library provided translation API. The translated JSON Schema is then passed to CfWorker for validation. Failed tests indicate either lossy translation or serialization error.  |

## Results
Updated: Tue Nov 17 2026


### Validation


Results show aggregate coverage across all JSON Schema versions.


| Library | Results     | Test      | Passed  | Failed | Coverage |
| :--     | :--        | :--       | :--     | :--    | :--      |
| [Corvus-Dotnet](https://github.com/corvus-dotnet/Corvus.JsonSchema#readme) | [Results](#Corvus-Dotnet-Validation) | Validation | 11610 | 233 | 98.0% |
| [TypeBox](https://github.com/sinclairzx81/typebox) | [Results](#TypeBox-Validation) | Validation | 11609 | 234 | 98.0% |
| [Ata](https://github.com/ata-core/ata-validator) | [Results](#Ata-Validation) | Validation | 11400 | 443 | 96.3% |
| [ZSchema](https://github.com/zaggino/z-schema) | [Results](#ZSchema-Validation) | Validation | 11380 | 463 | 96.1% |
| [CFWorker](https://github.com/cfworker/cfworker/blob/main/packages/json-schema/README.md) | [Results](#CFWorker-Validation) | Validation | 11083 | 760 | 93.6% |
| [Exodus-SchemaSafe](https://github.com/ExodusMovement/schemasafe) | [Results](#Exodus-SchemaSafe-Validation) | Validation | 10558 | 1285 | 89.2% |
| [Ajv](https://github.com/ajv-validator/ajv) | [Results](#Ajv-Validation) | Validation | 10521 | 1322 | 88.8% |
| [JsonSchema](https://github.com/tdegrunt/jsonschema) | [Results](#JsonSchema-Validation) | Validation | 9800 | 2043 | 82.8% |
| [Djv](https://github.com/korzio/djv) | [Results](#Djv-Validation) | Validation | 8767 | 3076 | 74.0% |


### Semantics


Results show aggregate coverage across all JSON Schema versions.


| Library | Results     | Test      | Passed  | Failed | Coverage |
| :--     | :--        | :--       | :--     | :--    | :--      |
| [Sury](https://github.com/DZakh/sury) | [Results](#Sury-Semantics) | Semantics | 7958 | 3885 | 67.2% |
| [Zod](https://github.com/colinhacks/zod) | [Results](#Zod-Semantics) | Semantics | 6241 | 5602 | 52.7% |
| [ArkType](https://github.com/arktypeio/arktype) | [Results](#ArkType-Semantics) | Semantics | 1865 | 9978 | 15.8% |


### RoundTrip


Results show aggregate coverage across all JSON Schema versions.


| Library | Results     | Test      | Passed  | Failed | Coverage |
| :--     | :--        | :--       | :--     | :--    | :--      |
| [Sury](https://github.com/DZakh/sury) | [Results](#Sury-RoundTrip) | RoundTrip | 7950 | 3893 | 67.1% |
| [Zod](https://github.com/colinhacks/zod) | [Results](#Zod-RoundTrip) | RoundTrip | 6350 | 5493 | 53.6% |
| [ArkType](https://github.com/arktypeio/arktype) | [Results](#ArkType-RoundTrip) | RoundTrip | 1567 | 10276 | 13.2% |


## Coverage


Coverage reports for each library are shown below:


---


<a name="TypeBox-Validation"></a>



### TypeBox

Results for the TypeBox validation library.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anchor-legacy | 7/14 | 7/14 | ✅ | ✅ | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 23/24 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | ✅ | ✅ |
| enum | 47/49 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 4/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-date-time | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-duration | - | - | - | - | ✅ | ✅ | ✅ |
| format-email | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | 28/29 | 28/29 | ✅ | ✅ | ✅ | 28/29 |
| format-idn-email | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-idn-hostname | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-iri | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-iri-reference | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | 8/9 | - | - | ✅ | ✅ | ✅ | 42/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uri-reference | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uri-template | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| id-legacy | 29/40 | 33/46 | ✅ | ✅ | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maximum | 13/14 | 13/14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | 16/17 | 16/17 | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | 8/13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | ✅ | - | - |
| ref | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ref-legacy | 25/26 | 30/31 | 32/33 | 32/33 | ✅ | - | - |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 92/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | ✅ | ✅ | ✅ |
| unevaluatedProperties | - | - | - | - | ✅ | ✅ | ✅ |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 15/25 | 17/26 | 18/29 | 18/29 | 18/29 | 18/29 | 18/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | ✅ | 2/3 | 0/2 | 0/2 |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | ✅ | ✅ |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-assertion | - | - | - | - | - | ✅ | - |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | - | - | - | ✅ | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| non-schemas | - | 5/7 | 8/10 | 8/10 | 18/20 | 18/20 | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 4/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Corvus-Dotnet-Validation"></a>



### Corvus-Dotnet

Results for the Corvus-Dotnet validation library.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anchor-legacy | 0/14 | ✅ | ✅ | ✅ | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 23/24 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | ✅ | 15/27 |
| enum | 47/49 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 4/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-date-time | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 55/63 |
| format-duration | - | - | - | - | ✅ | ✅ | ✅ |
| format-email | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | ✅ | ✅ | ✅ | ✅ | ✅ | 28/29 |
| format-idn-email | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-idn-hostname | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-iri | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-iri-reference | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | 8/9 | - | - | ✅ | ✅ | ✅ | 42/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uri-reference | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uri-template | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| id-legacy | 27/40 | ✅ | ✅ | ✅ | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | 29/37 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maximum | 13/14 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | 16/17 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | 8/13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | ✅ | - | - |
| ref | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ref-legacy | 24/26 | ✅ | ✅ | ✅ | ✅ | - | - |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 88/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | ✅ | ✅ | 70/71 |
| unevaluatedProperties | - | - | - | - | ✅ | ✅ | 128/129 |
| uniqueItems | 63/65 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| vocabulary | - | - | - | - | ✅ | ✅ | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 15/25 | 17/26 | 18/29 | 18/29 | 18/29 | 18/29 | 18/29 |
| content | - | - | - | ✅ | - | - | - |
| cross-draft | - | - | - | ✅ | ✅ | ✅ | ✅ |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | ✅ | 1/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-assertion | - | - | - | - | - | ✅ | - |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | - | - | - | ✅ | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| non-schemas | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 4/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Exodus-SchemaSafe-Validation"></a>



### Exodus-SchemaSafe

Results for @exodus/schemasafe testing Draft 3 to 2020-12. Tests use lax mode with extra formats enabled.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anchor-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 43/44 | 0/27 |
| enum | 43/49 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 1/10 | - | - | - | - | - | - |
| format-color | ✅ | - | - | - | - | - | - |
| format-date | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-date-time | 46/47 | 46/47 | 46/47 | 46/47 | 46/47 | 46/47 | 54/63 |
| format-duration | - | - | - | - | 46/51 | 46/51 | 46/51 |
| format-email | 47/59 | 47/59 | 47/59 | 47/59 | 47/59 | 59/71 | 59/71 |
| format-host-name | 27/28 | - | - | - | - | - | - |
| format-hostname | - | 28/29 | 28/29 | 42/66 | 42/66 | 42/66 | 28/29 |
| format-idn-email | - | - | - | 0/24 | 0/24 | 0/24 | 0/24 |
| format-idn-hostname | - | - | - | 0/101 | 0/101 | 0/101 | 0/101 |
| format-ip-address | 40/41 | - | - | - | - | - | - |
| format-ipv4 | - | 40/41 | 40/41 | 40/41 | 40/41 | 40/41 | 40/41 |
| format-ipv6 | 48/51 | 48/51 | 48/51 | 48/51 | 48/51 | 48/51 | 48/51 |
| format-iri | - | - | - | 0/32 | 0/32 | 0/32 | 0/32 |
| format-iri-reference | - | - | - | 0/25 | 0/25 | 0/25 | 0/25 |
| format-json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | ✅ | - | - | 38/42 | 38/42 | 38/42 | 38/45 |
| format-unknown | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | - |
| format-uri | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 |
| format-uri-reference | - | - | 26/31 | 26/31 | 26/31 | 26/31 | 26/31 |
| format-uri-template | - | - | 45/48 | 45/48 | 45/48 | 45/48 | 45/48 |
| format-uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | - | 6/10 | 6/10 | 48/52 | 48/52 | 48/52 |
| id-legacy | 36/40 | 42/46 | ✅ | ✅ | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maximum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | ✅ | - | - |
| ref | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ref-legacy | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| required | 1/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 79/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 54/56 | 69/71 | 69/71 |
| unevaluatedProperties | - | - | - | - | 127/129 | 127/129 | 127/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| vocabulary | - | - | - | - | 0/5 | 0/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 16/25 | 17/26 | 18/29 | 18/29 | 18/29 | 18/29 | 18/29 |
| content | - | - | - | ✅ | - | - | - |
| cross-draft | - | - | - | ✅ | ✅ | ✅ | ✅ |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | ✅ | 0/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-assertion | - | - | - | - | - | 0/4 | - |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | - | - | - | ✅ | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| non-schemas | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 0/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | ✅ |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="CFWorker-Validation"></a>



### CFWorker

Results for the @cfworker/json-schema validation library.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anchor-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 23/24 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 24/44 | 15/27 |
| enum | 47/49 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 4/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-date-time | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 55/63 |
| format-duration | - | - | - | - | ✅ | ✅ | ✅ |
| format-email | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | ✅ | ✅ | 43/66 | 43/66 | 43/66 | ✅ |
| format-idn-email | - | - | - | 16/24 | 16/24 | 16/24 | 16/24 |
| format-idn-hostname | - | - | - | 43/101 | 43/101 | 43/101 | 43/101 |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-iri | - | - | - | 17/32 | 17/32 | 17/32 | 17/32 |
| format-iri-reference | - | - | - | 15/25 | 15/25 | 15/25 | 15/25 |
| format-json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | 8/9 | - | - | ✅ | ✅ | ✅ | 42/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 |
| format-uri-reference | - | - | 25/31 | 25/31 | 25/31 | 25/31 | 25/31 |
| format-uri-template | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | - | ✅ | ✅ | 51/52 | 51/52 | 49/52 |
| id-legacy | 38/40 | 44/46 | 36/38 | 36/38 | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | 28/30 |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maximum | ✅ | ✅ | 10/12 | ✅ | ✅ | ✅ | 10/12 |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | ✅ | ✅ | 13/15 | ✅ | ✅ | ✅ | 13/15 |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | 8/13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | ✅ | - | - |
| ref | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 51/52 |
| ref-legacy | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 88/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | ✅ | 70/71 | 68/71 |
| unevaluatedProperties | - | - | - | - | ✅ | 128/129 | 126/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 15/25 | 17/26 | 18/29 | 18/29 | 18/29 | 18/29 | 18/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | ✅ | 2/3 | 0/2 | 0/2 |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | 1/2 | 1/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-assertion | - | - | - | - | - | ✅ | - |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | - | - | - | ✅ | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| non-schemas | - | ✅ | 7/10 | 7/10 | 15/20 | 15/20 | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 4/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="JsonSchema-Validation"></a>



### JsonSchema

Results for the jsonschema validation library.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | 15/16 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | 3/18 | 3/18 | 3/18 |
| anchor-legacy | 12/14 | 12/14 | 12/14 | 12/14 | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | 50/68 | 50/68 | 50/68 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | ✅ | ✅ | ✅ | ✅ | 14/20 | 14/20 | 14/20 |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | 10/20 | 10/20 | 10/20 |
| disallow | ✅ | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 11/44 | 9/27 |
| enum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | ✅ | - | - | - | - | - | - |
| format-color | ✅ | - | - | - | - | - | - |
| format-date | 72/81 | - | - | 72/81 | 72/81 | 72/81 | 72/81 |
| format-date-time | 36/47 | 36/47 | 36/47 | 36/47 | 36/47 | 36/47 | 44/63 |
| format-duration | - | - | - | - | 38/51 | 38/51 | 38/51 |
| format-email | 47/59 | 47/59 | 47/59 | 47/59 | 47/59 | 59/71 | 59/71 |
| format-host-name | 27/28 | - | - | - | - | - | - |
| format-hostname | - | 28/29 | 28/29 | 42/66 | 42/66 | 42/66 | 28/29 |
| format-idn-email | - | - | - | 22/24 | 22/24 | 22/24 | 22/24 |
| format-idn-hostname | - | - | - | 43/101 | 43/101 | 43/101 | 43/101 |
| format-ip-address | ✅ | - | - | - | - | - | - |
| format-ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-ipv6 | 47/51 | 47/51 | 47/51 | 47/51 | 47/51 | 47/51 | 47/51 |
| format-iri | - | - | - | 24/32 | 24/32 | 24/32 | 24/32 |
| format-iri-reference | - | - | - | 24/25 | 24/25 | 24/25 | 24/25 |
| format-json-pointer | - | - | 39/40 | 39/40 | 39/40 | 39/40 | 39/40 |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-relative-json-pointer | - | - | - | 29/31 | 29/31 | 29/31 | 29/31 |
| format-time | ✅ | - | - | 33/42 | 33/42 | 33/42 | 36/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | 32/48 | 32/48 | 32/48 | 32/48 | 32/48 | 32/48 | 32/48 |
| format-uri-reference | - | - | 30/31 | 30/31 | 30/31 | 30/31 | 30/31 |
| format-uri-template | - | - | 27/48 | 27/48 | 27/48 | 27/48 | 27/48 |
| format-uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | - | 4/10 | 4/10 | 8/52 | 8/52 | 8/52 |
| id-legacy | 12/40 | 18/46 | 18/38 | 18/38 | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | - | - | - | - | 0/2 | 0/2 | 0/2 |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | ✅ | ✅ | ✅ | ✅ | 39/45 | 31/40 | 31/40 |
| maximum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | 39/40 | 39/40 | 39/40 |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | 22/36 | - | - |
| ref | ✅ | ✅ | ✅ | 12/18 | 22/50 | 23/52 | 23/52 |
| ref-legacy | 16/26 | 21/31 | 21/33 | 21/33 | ✅ | - | - |
| required | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 32/56 | 41/71 | 41/71 |
| unevaluatedProperties | - | - | - | - | 52/129 | 52/129 | 52/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | 59/65 | 59/65 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 16/25 | 16/26 | 17/29 | 17/29 | 17/29 | 17/29 | 17/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 2/4 | 2/3 | ✅ | ✅ |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format-regex | 11/12 | - | - | 11/12 | 11/12 | 11/12 | 11/12 |
| format-time | - | - | - | 8/14 | 8/14 | 8/14 | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| non-schemas | - | ✅ | ✅ | ✅ | 0/20 | 0/20 | 0/7 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 2/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Ata-Validation"></a>



### Ata

Results for the Ata validator using the `isValidObject(...)` function.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anchor-legacy | 7/14 | 7/14 | ✅ | ✅ | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | 4/7 | 4/7 | 4/7 | 4/7 | 4/7 | 4/7 | 4/7 |
| dependentRequired | 17/24 | 11/17 | 14/20 | ✅ | ✅ | ✅ | ✅ |
| dependentSchemas | 4/9 | 7/16 | 9/20 | ✅ | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | ✅ | 16/27 |
| enum | 47/49 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 4/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-date-time | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 55/63 |
| format-duration | - | - | - | - | ✅ | ✅ | ✅ |
| format-email | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-idn-email | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-idn-hostname | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-iri | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-iri-reference | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | 8/9 | - | - | ✅ | ✅ | ✅ | 42/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uri-reference | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uri-template | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| id-legacy | 28/40 | 32/46 | 36/38 | ✅ | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | 29/37 | 29/38 | 35/45 | ✅ | 35/45 | ✅ | ✅ |
| maximum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | 8/13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | 24/36 | - | - |
| ref | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ref-legacy | 24/26 | 29/31 | 31/33 | ✅ | 1/2 | - | - |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 92/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 42/56 | ✅ | 70/71 |
| unevaluatedProperties | - | - | - | - | 128/129 | ✅ | 128/129 |
| uniqueItems | 63/65 | 63/65 | 63/65 | ✅ | 63/65 | ✅ | ✅ |
| vocabulary | - | - | - | - | ✅ | ✅ | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 15/25 | 15/26 | 16/29 | 16/29 | 16/29 | 16/29 | 16/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | ✅ | 2/3 | 0/2 | 0/2 |
| dependencies-compatibility | - | - | - | - | 22/36 | 22/36 | - |
| dynamicRef | - | - | - | - | - | ✅ | 1/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | - | - | - | ✅ | ✅ | ✅ | - |
| non-bmp-regex | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 |
| non-schemas | - | 5/7 | ✅ | ✅ | ✅ | ✅ | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | ✅ |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="ZSchema-Validation"></a>



### ZSchema

Results for the z-schema validator using the `validate(...)` function wrapped in try/catch.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anchor-legacy | ✅ | ✅ | 7/14 | 7/14 | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 18/24 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | ✅ | 15/27 |
| enum | 47/49 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 7/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-date-time | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 55/63 |
| format-duration | - | - | - | - | ✅ | ✅ | ✅ |
| format-email | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-host-name | ✅ | - | - | - | - | - | - |
| format-hostname | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-idn-email | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-idn-hostname | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-iri | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-iri-reference | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | 8/9 | - | - | ✅ | ✅ | ✅ | 42/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uri-reference | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uri-template | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| id-legacy | 38/40 | 44/46 | 36/38 | 36/38 | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | 22/37 | 23/38 | 28/45 | 28/45 | 28/45 | ✅ | ✅ |
| maximum | 10/14 | 10/14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | 13/17 | 13/17 | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | 8/13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | 17/36 | - | - |
| ref | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| ref-legacy | 24/26 | 29/31 | 31/33 | 31/33 | 1/2 | - | - |
| required | 2/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 86/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 39/56 | ✅ | 70/71 |
| unevaluatedProperties | - | - | - | - | 128/129 | ✅ | 128/129 |
| uniqueItems | 47/65 | 47/65 | 47/65 | 47/65 | 47/65 | ✅ | ✅ |
| vocabulary | - | - | - | - | ✅ | ✅ | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 15/25 | 15/26 | 16/29 | 16/29 | 16/29 | 16/29 | 16/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | ✅ | ✅ | ✅ | ✅ |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | ✅ | 1/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | - | - | - | ✅ | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| non-schemas | - | ✅ | 8/10 | 8/10 | ✅ | ✅ | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 4/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Ajv-Validation"></a>



### Ajv

Results for Ajv testing Draft 3 to 2020-12. Tests disable Ajv strict mode.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anchor-legacy | 0/14 | 0/14 | ✅ | ✅ | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | 50/68 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 23/24 | ✅ | ✅ | ✅ | ✅ | ✅ | 14/20 |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 10/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 19/44 | 15/27 |
| enum | 43/49 | ✅ | ✅ | ✅ | 49/55 | 49/55 | 49/55 |
| extends | 1/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-date-time | 43/47 | 43/47 | 43/47 | 43/47 | 43/47 | 43/47 | 51/63 |
| format-duration | - | - | - | - | 49/51 | 49/51 | 49/51 |
| format-email | 46/59 | 46/59 | 46/59 | 46/59 | 46/59 | 58/71 | 58/71 |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | 28/29 | 28/29 | 42/66 | 42/66 | 42/66 | 28/29 |
| format-idn-email | - | - | - | 16/24 | 16/24 | 16/24 | 16/24 |
| format-idn-hostname | - | - | - | 43/101 | 43/101 | 43/101 | 43/101 |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-iri | - | - | - | 17/32 | 17/32 | 17/32 | 17/32 |
| format-iri-reference | - | - | - | 15/25 | 15/25 | 15/25 | 15/25 |
| format-json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format-relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format-time | 8/9 | - | - | 37/42 | 37/42 | 37/42 | 37/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 |
| format-uri-reference | - | - | 25/31 | 25/31 | 25/31 | 25/31 | 25/31 |
| format-uri-template | - | - | 45/48 | 45/48 | 45/48 | 45/48 | 45/48 |
| format-uuid | - | - | - | - | 28/29 | 28/29 | 28/29 |
| id | - | - | ✅ | ✅ | 44/52 | 44/52 | 44/52 |
| id-legacy | 0/40 | 0/46 | 36/38 | 36/38 | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 31/40 |
| maximum | 8/14 | 8/14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | 11/17 | 11/17 | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | 8/13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | 39/40 |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | 23/24 | 23/24 | 27/28 | 27/28 | 27/28 | 27/28 | 27/28 |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | 34/36 | - | - |
| ref | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 50/52 |
| ref-legacy | 25/26 | 30/31 | 32/33 | 32/33 | ✅ | - | - |
| required | 1/4 | 13/17 | 14/18 | 14/18 | 14/18 | 14/18 | 14/18 |
| type | 79/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 53/56 | 59/71 | 44/71 |
| unevaluatedProperties | - | - | - | - | 126/129 | 124/129 | 83/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 59/65 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 13/25 | 13/26 | 16/29 | 16/29 | 16/29 | 16/29 | 16/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 2/4 | 1/3 | 0/2 | ✅ |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | 1/2 | 1/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format-regex | 11/12 | - | - | 11/12 | 11/12 | 11/12 | 11/12 |
| format-time | - | - | - | ✅ | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| non-schemas | - | 0/7 | 7/10 | 7/10 | 17/20 | 17/20 | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 2/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Djv-Validation"></a>



### Djv

Results for the djv validation library.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | 4/18 | 4/18 | 4/18 |
| anchor-legacy | 8/14 | 8/14 | 5/14 | 5/14 | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 42/54 | 42/54 | 42/54 | 42/54 | 42/54 |
| contains | - | - | 23/24 | 25/26 | 49/68 | 49/68 | 49/68 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 23/24 | ✅ | ✅ | ✅ | 14/20 | 14/20 | 14/20 |
| dependentSchemas | 8/9 | 15/16 | 19/20 | 19/20 | 10/20 | 10/20 | 10/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 12/44 | 8/27 |
| enum | 39/49 | 41/49 | 41/49 | 41/49 | 41/55 | 41/55 | 41/55 |
| extends | 4/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | 23/81 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format-date-time | 32/47 | 32/47 | 32/47 | 32/47 | 32/47 | 32/47 | 40/63 |
| format-duration | - | - | - | - | 26/51 | 26/51 | 26/51 |
| format-email | 25/59 | 25/59 | 25/59 | 25/59 | 25/59 | 27/71 | 27/71 |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | 26/29 | 26/29 | 40/66 | 40/66 | 40/66 | 26/29 |
| format-idn-email | - | - | - | 16/24 | 16/24 | 16/24 | 16/24 |
| format-idn-hostname | - | - | - | 43/101 | 43/101 | 43/101 | 43/101 |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | 34/41 | 34/41 | 34/41 | 34/41 | 34/41 | 34/41 |
| format-ipv6 | 38/51 | 38/51 | 38/51 | 38/51 | 38/51 | 38/51 | 38/51 |
| format-iri | - | - | - | 17/32 | 17/32 | 17/32 | 17/32 |
| format-iri-reference | - | - | - | 15/25 | 15/25 | 15/25 | 15/25 |
| format-json-pointer | - | - | 35/40 | 35/40 | 35/40 | 35/40 | 35/40 |
| format-regex | 12/18 | - | - | 12/18 | 12/18 | 12/18 | 12/18 |
| format-relative-json-pointer | - | - | - | 17/31 | 17/31 | 17/31 | 17/31 |
| format-time | 7/9 | - | - | 14/42 | 14/42 | 14/42 | 14/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | 41/48 | 41/48 | 41/48 | 41/48 | 41/48 | 41/48 | 41/48 |
| format-uri-reference | - | - | 29/31 | 29/31 | 29/31 | 29/31 | 29/31 |
| format-uri-template | - | - | 44/48 | 44/48 | 44/48 | 44/48 | 44/48 |
| format-uuid | - | - | - | - | 15/29 | 15/29 | 15/29 |
| id | - | - | 4/10 | 4/10 | 23/52 | 23/52 | 23/52 |
| id-legacy | 27/40 | 27/46 | 22/38 | 22/38 | - | - | - |
| if-then-else | - | - | - | 20/30 | 20/30 | 20/30 | 20/30 |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | 31/40 | 31/40 |
| maximum | 11/14 | 11/14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | 16/17 | 16/17 | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | 7/8 | 9/10 | 9/10 | 9/10 | 9/10 | 9/10 |
| multipleOf | 8/13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | 39/40 | 39/40 | 39/40 |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | 11/15 | 11/15 |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | 25/26 | 25/26 |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | 21/22 | 21/22 | 21/22 | 21/22 | 21/22 |
| recursiveRef | - | - | - | - | 23/36 | - | - |
| ref | ✅ | ✅ | ✅ | ✅ | 48/50 | 49/52 | 49/52 |
| ref-legacy | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 79/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 34/56 | 43/71 | 43/71 |
| unevaluatedProperties | - | - | - | - | 82/129 | 82/129 | 82/129 |
| uniqueItems | 37/65 | 37/65 | 37/65 | 37/65 | 37/65 | 35/65 | 35/65 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 15/25 | 15/26 | 16/29 | 16/29 | 16/29 | 16/29 | 16/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 2/4 | 2/3 | ✅ | ✅ |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | 1/2 | 1/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | 64/74 | 64/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format-regex | 5/12 | - | - | 5/12 | 5/12 | 5/12 | 5/12 |
| format-time | - | - | - | 6/14 | 6/14 | 6/14 | - |
| non-bmp-regex | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 |
| non-schemas | - | 2/7 | 2/10 | 2/10 | 12/20 | 12/20 | 2/7 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 2/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Sury-Semantics"></a>



### Sury

Results using `S.fromJSONSchemaOrThrow(...)` to test Sury semantics against the Json Schema specification.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | 0/18 | 0/18 | 0/18 |
| anchor-legacy | 0/14 | 0/14 | 0/14 | 0/14 | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 23/24 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 0/44 | 0/27 |
| enum | 47/49 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 4/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | 23/81 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format-date-time | 17/47 | 17/47 | 17/47 | 17/47 | 17/47 | 17/47 | 25/63 |
| format-duration | - | - | - | - | 26/51 | 26/51 | 26/51 |
| format-email | 27/59 | 27/59 | 27/59 | 27/59 | 27/59 | 27/71 | 27/71 |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | 15/29 | 15/29 | 29/66 | 29/66 | 29/66 | 15/29 |
| format-idn-email | - | - | - | 16/24 | 16/24 | 16/24 | 16/24 |
| format-idn-hostname | - | - | - | 43/101 | 43/101 | 43/101 | 43/101 |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 |
| format-ipv6 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 |
| format-iri | - | - | - | 17/32 | 17/32 | 17/32 | 17/32 |
| format-iri-reference | - | - | - | 15/25 | 15/25 | 15/25 | 15/25 |
| format-json-pointer | - | - | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format-regex | 12/18 | - | - | 12/18 | 12/18 | 12/18 | 12/18 |
| format-relative-json-pointer | - | - | - | 17/31 | 17/31 | 17/31 | 17/31 |
| format-time | 7/9 | - | - | 14/42 | 14/42 | 14/42 | 14/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 |
| format-uri-reference | - | - | 17/31 | 17/31 | 17/31 | 17/31 | 17/31 |
| format-uri-template | - | - | 27/48 | 27/48 | 27/48 | 27/48 | 27/48 |
| format-uuid | - | - | - | - | 15/29 | 15/29 | 15/29 |
| id | - | - | 0/10 | 0/10 | 12/52 | 12/52 | 12/52 |
| id-legacy | 12/40 | 12/46 | 12/38 | 12/38 | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maximum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | 4/5 | 4/5 | 6/7 | 6/7 | 6/7 | 6/7 | 6/7 |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | 4/5 | 4/5 | 6/7 | 6/7 | 6/7 | 6/7 | 6/7 |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | 8/13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | 38/40 | 38/40 | 38/40 |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | 0/36 | - | - |
| ref | 8/12 | 8/12 | 8/12 | 14/18 | 35/50 | 37/52 | 37/52 |
| ref-legacy | 22/26 | 22/31 | 24/33 | 24/33 | ✅ | - | - |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 79/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 0/56 | 0/71 | 0/71 |
| unevaluatedProperties | - | - | - | - | 0/129 | 0/129 | 0/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 15/25 | 16/26 | 17/29 | 17/29 | 17/29 | 17/29 | 17/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/4 | 0/3 | 0/2 | 0/2 |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-assertion | - | - | - | - | - | 2/4 | - |
| format-regex | 6/12 | - | - | 6/12 | 6/12 | 6/12 | 6/12 |
| format-time | - | - | - | 6/14 | 6/14 | 6/14 | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| non-schemas | - | 0/7 | 0/10 | 0/10 | 8/20 | 8/20 | 0/7 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Sury-RoundTrip"></a>



### Sury

Results using `S.fromJSONSchemaOrThrow(...)` and `S.toInputJSONSchemaOrThrow(...)` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | 14/16 | 14/16 | 16/18 | 16/18 | 19/21 | 19/21 | 19/21 |
| allOf | - | 26/27 | 29/30 | 29/30 | 29/30 | 29/30 | 29/30 |
| anchor | - | - | - | - | 0/18 | 0/18 | 0/18 |
| anchor-legacy | 0/14 | 0/14 | 0/14 | 0/14 | - | - | - |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 23/24 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 0/44 | 0/27 |
| enum | 47/49 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 4/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | 23/81 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format-date-time | 17/47 | 17/47 | 17/47 | 17/47 | 17/47 | 17/47 | 25/63 |
| format-duration | - | - | - | - | 26/51 | 26/51 | 26/51 |
| format-email | 27/59 | 27/59 | 27/59 | 27/59 | 27/59 | 27/71 | 27/71 |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | 15/29 | 15/29 | 29/66 | 29/66 | 29/66 | 15/29 |
| format-idn-email | - | - | - | 16/24 | 16/24 | 16/24 | 16/24 |
| format-idn-hostname | - | - | - | 43/101 | 43/101 | 43/101 | 43/101 |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 |
| format-ipv6 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 |
| format-iri | - | - | - | 17/32 | 17/32 | 17/32 | 17/32 |
| format-iri-reference | - | - | - | 15/25 | 15/25 | 15/25 | 15/25 |
| format-json-pointer | - | - | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format-regex | 12/18 | - | - | 12/18 | 12/18 | 12/18 | 12/18 |
| format-relative-json-pointer | - | - | - | 17/31 | 17/31 | 17/31 | 17/31 |
| format-time | 7/9 | - | - | 14/42 | 14/42 | 14/42 | 14/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 |
| format-uri-reference | - | - | 17/31 | 17/31 | 17/31 | 17/31 | 17/31 |
| format-uri-template | - | - | 27/48 | 27/48 | 27/48 | 27/48 | 27/48 |
| format-uuid | - | - | - | - | 15/29 | 15/29 | 15/29 |
| id | - | - | 0/10 | 0/10 | 12/52 | 12/52 | 12/52 |
| id-legacy | 12/40 | 12/46 | 12/38 | 12/38 | - | - | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | 28/30 |
| infinite-loop-detection | - | - | - | - | ✅ | ✅ | ✅ |
| infinite-loop-detection-legacy | ✅ | ✅ | ✅ | ✅ | - | - | - |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maximum | 13/14 | 13/14 | 10/12 | ✅ | ✅ | ✅ | 10/12 |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minimum | 16/17 | 16/17 | 13/15 | ✅ | ✅ | ✅ | 13/15 |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | 8/13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | 38/40 | 38/40 | 38/40 |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | 0/36 | - | - |
| ref | 8/12 | 8/12 | 8/12 | 14/18 | 35/50 | 37/52 | 37/52 |
| ref-legacy | 22/26 | 22/31 | 24/33 | 24/33 | ✅ | - | - |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 79/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 0/56 | 0/71 | 0/71 |
| unevaluatedProperties | - | - | - | - | 0/129 | 0/129 | 0/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 15/25 | 17/26 | 18/29 | 18/29 | 18/29 | 18/29 | 18/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/4 | 0/3 | 0/2 | 0/2 |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-assertion | - | - | - | - | - | 2/4 | - |
| format-regex | 6/12 | - | - | 6/12 | 6/12 | 6/12 | 6/12 |
| format-time | - | - | - | 6/14 | 6/14 | 6/14 | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| non-schemas | - | 0/7 | 0/10 | 0/10 | 8/20 | 8/20 | 0/7 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Zod-Semantics"></a>



### Zod

Results using `z.fromJSONSchema(...)` to test Zod semantics against the Json Schema specification.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | 11/16 | 11/16 | 12/18 | 12/18 | 12/21 | 12/21 | 12/21 |
| allOf | - | 12/27 | 15/30 | 15/30 | 15/30 | 15/30 | 15/30 |
| anchor | - | - | - | - | 1/18 | 1/18 | 1/18 |
| anchor-legacy | 4/14 | 4/14 | 1/14 | 1/14 | - | - | - |
| anyOf | - | 12/15 | 15/18 | 15/18 | 15/18 | 15/18 | 15/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 47/54 | 47/54 | 47/54 | 47/54 | 47/54 |
| contains | - | - | 15/24 | 16/26 | 37/68 | 37/68 | 37/68 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 17/24 | 11/17 | 14/20 | 14/20 | 0/20 | 0/20 | 0/20 |
| dependentSchemas | 4/9 | 7/16 | 9/20 | 9/20 | 0/20 | 0/20 | 0/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 3/44 | 1/27 |
| enum | 39/49 | 41/49 | 41/49 | 41/49 | 47/55 | 47/55 | 47/55 |
| extends | 3/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | 23/81 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format-date-time | 17/47 | 17/47 | 17/47 | 17/47 | 17/47 | 17/47 | 25/63 |
| format-duration | - | - | - | - | 26/51 | 26/51 | 26/51 |
| format-email | 27/59 | 27/59 | 27/59 | 27/59 | 27/59 | 27/71 | 27/71 |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | 15/29 | 15/29 | 29/66 | 29/66 | 29/66 | 15/29 |
| format-idn-email | - | - | - | 16/24 | 16/24 | 16/24 | 16/24 |
| format-idn-hostname | - | - | - | 43/101 | 43/101 | 43/101 | 43/101 |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 |
| format-ipv6 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 |
| format-iri | - | - | - | 17/32 | 17/32 | 17/32 | 17/32 |
| format-iri-reference | - | - | - | 15/25 | 15/25 | 15/25 | 15/25 |
| format-json-pointer | - | - | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format-regex | 12/18 | - | - | 12/18 | 12/18 | 12/18 | 12/18 |
| format-relative-json-pointer | - | - | - | 17/31 | 17/31 | 17/31 | 17/31 |
| format-time | 7/9 | - | - | 14/42 | 14/42 | 14/42 | 14/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 |
| format-uri-reference | - | - | 17/31 | 17/31 | 17/31 | 17/31 | 17/31 |
| format-uri-template | - | - | 27/48 | 27/48 | 27/48 | 27/48 | 27/48 |
| format-uuid | - | - | - | - | 15/29 | 15/29 | 15/29 |
| id | - | - | 5/10 | 5/10 | 14/52 | 14/52 | 14/52 |
| id-legacy | 15/40 | 15/46 | 5/38 | 5/38 | - | - | - |
| if-then-else | - | - | - | 0/30 | 0/30 | 0/30 | 0/30 |
| infinite-loop-detection | - | - | - | - | 1/2 | 1/2 | 1/2 |
| infinite-loop-detection-legacy | 1/2 | 1/2 | 1/2 | 1/2 | - | - | - |
| items | 25/37 | 25/38 | 30/45 | 30/45 | 35/45 | 31/40 | 31/40 |
| maximum | 10/14 | 10/14 | 8/12 | 8/12 | 8/12 | 8/12 | 8/12 |
| maxItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| maxLength | 4/5 | 4/5 | 5/7 | 5/7 | 5/7 | 5/7 | 5/7 |
| maxProperties | - | 6/8 | 7/10 | 7/10 | 7/10 | 7/10 | 7/10 |
| minimum | 12/17 | 12/17 | 10/15 | 10/15 | 10/15 | 10/15 | 10/15 |
| minItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| minLength | 3/5 | 3/5 | 4/7 | 4/7 | 4/7 | 4/7 | 4/7 |
| minProperties | - | 7/8 | 8/10 | 8/10 | 8/10 | 8/10 | 8/10 |
| multipleOf | 9/13 | 9/13 | 9/13 | 9/13 | 9/13 | 9/13 | 9/13 |
| not | - | 10/20 | 10/38 | 10/38 | 10/40 | 10/40 | 10/40 |
| oneOf | - | 14/23 | 18/27 | 18/27 | 18/27 | 18/27 | 18/27 |
| pattern | 8/9 | 8/9 | 8/9 | 8/9 | 8/9 | 10/15 | 10/15 |
| patternProperties | 11/18 | 11/18 | 13/23 | 13/23 | 13/23 | 15/26 | 15/26 |
| properties | 14/24 | 14/24 | 16/28 | 16/28 | 16/28 | 16/28 | 16/28 |
| propertyNames | - | - | 17/22 | 17/22 | 17/22 | 17/22 | 17/22 |
| recursiveRef | - | - | - | - | 20/36 | - | - |
| ref | 4/12 | 4/12 | 4/12 | 4/18 | 15/50 | 16/52 | 16/52 |
| ref-legacy | 12/26 | 12/31 | 12/33 | 12/33 | 1/2 | - | - |
| required | 3/4 | 11/17 | 12/18 | 12/18 | 12/18 | 12/18 | 12/18 |
| type | 79/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 1/56 | 1/71 | 1/71 |
| unevaluatedProperties | - | - | - | - | 0/129 | 0/129 | 0/129 |
| uniqueItems | 46/65 | 46/65 | 46/65 | 46/65 | 46/65 | 46/65 | 46/65 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 12/25 | 12/26 | 13/29 | 13/29 | 13/29 | 13/29 | 13/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/4 | 0/3 | 0/2 | 0/2 |
| dependencies-compatibility | - | - | - | - | 22/36 | 22/36 | - |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | 53/60 | 53/60 | 53/60 | 53/60 | 53/60 | 60/74 | 60/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-assertion | - | - | - | - | - | 2/4 | - |
| format-regex | 6/12 | - | - | 6/12 | 6/12 | 6/12 | 6/12 |
| format-time | - | - | - | 6/14 | 6/14 | 6/14 | - |
| non-bmp-regex | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 |
| non-schemas | - | 0/7 | 0/10 | 0/10 | 4/20 | 4/20 | 0/7 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Zod-RoundTrip"></a>



### Zod

Results using `z.fromJSONSchema(...)` and `z.toJSONSchema(...)` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | 11/16 | 11/16 | 12/18 | 12/18 | 12/21 | 12/21 | 12/21 |
| allOf | - | 12/27 | 15/30 | 15/30 | 15/30 | 15/30 | 15/30 |
| anchor | - | - | - | - | 1/18 | 1/18 | 1/18 |
| anchor-legacy | 4/14 | 4/14 | 1/14 | 1/14 | - | - | - |
| anyOf | - | 12/15 | 15/18 | 15/18 | 15/18 | 15/18 | 15/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 51/54 | 51/54 | 51/54 | 51/54 | 51/54 |
| contains | - | - | 15/24 | 16/26 | 37/68 | 37/68 | 37/68 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| dependentRequired | 23/24 | ✅ | ✅ | ✅ | 0/20 | 0/20 | 0/20 |
| dependentSchemas | ✅ | ✅ | ✅ | ✅ | 0/20 | 0/20 | 0/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 3/44 | 1/27 |
| enum | 40/49 | 42/49 | 42/49 | 42/49 | 48/55 | 48/55 | 48/55 |
| extends | 3/10 | - | - | - | - | - | - |
| format-color | 9/12 | - | - | - | - | - | - |
| format-date | 23/81 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format-date-time | 17/47 | 17/47 | 17/47 | 17/47 | 17/47 | 17/47 | 25/63 |
| format-duration | - | - | - | - | 26/51 | 26/51 | 26/51 |
| format-email | 27/59 | 27/59 | 27/59 | 27/59 | 27/59 | 27/71 | 27/71 |
| format-host-name | 14/28 | - | - | - | - | - | - |
| format-hostname | - | 15/29 | 15/29 | 29/66 | 29/66 | 29/66 | 15/29 |
| format-idn-email | - | - | - | 16/24 | 16/24 | 16/24 | 16/24 |
| format-idn-hostname | - | - | - | 43/101 | 43/101 | 43/101 | 43/101 |
| format-ip-address | 11/41 | - | - | - | - | - | - |
| format-ipv4 | - | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 |
| format-ipv6 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 | 23/51 |
| format-iri | - | - | - | 17/32 | 17/32 | 17/32 | 17/32 |
| format-iri-reference | - | - | - | 15/25 | 15/25 | 15/25 | 15/25 |
| format-json-pointer | - | - | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format-regex | 12/18 | - | - | 12/18 | 12/18 | 12/18 | 12/18 |
| format-relative-json-pointer | - | - | - | 17/31 | 17/31 | 17/31 | 17/31 |
| format-time | 7/9 | - | - | 14/42 | 14/42 | 14/42 | 14/45 |
| format-unknown | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format-uri | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 | 21/48 |
| format-uri-reference | - | - | 17/31 | 17/31 | 17/31 | 17/31 | 17/31 |
| format-uri-template | - | - | 27/48 | 27/48 | 27/48 | 27/48 | 27/48 |
| format-uuid | - | - | - | - | 15/29 | 15/29 | 15/29 |
| id | - | - | 5/10 | 5/10 | 14/52 | 14/52 | 14/52 |
| id-legacy | 15/40 | 15/46 | 5/38 | 5/38 | - | - | - |
| if-then-else | - | - | - | 0/30 | 0/30 | 0/30 | 0/30 |
| infinite-loop-detection | - | - | - | - | 1/2 | 1/2 | 1/2 |
| infinite-loop-detection-legacy | 1/2 | 1/2 | 1/2 | 1/2 | - | - | - |
| items | 25/37 | 25/38 | 30/45 | 30/45 | 35/45 | 31/40 | 31/40 |
| maximum | 10/14 | 10/14 | 8/12 | 8/12 | 8/12 | 8/12 | 8/12 |
| maxItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| maxLength | 4/5 | 4/5 | 5/7 | 5/7 | 5/7 | 5/7 | 5/7 |
| maxProperties | - | 6/8 | 7/10 | 7/10 | 7/10 | 7/10 | 7/10 |
| minimum | 12/17 | 12/17 | 10/15 | 10/15 | 10/15 | 10/15 | 10/15 |
| minItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| minLength | 3/5 | 3/5 | 4/7 | 4/7 | 4/7 | 4/7 | 4/7 |
| minProperties | - | 7/8 | 8/10 | 8/10 | 8/10 | 8/10 | 8/10 |
| multipleOf | 9/13 | 9/13 | 9/13 | 9/13 | 9/13 | 9/13 | 9/13 |
| not | - | 10/20 | 10/38 | 10/38 | 10/40 | 10/40 | 10/40 |
| oneOf | - | 14/23 | 18/27 | 18/27 | 18/27 | 18/27 | 18/27 |
| pattern | 8/9 | 8/9 | 8/9 | 8/9 | 8/9 | 14/15 | 14/15 |
| patternProperties | 11/18 | 11/18 | 13/23 | 13/23 | 13/23 | 16/26 | 16/26 |
| properties | 14/24 | 14/24 | 16/28 | 16/28 | 16/28 | 16/28 | 16/28 |
| propertyNames | - | - | 17/22 | 17/22 | 17/22 | 17/22 | 17/22 |
| recursiveRef | - | - | - | - | 28/36 | - | - |
| ref | 4/12 | 4/12 | 4/12 | 4/18 | 16/50 | 17/52 | 17/52 |
| ref-legacy | 13/26 | 13/31 | 13/33 | 13/33 | 1/2 | - | - |
| required | 3/4 | 11/17 | 12/18 | 12/18 | 12/18 | 12/18 | 12/18 |
| type | 79/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 1/56 | 1/71 | 1/71 |
| unevaluatedProperties | - | - | - | - | 0/129 | 0/129 | 0/129 |
| uniqueItems | 46/65 | 46/65 | 46/65 | 46/65 | 46/65 | 46/65 | 46/65 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 12/25 | 13/26 | 14/29 | 14/29 | 14/29 | 14/29 | 14/29 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/4 | 0/3 | 0/2 | 0/2 |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | - |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | 46/60 | 46/60 | 46/60 | 46/60 | 46/60 | 56/74 | 56/74 |
| float-overflow | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-assertion | - | - | - | - | - | 2/4 | - |
| format-regex | 6/12 | - | - | 6/12 | 6/12 | 6/12 | 6/12 |
| format-time | - | - | - | 6/14 | 6/14 | 6/14 | - |
| non-bmp-regex | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 |
| non-schemas | - | 0/7 | 0/10 | 0/10 | 4/20 | 4/20 | 0/7 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="ArkType-Semantics"></a>



### ArkType

Results using `jsonSchemaToType(...)` to test ArkType semantics against the Json Schema specification.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | 0/16 | 0/16 | 0/18 | 0/18 | 0/21 | 0/21 | 0/21 |
| allOf | - | 2/27 | 4/30 | 4/30 | 4/30 | 4/30 | 4/30 |
| anchor | - | - | - | - | 0/18 | 0/18 | 0/18 |
| anchor-legacy | 0/14 | 0/14 | 0/14 | 0/14 | - | - | - |
| anyOf | - | 2/15 | 5/18 | 5/18 | 5/18 | 5/18 | 5/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 47/54 | 47/54 | 47/54 | 47/54 | 47/54 |
| contains | - | - | 0/24 | 0/26 | 0/68 | 0/68 | 0/68 |
| content | - | - | - | - | 0/18 | 0/18 | 0/18 |
| default | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 |
| dependentRequired | 0/24 | 0/17 | 0/20 | 0/20 | 0/20 | 0/20 | 0/20 |
| dependentSchemas | 0/9 | 0/16 | 0/20 | 0/20 | 0/20 | 0/20 | 0/20 |
| disallow | 0/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 2/44 | 0/27 |
| enum | 39/49 | 41/49 | 41/49 | 41/49 | 47/55 | 47/55 | 47/55 |
| extends | 0/10 | - | - | - | - | - | - |
| format-color | 0/12 | - | - | - | - | - | - |
| format-date | 0/81 | - | - | 0/81 | 0/81 | 0/81 | 0/81 |
| format-date-time | 0/47 | 0/47 | 0/47 | 0/47 | 0/47 | 0/47 | 0/63 |
| format-duration | - | - | - | - | 0/51 | 0/51 | 0/51 |
| format-email | 0/59 | 0/59 | 0/59 | 0/59 | 0/59 | 0/71 | 0/71 |
| format-host-name | 0/28 | - | - | - | - | - | - |
| format-hostname | - | 0/29 | 0/29 | 0/66 | 0/66 | 0/66 | 0/29 |
| format-idn-email | - | - | - | 0/24 | 0/24 | 0/24 | 0/24 |
| format-idn-hostname | - | - | - | 0/101 | 0/101 | 0/101 | 0/101 |
| format-ip-address | 0/41 | - | - | - | - | - | - |
| format-ipv4 | - | 0/41 | 0/41 | 0/41 | 0/41 | 0/41 | 0/41 |
| format-ipv6 | 0/51 | 0/51 | 0/51 | 0/51 | 0/51 | 0/51 | 0/51 |
| format-iri | - | - | - | 0/32 | 0/32 | 0/32 | 0/32 |
| format-iri-reference | - | - | - | 0/25 | 0/25 | 0/25 | 0/25 |
| format-json-pointer | - | - | 0/40 | 0/40 | 0/40 | 0/40 | 0/40 |
| format-regex | 0/18 | - | - | 0/18 | 0/18 | 0/18 | 0/18 |
| format-relative-json-pointer | - | - | - | 0/31 | 0/31 | 0/31 | 0/31 |
| format-time | 0/9 | - | - | 0/42 | 0/42 | 0/42 | 0/45 |
| format-unknown | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | - |
| format-uri | 0/48 | 0/48 | 0/48 | 0/48 | 0/48 | 0/48 | 0/48 |
| format-uri-reference | - | - | 0/31 | 0/31 | 0/31 | 0/31 | 0/31 |
| format-uri-template | - | - | 0/48 | 0/48 | 0/48 | 0/48 | 0/48 |
| format-uuid | - | - | - | - | 0/29 | 0/29 | 0/29 |
| id | - | - | 0/10 | 0/10 | 0/52 | 0/52 | 0/52 |
| id-legacy | 0/40 | 0/46 | 0/38 | 0/38 | - | - | - |
| if-then-else | - | - | - | 0/30 | 0/30 | 0/30 | 0/30 |
| infinite-loop-detection | - | - | - | - | 0/2 | 0/2 | 0/2 |
| infinite-loop-detection-legacy | 0/2 | 0/2 | 0/2 | 0/2 | - | - | - |
| items | 3/37 | 3/38 | 3/45 | 3/45 | 3/45 | 3/40 | 3/40 |
| maximum | 0/14 | 0/14 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 |
| maxItems | 0/4 | 0/4 | 0/6 | 0/6 | 0/6 | 0/6 | 0/6 |
| maxLength | 0/5 | 0/5 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| maxProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| minimum | 0/17 | 0/17 | 0/15 | 0/15 | 0/15 | 0/15 | 0/15 |
| minItems | 0/4 | 0/4 | 0/6 | 0/6 | 0/6 | 0/6 | 0/6 |
| minLength | 0/5 | 0/5 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| minProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| multipleOf | 1/13 | 0/13 | 0/13 | 0/13 | 0/13 | 0/13 | 0/13 |
| not | - | 8/20 | 26/38 | 26/38 | 26/40 | 26/40 | 26/40 |
| oneOf | - | 2/23 | 6/27 | 6/27 | 6/27 | 6/27 | 6/27 |
| pattern | 0/9 | 0/9 | 0/9 | 0/9 | 0/9 | 2/15 | 2/15 |
| patternProperties | 0/18 | 0/18 | 0/23 | 0/23 | 0/23 | 2/26 | 2/26 |
| properties | 0/24 | 0/24 | 0/28 | 0/28 | 0/28 | 0/28 | 0/28 |
| propertyNames | - | - | 0/22 | 0/22 | 0/22 | 0/22 | 0/22 |
| recursiveRef | - | - | - | - | 2/36 | - | - |
| ref | 0/12 | 0/12 | 0/12 | 0/18 | 2/50 | 2/52 | 2/52 |
| ref-legacy | 2/26 | 2/31 | 2/33 | 2/33 | 0/2 | - | - |
| required | 0/4 | 0/17 | 0/18 | 0/18 | 0/18 | 0/18 | 0/18 |
| type | 78/99 | 78/79 | 79/80 | 79/80 | 79/80 | 79/80 | 79/80 |
| unevaluatedItems | - | - | - | - | 1/56 | 1/71 | 1/71 |
| unevaluatedProperties | - | - | - | - | 20/129 | 20/129 | 20/129 |
| uniqueItems | 0/65 | 0/65 | 0/65 | 0/65 | 0/65 | 0/65 | 0/65 |
| vocabulary | - | - | - | - | 2/5 | 2/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 6/25 | 6/26 | 7/29 | 7/29 | 7/29 | 7/29 | 7/29 |
| content | - | - | - | 0/10 | - | - | - |
| cross-draft | - | - | - | 1/4 | 1/3 | 1/2 | 1/2 |
| dependencies-compatibility | - | - | - | - | 0/36 | 0/36 | - |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | 40/60 | 40/60 | 40/60 | 40/60 | 40/60 | 40/74 | 40/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-assertion | - | - | - | - | - | 0/4 | - |
| format-regex | 0/12 | - | - | 0/12 | 0/12 | 0/12 | 0/12 |
| format-time | - | - | - | 0/14 | 0/14 | 0/14 | - |
| non-bmp-regex | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 |
| non-schemas | - | 0/7 | 0/10 | 0/10 | 0/20 | 0/20 | 0/7 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 0/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 0/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="ArkType-RoundTrip"></a>



### ArkType

Results using `@ark/json-schema` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalProperties | 0/16 | 0/16 | 0/18 | 0/18 | 0/21 | 0/21 | 0/21 |
| allOf | - | 2/27 | 4/30 | 4/30 | 4/30 | 4/30 | 4/30 |
| anchor | - | - | - | - | 0/18 | 0/18 | 0/18 |
| anchor-legacy | 0/14 | 0/14 | 0/14 | 0/14 | - | - | - |
| anyOf | - | 2/15 | 5/18 | 5/18 | 5/18 | 5/18 | 5/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 35/54 | 35/54 | 35/54 | 35/54 | 35/54 |
| contains | - | - | 0/24 | 0/26 | 0/68 | 0/68 | 0/68 |
| content | - | - | - | - | 0/18 | 0/18 | 0/18 |
| default | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 |
| dependentRequired | 0/24 | 0/17 | 0/20 | 0/20 | 0/20 | 0/20 | 0/20 |
| dependentSchemas | 0/9 | 0/16 | 0/20 | 0/20 | 0/20 | 0/20 | 0/20 |
| disallow | 0/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 2/44 | 0/27 |
| enum | 30/49 | 32/49 | 32/49 | 32/49 | 38/55 | 38/55 | 38/55 |
| extends | 0/10 | - | - | - | - | - | - |
| format-color | 0/12 | - | - | - | - | - | - |
| format-date | 0/81 | - | - | 0/81 | 0/81 | 0/81 | 0/81 |
| format-date-time | 0/47 | 0/47 | 0/47 | 0/47 | 0/47 | 0/47 | 0/63 |
| format-duration | - | - | - | - | 0/51 | 0/51 | 0/51 |
| format-email | 0/59 | 0/59 | 0/59 | 0/59 | 0/59 | 0/71 | 0/71 |
| format-host-name | 0/28 | - | - | - | - | - | - |
| format-hostname | - | 0/29 | 0/29 | 0/66 | 0/66 | 0/66 | 0/29 |
| format-idn-email | - | - | - | 0/24 | 0/24 | 0/24 | 0/24 |
| format-idn-hostname | - | - | - | 0/101 | 0/101 | 0/101 | 0/101 |
| format-ip-address | 0/41 | - | - | - | - | - | - |
| format-ipv4 | - | 0/41 | 0/41 | 0/41 | 0/41 | 0/41 | 0/41 |
| format-ipv6 | 0/51 | 0/51 | 0/51 | 0/51 | 0/51 | 0/51 | 0/51 |
| format-iri | - | - | - | 0/32 | 0/32 | 0/32 | 0/32 |
| format-iri-reference | - | - | - | 0/25 | 0/25 | 0/25 | 0/25 |
| format-json-pointer | - | - | 0/40 | 0/40 | 0/40 | 0/40 | 0/40 |
| format-regex | 0/18 | - | - | 0/18 | 0/18 | 0/18 | 0/18 |
| format-relative-json-pointer | - | - | - | 0/31 | 0/31 | 0/31 | 0/31 |
| format-time | 0/9 | - | - | 0/42 | 0/42 | 0/42 | 0/45 |
| format-unknown | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | - |
| format-uri | 0/48 | 0/48 | 0/48 | 0/48 | 0/48 | 0/48 | 0/48 |
| format-uri-reference | - | - | 0/31 | 0/31 | 0/31 | 0/31 | 0/31 |
| format-uri-template | - | - | 0/48 | 0/48 | 0/48 | 0/48 | 0/48 |
| format-uuid | - | - | - | - | 0/29 | 0/29 | 0/29 |
| id | - | - | 0/10 | 0/10 | 0/52 | 0/52 | 0/52 |
| id-legacy | 0/40 | 0/46 | 0/38 | 0/38 | - | - | - |
| if-then-else | - | - | - | 0/30 | 0/30 | 0/30 | 0/30 |
| infinite-loop-detection | - | - | - | - | 0/2 | 0/2 | 0/2 |
| infinite-loop-detection-legacy | 0/2 | 0/2 | 0/2 | 0/2 | - | - | - |
| items | 3/37 | 3/38 | 3/45 | 3/45 | 3/45 | 3/40 | 3/40 |
| maximum | 0/14 | 0/14 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 |
| maxItems | 0/4 | 0/4 | 0/6 | 0/6 | 0/6 | 0/6 | 0/6 |
| maxLength | 0/5 | 0/5 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| maxProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| minimum | 0/17 | 0/17 | 0/15 | 0/15 | 0/15 | 0/15 | 0/15 |
| minItems | 0/4 | 0/4 | 0/6 | 0/6 | 0/6 | 0/6 | 0/6 |
| minLength | 0/5 | 0/5 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| minProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| multipleOf | 1/13 | 0/13 | 0/13 | 0/13 | 0/13 | 0/13 | 0/13 |
| not | - | 0/20 | 0/38 | 0/38 | 0/40 | 0/40 | 0/40 |
| oneOf | - | 0/23 | 0/27 | 0/27 | 0/27 | 0/27 | 0/27 |
| pattern | 0/9 | 0/9 | 0/9 | 0/9 | 0/9 | 6/15 | 6/15 |
| patternProperties | 0/18 | 0/18 | 0/23 | 0/23 | 0/23 | 3/26 | 3/26 |
| properties | 0/24 | 0/24 | 0/28 | 0/28 | 0/28 | 0/28 | 0/28 |
| propertyNames | - | - | 0/22 | 0/22 | 0/22 | 0/22 | 0/22 |
| recursiveRef | - | - | - | - | 0/36 | - | - |
| ref | 0/12 | 0/12 | 0/12 | 0/18 | 0/50 | 0/52 | 0/52 |
| ref-legacy | 0/26 | 0/31 | 0/33 | 0/33 | 0/2 | - | - |
| required | 0/4 | 0/17 | 0/18 | 0/18 | 0/18 | 0/18 | 0/18 |
| type | 79/99 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 1/56 | 1/71 | 1/71 |
| unevaluatedProperties | - | - | - | - | 18/129 | 18/129 | 18/129 |
| uniqueItems | 0/65 | 0/65 | 0/65 | 0/65 | 0/65 | 0/65 | 0/65 |
| vocabulary | - | - | - | - | 2/5 | 2/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| bignum | 6/25 | 6/26 | 7/29 | 7/29 | 7/29 | 7/29 | 7/29 |
| content | - | - | - | 0/10 | - | - | - |
| cross-draft | - | - | - | 1/4 | 1/3 | 1/2 | 1/2 |
| dependencies-compatibility | - | - | - | - | 0/36 | 0/36 | - |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | 40/60 | 40/60 | 40/60 | 40/60 | 40/60 | 40/74 | 40/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-assertion | - | - | - | - | - | 0/4 | - |
| format-regex | 0/12 | - | - | 0/12 | 0/12 | 0/12 | 0/12 |
| format-time | - | - | - | 0/14 | 0/14 | 0/14 | - |
| non-bmp-regex | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 |
| non-schemas | - | 0/7 | 0/10 | 0/10 | 0/20 | 0/20 | 0/7 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 0/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 0/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| zero-terminated-floats | 0/1 | 0/1 | - | - | - | - | - |


</details>

