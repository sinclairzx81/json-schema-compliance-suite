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
$ npm run test             # run tests
```

## Tests

This tool peforms the following tests

| Test | Description |
|:-----|:------------|
| **Validation** | JSON Schema is passed directly to the library and used for validation. Results indicate compliance with the official JSON Schema test suite. |
| **Semantics** | The JSON Schema is decoded into library types and validated using the library’s internal logic. Results indicate how closely the library aligns with the formal semantics of JSON Schema. |
| **RoundTrip** | JSON Schema is decoded then re-encoded using library provided translation API. The translated JSON Schema is then passed to CfWorker for validation. Failed tests indicate either lossy translation or serialization error.  |


## Results
Updated: Thu Aug 06 2026


### Validation


| Library | Results     | Test      | Passed  | Failed | Coverage |
| :--     | :--        | :--       | :--     | :--    | :--      |
| [TypeBox](https://github.com/sinclairzx81/typebox) | [Results](#TypeBox-Validation) | Validation | 10481 | 372 | 96.6% |
| [CFWorker](https://github.com/cfworker/cfworker/blob/main/packages/json-schema/README.md) | [Results](#CFWorker-Validation) | Validation | 9948 | 905 | 91.7% |
| [Ata](https://github.com/ata-core/ata-validator) | [Results](#Ata-Validation) | Validation | 9472 | 1381 | 87.3% |
| [ZSchema](https://github.com/zaggino/z-schema) | [Results](#ZSchema-Validation) | Validation | 9322 | 1531 | 85.9% |
| [JsonSchema](https://github.com/tdegrunt/jsonschema) | [Results](#JsonSchema-Validation) | Validation | 9312 | 1541 | 85.8% |
| [Djv](https://github.com/korzio/djv) | [Results](#Djv-Validation) | Validation | 8006 | 2847 | 73.8% |
| [Ajv](https://github.com/ajv-validator/ajv) | [Results](#Ajv-Validation) | Validation | 7986 | 2867 | 73.6% |


### Semantics


| Library | Results     | Test      | Passed  | Failed | Coverage |
| :--     | :--        | :--       | :--     | :--    | :--      |
| [Sury](https://github.com/DZakh/sury) | [Results](#Sury-Semantics) | Semantics | 6671 | 4182 | 61.5% |
| [Zod](https://github.com/colinhacks/zod) | [Results](#Zod-Semantics) | Semantics | 6124 | 4729 | 56.4% |
| [ArkType](https://github.com/arktypeio/arktype) | [Results](#ArkType-Semantics) | Semantics | 1783 | 9070 | 16.4% |


### RoundTrip


| Library | Results     | Test      | Passed  | Failed | Coverage |
| :--     | :--        | :--       | :--     | :--    | :--      |
| [Zod](https://github.com/colinhacks/zod) | [Results](#Zod-RoundTrip) | RoundTrip | 6253 | 4600 | 57.6% |
| [Sury](https://github.com/DZakh/sury) | [Results](#Sury-RoundTrip) | RoundTrip | 5050 | 5803 | 46.5% |
| [ArkType](https://github.com/arktypeio/arktype) | [Results](#ArkType-RoundTrip) | RoundTrip | 1514 | 9339 | 14.0% |


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
| additionalItems | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| definitions | - | 0/2 | 0/2 | 0/2 | - | - | - |
| defs | - | - | - | - | 1/2 | 1/2 | - |
| dependencies | 17/18 | ✅ | ✅ | ✅ | - | - | - |
| dependentRequired | - | - | - | - | ✅ | ✅ | ✅ |
| dependentSchemas | - | - | - | - | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 38/44 | 19/27 |
| enum | 14/16 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMaximum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMinimum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 4/10 | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | 114/133 | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxContains | - | - | - | - | ✅ | ✅ | ✅ |
| maximum | 13/14 | 13/14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minContains | - | - | - | - | ✅ | ✅ | ✅ |
| minimum | 12/13 | 16/17 | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| prefixItems | - | - | - | - | - | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | ✅ | - | - |
| ref | 22/27 | 37/45 | 67/70 | 75/78 | 79/81 | 77/79 | 77/79 |
| refRemote | 4/8 | 8/17 | 11/23 | 11/23 | 15/31 | 15/31 | 15/31 |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 73/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | ✅ | ✅ | 70/71 |
| unevaluatedProperties | - | - | - | - | ✅ | ✅ | 128/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | 3/4 | 3/4 | 3/4 |
| bignum | 7/9 | 7/9 | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 1/2 | 1/3 | 0/1 | - |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | ✅ |
| dynamicRef | - | - | - | - | - | ✅ | ✅ |
| ecmascript-regex | - | 69/74 | 69/74 | 69/74 | 69/74 | 69/74 | 69/74 |
| float-overflow | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-annotation | - | - | - | - | - | - | 114/133 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format/date-time | 9/11 | 31/33 | 31/33 | 31/33 | 31/33 | 31/33 | 31/33 |
| format/duration | - | - | - | - | ✅ | ✅ | ✅ |
| format/ecmascript-regex | ✅ | - | - | - | - | 11/12 | 11/12 |
| format/email | ✅ | ✅ | ✅ | ✅ | ✅ | 22/27 | 22/27 |
| format/host-name | 2/12 | - | - | - | - | - | - |
| format/hostname | - | 29/30 | 29/30 | ✅ | ✅ | ✅ | ✅ |
| format/idn-email | - | - | - | 13/18 | 13/18 | 13/18 | 14/19 |
| format/idn-hostname | - | - | - | 81/89 | 82/90 | 82/90 | 82/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/iri | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format/iri-reference | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format/json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format/relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format/time | 2/3 | - | - | ✅ | ✅ | ✅ | ✅ |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/uri-reference | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/uri-template | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | 2/3 | 6/7 | 6/7 | 2/3 | 2/3 | 2/3 |
| no-schema | - | - | - | - | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 4/6 |
| refOfUnknownKeyword | - | - | - | - | ✅ | ✅ | ✅ |
| unknownKeyword | - | - | 1/3 | 1/3 | 1/3 | 1/3 | 1/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="CFWorker-Validation"></a>



### CFWorker

Results for the @cfworker/json-schema validation library.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | 6/8 | 6/8 | 6/8 |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| definitions | - | 0/2 | 0/2 | 0/2 | - | - | - |
| defs | - | - | - | - | 0/2 | 0/2 | - |
| dependencies | 17/18 | ✅ | ✅ | ✅ | - | - | - |
| dependentRequired | - | - | - | - | ✅ | ✅ | ✅ |
| dependentSchemas | - | - | - | - | ✅ | ✅ | ✅ |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 15/44 | 6/27 |
| enum | 14/16 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMaximum | - | - | 2/4 | ✅ | ✅ | 2/4 | 2/4 |
| exclusiveMinimum | - | - | 2/4 | ✅ | ✅ | 2/4 | 2/4 |
| extends | 4/10 | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | 118/133 | - |
| if-then-else | - | - | - | ✅ | ✅ | 28/30 | 24/26 |
| infinite-loop-detection | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxContains | - | - | - | - | ✅ | ✅ | ✅ |
| maximum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minContains | - | - | - | - | ✅ | ✅ | ✅ |
| minimum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| prefixItems | - | - | - | - | - | ✅ | ✅ |
| properties | ✅ | 23/24 | 27/28 | 27/28 | 27/28 | 27/28 | 27/28 |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | ✅ | - | - |
| ref | 23/27 | 41/45 | 66/70 | 74/78 | 78/81 | 73/79 | 73/79 |
| refRemote | 0/8 | 0/17 | 0/23 | 0/23 | 0/31 | 0/31 | 0/31 |
| required | 3/4 | 13/17 | 14/18 | 14/18 | 14/18 | 14/18 | 14/18 |
| type | 69/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 55/56 | 67/71 | 67/71 |
| unevaluatedProperties | - | - | - | - | ✅ | 126/129 | 126/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| bignum | ✅ | ✅ | 7/9 | ✅ | ✅ | 7/9 | 7/9 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/2 | 0/3 | 0/1 | - |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | ✅ |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-annotation | - | - | - | - | - | - | 118/133 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format/date-time | 10/11 | 29/33 | 29/33 | 29/33 | 29/33 | 29/33 | 29/33 |
| format/duration | - | - | - | - | 47/52 | 47/52 | 47/52 |
| format/ecmascript-regex | ✅ | - | - | - | - | ✅ | ✅ |
| format/email | ✅ | ✅ | ✅ | ✅ | ✅ | 22/27 | 22/27 |
| format/host-name | 2/12 | - | - | - | - | - | - |
| format/hostname | - | 29/30 | 29/30 | 40/64 | 40/64 | 40/64 | 40/64 |
| format/idn-email | - | - | - | 16/18 | 16/18 | 16/18 | 16/19 |
| format/idn-hostname | - | - | - | 35/89 | 36/90 | 36/90 | 36/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/iri | - | - | - | 11/15 | 11/15 | 11/15 | 11/15 |
| format/iri-reference | - | - | - | 11/13 | 11/13 | 11/13 | 11/13 |
| format/json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format/relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format/time | ✅ | - | - | 35/47 | 35/47 | 35/47 | 35/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | ✅ | 43/44 | 43/44 | 43/44 | 43/44 | 43/44 | 43/44 |
| format/uri-reference | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/uri-template | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/uuid | - | - | - | - | 27/28 | 27/28 | 27/28 |
| id | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| no-schema | - | - | - | - | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 4/6 |
| refOfUnknownKeyword | - | - | - | - | 8/10 | 8/10 | 8/10 |
| unknownKeyword | - | - | 0/3 | 0/3 | 0/3 | 0/3 | 0/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="JsonSchema-Validation"></a>



### JsonSchema

Results for the jsonschema validation library.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| additionalProperties | 15/16 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | 0/8 | 0/8 | 0/8 |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| definitions | - | 0/2 | 0/2 | 0/2 | - | - | - |
| defs | - | - | - | - | 0/2 | 0/2 | - |
| dependencies | ✅ | ✅ | ✅ | ✅ | - | - | - |
| dependentRequired | - | - | - | - | 14/20 | 14/20 | 14/20 |
| dependentSchemas | - | - | - | - | 10/20 | 10/20 | 10/20 |
| disallow | ✅ | - | - | - | - | - | - |
| divisibleBy | ✅ | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 4/44 | 1/27 |
| enum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMaximum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMinimum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | ✅ | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | 118/133 | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | 22/29 | 22/29 |
| maxContains | - | - | - | - | 8/14 | 8/14 | 8/14 |
| maximum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minContains | - | - | - | - | 16/28 | 16/28 | 16/28 |
| minimum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| multipleOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | 39/40 | 39/40 | 39/40 |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| prefixItems | - | - | - | - | - | 9/11 | 9/11 |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | 22/34 | - | - |
| ref | 25/27 | 43/45 | 54/70 | 56/78 | 35/81 | 34/79 | 34/79 |
| refRemote | 0/8 | 0/17 | 0/23 | 0/23 | 0/31 | 0/31 | 0/31 |
| required | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 34/56 | 43/71 | 43/71 |
| unevaluatedProperties | - | - | - | - | 82/129 | 82/129 | 82/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | 63/69 | 63/69 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | 1/4 | 1/4 | 1/4 |
| bignum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/2 | 0/3 | 0/1 | - |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | ✅ |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | 118/133 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format/color | ✅ | - | - | - | - | - | - |
| format/date | 27/33 | - | - | 72/81 | 72/81 | 72/81 | 72/81 |
| format/date-time | 10/11 | 26/33 | 26/33 | 26/33 | 26/33 | 26/33 | 26/33 |
| format/duration | - | - | - | - | 39/52 | 39/52 | 39/52 |
| format/ecmascript-regex | ✅ | - | - | - | - | 11/12 | 11/12 |
| format/email | ✅ | ✅ | ✅ | ✅ | ✅ | 23/27 | 23/27 |
| format/host-name | ✅ | - | - | - | - | - | - |
| format/hostname | - | 29/30 | 29/30 | 40/64 | 40/64 | 40/64 | 40/64 |
| format/idn-email | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format/idn-hostname | - | - | - | 35/89 | 36/90 | 36/90 | 36/90 |
| format/ip-address | ✅ | - | - | - | - | - | - |
| format/ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/ipv6 | ✅ | 37/40 | 37/40 | 37/40 | 37/40 | 37/40 | 37/40 |
| format/iri | - | - | - | 14/15 | 14/15 | 14/15 | 14/15 |
| format/iri-reference | - | - | - | ✅ | ✅ | ✅ | ✅ |
| format/json-pointer | - | - | 39/40 | 39/40 | 39/40 | 39/40 | 39/40 |
| format/regex | ✅ | - | - | ✅ | ✅ | ✅ | ✅ |
| format/relative-json-pointer | - | - | - | 23/25 | 23/25 | 23/25 | 23/25 |
| format/time | ✅ | - | - | 33/47 | 33/47 | 33/47 | 33/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | ✅ | 31/44 | 31/44 | 31/44 | 31/44 | 31/44 | 31/44 |
| format/uri-reference | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/uri-template | - | - | 9/10 | 12/18 | 12/18 | 12/18 | 12/18 |
| format/uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | ✅ | ✅ | ✅ | 1/3 | 1/3 | 1/3 |
| no-schema | - | - | - | - | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 2/6 |
| refOfUnknownKeyword | - | - | - | - | ✅ | ✅ | ✅ |
| unknownKeyword | - | - | ✅ | ✅ | 0/3 | 0/3 | 0/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Ata-Validation"></a>



### Ata

Results for the Ata validator using the `isValidObject(...)` function.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | 11/14 | 12/17 | 14/19 | 14/19 | 14/19 | - | - |
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 53/54 | 53/54 | 53/54 | 53/54 | 53/54 |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| definitions | - | 1/2 | 1/2 | 1/2 | - | - | - |
| defs | - | - | - | - | 1/2 | 1/2 | - |
| dependencies | 11/18 | 16/29 | 21/36 | 21/36 | - | - | - |
| dependentRequired | - | - | - | - | ✅ | ✅ | ✅ |
| dependentSchemas | - | - | - | - | 19/20 | 19/20 | 19/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 39/44 | 22/27 |
| enum | 10/16 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMaximum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMinimum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 1/10 | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | 124/133 | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | ✅ |
| infinite-loop-detection | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| items | 6/7 | 16/21 | 22/28 | 22/28 | 22/28 | 28/29 | 28/29 |
| maxContains | - | - | - | - | ✅ | ✅ | ✅ |
| maximum | 11/14 | 11/14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | 7/8 | 9/10 | 9/10 | 9/10 | 9/10 | 9/10 |
| minContains | - | - | - | - | ✅ | ✅ | ✅ |
| minimum | 12/13 | 16/17 | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | 7/8 | 9/10 | 9/10 | 9/10 | 9/10 | 9/10 |
| multipleOf | - | 9/11 | 9/11 | 9/11 | 9/11 | 9/11 | 9/11 |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| prefixItems | - | - | - | - | - | ✅ | ✅ |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| recursiveRef | - | - | - | - | 19/34 | - | - |
| ref | 22/27 | 37/45 | 62/70 | 70/78 | 78/81 | 78/79 | 78/79 |
| refRemote | 4/8 | 8/17 | 11/23 | 11/23 | 15/31 | 15/31 | 15/31 |
| required | 2/4 | 12/17 | 13/18 | 13/18 | 13/18 | 13/18 | 13/18 |
| type | 73/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 42/56 | ✅ | 70/71 |
| unevaluatedProperties | - | - | - | - | 128/129 | ✅ | 128/129 |
| uniqueItems | 60/62 | 67/69 | 67/69 | 67/69 | 67/69 | ✅ | ✅ |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | ✅ | ✅ | ✅ |
| bignum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 1/2 | 1/3 | 0/1 | - |
| dependencies-compatibility | - | - | - | - | 22/36 | 22/36 | 22/36 |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | - | 66/74 | 66/74 | 66/74 | 66/74 | 66/74 | 66/74 |
| float-overflow | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format-annotation | - | - | - | - | - | - | 124/133 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | 27/33 | - | - | 73/81 | 73/81 | 73/81 | 73/81 |
| format/date-time | ✅ | 29/33 | 29/33 | 29/33 | 29/33 | 29/33 | 29/33 |
| format/duration | - | - | - | - | 46/52 | 46/52 | 46/52 |
| format/ecmascript-regex | 2/3 | - | - | - | - | 6/12 | 6/12 |
| format/email | 6/11 | 14/20 | 14/20 | 14/20 | 14/20 | 18/27 | 18/27 |
| format/host-name | 2/12 | - | - | - | - | - | - |
| format/hostname | - | ✅ | ✅ | 40/64 | 40/64 | 40/64 | 40/64 |
| format/idn-email | - | - | - | 16/18 | 16/18 | 16/18 | 16/19 |
| format/idn-hostname | - | - | - | 35/89 | 36/90 | 36/90 | 36/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| format/ipv6 | 8/12 | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format/iri | - | - | - | 11/15 | 11/15 | 11/15 | 11/15 |
| format/iri-reference | - | - | - | 11/13 | 11/13 | 11/13 | 11/13 |
| format/json-pointer | - | - | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format/regex | 1/2 | - | - | 7/8 | 7/8 | 7/8 | 7/8 |
| format/relative-json-pointer | - | - | - | 13/25 | 13/25 | 13/25 | 13/25 |
| format/time | ✅ | - | - | 36/47 | 36/47 | 36/47 | 36/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | ✅ | 31/44 | 31/44 | 31/44 | 31/44 | 31/44 | 31/44 |
| format/uri-reference | - | - | 13/17 | 13/17 | 13/17 | 13/17 | 13/17 |
| format/uri-template | - | - | 9/10 | 12/18 | 12/18 | 12/18 | 12/18 |
| format/uuid | - | - | - | - | ✅ | ✅ | ✅ |
| id | - | 2/3 | ✅ | ✅ | ✅ | ✅ | ✅ |
| no-schema | - | - | - | - | ✅ | ✅ | - |
| non-bmp-regex | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 6/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | ✅ |
| refOfUnknownKeyword | - | - | - | - | ✅ | ✅ | ✅ |
| unknownKeyword | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="ZSchema-Validation"></a>



### ZSchema

Results for the z-schema validator using the `validate(...)` function wrapped in try/catch.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | 7/14 | 9/17 | 11/19 | 11/19 | ✅ | - | - |
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 9/21 |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | 20/30 |
| anchor | - | - | - | - | ✅ | ✅ | 4/8 |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | 6/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | 32/54 |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | 10/25 |
| content | - | - | - | - | ✅ | ✅ | 0/18 |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 1/7 |
| definitions | - | ✅ | ✅ | ✅ | - | - | - |
| defs | - | - | - | - | ✅ | ✅ | - |
| dependencies | 12/18 | ✅ | ✅ | ✅ | - | - | - |
| dependentRequired | - | - | - | - | ✅ | ✅ | 6/20 |
| dependentSchemas | - | - | - | - | ✅ | ✅ | 10/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 39/44 | 16/27 |
| enum | 14/16 | ✅ | ✅ | ✅ | ✅ | ✅ | 29/51 |
| exclusiveMaximum | - | - | ✅ | ✅ | ✅ | ✅ | 2/4 |
| exclusiveMinimum | - | - | ✅ | ✅ | ✅ | ✅ | 2/4 |
| extends | 7/10 | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | 114/133 | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | 8/26 |
| infinite-loop-detection | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 1/2 |
| items | 5/7 | 13/21 | 18/28 | 18/28 | ✅ | ✅ | 12/29 |
| maxContains | - | - | - | - | ✅ | ✅ | 7/14 |
| maximum | 10/14 | 10/14 | ✅ | ✅ | ✅ | ✅ | 2/8 |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 2/6 |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 2/7 |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | 3/10 |
| minContains | - | - | - | - | ✅ | ✅ | 14/28 |
| minimum | 12/13 | 13/17 | ✅ | ✅ | ✅ | ✅ | 3/11 |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 2/6 |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 3/7 |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | 2/10 |
| multipleOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | 4/11 |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | 24/40 |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | 15/27 |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 2/12 |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 11/26 |
| prefixItems | - | - | - | - | - | ✅ | 2/11 |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 12/28 |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | 2/12 |
| recursiveRef | - | - | - | - | 17/34 | - | - |
| ref | 22/27 | 41/45 | 62/70 | 70/78 | ✅ | ✅ | 42/79 |
| refRemote | 4/8 | 8/17 | 11/23 | 11/23 | 15/31 | 15/31 | 15/31 |
| required | 2/4 | ✅ | ✅ | ✅ | ✅ | ✅ | 6/18 |
| type | 67/80 | ✅ | ✅ | ✅ | ✅ | ✅ | 59/80 |
| unevaluatedItems | - | - | - | - | 55/56 | ✅ | 29/71 |
| unevaluatedProperties | - | - | - | - | 128/129 | ✅ | 62/129 |
| uniqueItems | 44/62 | 51/69 | 51/69 | 51/69 | ✅ | ✅ | 19/69 |
| vocabulary | - | - | - | - | 2/5 | 2/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | ✅ | ✅ | 2/4 |
| bignum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 3/9 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 1/2 | 1/3 | 0/1 | - |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | 14/36 |
| dynamicRef | - | - | - | - | - | ✅ | 1/2 |
| ecmascript-regex | - | ✅ | ✅ | ✅ | ✅ | ✅ | 38/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | 0/133 |
| format-assertion | - | - | - | - | - | 2/4 | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | ✅ | - | - | ✅ | ✅ | ✅ | 58/81 |
| format/date-time | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 19/33 |
| format/duration | - | - | - | - | ✅ | ✅ | 25/52 |
| format/ecmascript-regex | ✅ | - | - | - | - | ✅ | 6/12 |
| format/email | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 11/27 |
| format/host-name | ✅ | - | - | - | - | - | - |
| format/hostname | - | ✅ | ✅ | ✅ | ✅ | ✅ | 35/64 |
| format/idn-email | - | - | - | ✅ | ✅ | ✅ | 3/19 |
| format/idn-hostname | - | - | - | ✅ | ✅ | ✅ | 54/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | 30/41 |
| format/ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 23/40 |
| format/iri | - | - | - | ✅ | ✅ | ✅ | 4/15 |
| format/iri-reference | - | - | - | ✅ | ✅ | ✅ | 2/13 |
| format/json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | 12/40 |
| format/regex | ✅ | - | - | ✅ | ✅ | ✅ | 1/8 |
| format/relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | 12/25 |
| format/time | 2/3 | - | - | ✅ | ✅ | ✅ | 28/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 23/44 |
| format/uri-reference | - | - | ✅ | ✅ | ✅ | ✅ | 4/17 |
| format/uri-template | - | - | ✅ | 14/18 | 14/18 | 14/18 | 6/18 |
| format/uuid | - | - | - | - | ✅ | ✅ | 13/28 |
| id | - | ✅ | ✅ | ✅ | ✅ | ✅ | 1/3 |
| no-schema | - | - | - | - | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 6/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 4/6 |
| refOfUnknownKeyword | - | - | - | - | ✅ | ✅ | 5/10 |
| unknownKeyword | - | - | ✅ | ✅ | ✅ | ✅ | 2/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Ajv-Validation"></a>



### Ajv

Results for Ajv testing Draft 3 to 2020-12. Tests disable Ajv strict mode.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | 12/14 | ✅ | ✅ | ✅ | ✅ | - | - |
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/21 |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | 0/30 |
| anchor | - | - | - | - | ✅ | ✅ | 0/8 |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | 0/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | ✅ | ✅ | ✅ | ✅ | 0/54 |
| contains | - | - | ✅ | ✅ | ✅ | ✅ | 0/25 |
| content | - | - | - | - | ✅ | ✅ | 0/18 |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/7 |
| definitions | - | 0/2 | 0/2 | ✅ | - | - | - |
| defs | - | - | - | - | ✅ | ✅ | - |
| dependencies | 11/18 | ✅ | ✅ | ✅ | - | - | - |
| dependentRequired | - | - | - | - | ✅ | ✅ | 0/20 |
| dependentSchemas | - | - | - | - | ✅ | ✅ | 0/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 11/44 | 1/27 |
| enum | 10/16 | ✅ | ✅ | ✅ | 45/51 | 45/51 | 0/51 |
| exclusiveMaximum | - | - | ✅ | ✅ | ✅ | ✅ | 0/4 |
| exclusiveMinimum | - | - | ✅ | ✅ | ✅ | ✅ | 0/4 |
| extends | 1/10 | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | 118/133 | - |
| if-then-else | - | - | - | ✅ | ✅ | ✅ | 0/26 |
| infinite-loop-detection | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/2 |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/29 |
| maxContains | - | - | - | - | ✅ | ✅ | 0/14 |
| maximum | 8/14 | 8/14 | ✅ | ✅ | ✅ | ✅ | 0/8 |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/6 |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/7 |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | 0/10 |
| minContains | - | - | - | - | ✅ | ✅ | 0/28 |
| minimum | 11/13 | 11/17 | ✅ | ✅ | ✅ | ✅ | 0/11 |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/6 |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/7 |
| minProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | 0/10 |
| multipleOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | 0/11 |
| not | - | ✅ | ✅ | ✅ | ✅ | ✅ | 0/40 |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | 0/27 |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/12 |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/26 |
| prefixItems | - | - | - | - | - | ✅ | 0/11 |
| properties | ✅ | 23/24 | 27/28 | 27/28 | 27/28 | 27/28 | 0/28 |
| propertyNames | - | - | ✅ | ✅ | ✅ | ✅ | 0/12 |
| recursiveRef | - | - | - | - | 32/34 | - | - |
| ref | 21/27 | 28/45 | 65/70 | 75/78 | 73/81 | 71/79 | 0/79 |
| refRemote | 0/8 | 0/17 | 0/23 | 0/23 | 0/31 | 0/31 | 0/31 |
| required | 1/4 | 13/17 | 14/18 | 14/18 | 14/18 | 14/18 | 0/18 |
| type | 60/80 | ✅ | ✅ | ✅ | ✅ | ✅ | 0/80 |
| unevaluatedItems | - | - | - | - | 53/56 | 59/71 | 0/71 |
| unevaluatedProperties | - | - | - | - | 126/129 | 124/129 | 0/129 |
| uniqueItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/69 |
| vocabulary | - | - | - | - | 0/5 | 0/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | ✅ | ✅ | 0/4 |
| bignum | 7/9 | 7/9 | ✅ | ✅ | ✅ | ✅ | 0/9 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/2 | 0/3 | 0/1 | - |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | 0/36 |
| dynamicRef | - | - | - | - | - | 1/2 | 0/2 |
| ecmascript-regex | - | ✅ | ✅ | ✅ | ✅ | ✅ | 0/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | 0/133 |
| format-assertion | - | - | - | - | - | 0/4 | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | ✅ | - | - | ✅ | ✅ | ✅ | 0/81 |
| format/date-time | 8/11 | 30/33 | 30/33 | 30/33 | 30/33 | 30/33 | 0/33 |
| format/duration | - | - | - | - | 50/52 | 50/52 | 0/52 |
| format/ecmascript-regex | ✅ | - | - | - | - | 11/12 | 0/12 |
| format/email | ✅ | ✅ | ✅ | ✅ | ✅ | 22/27 | 0/27 |
| format/host-name | 2/12 | - | - | - | - | - | - |
| format/hostname | - | 29/30 | 29/30 | 40/64 | 40/64 | 40/64 | 0/64 |
| format/idn-email | - | - | - | 16/18 | 16/18 | 16/18 | 0/19 |
| format/idn-hostname | - | - | - | 35/89 | 36/90 | 36/90 | 0/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | ✅ | ✅ | ✅ | ✅ | ✅ | 0/41 |
| format/ipv6 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/40 |
| format/iri | - | - | - | 11/15 | 11/15 | 11/15 | 0/15 |
| format/iri-reference | - | - | - | 11/13 | 11/13 | 11/13 | 0/13 |
| format/json-pointer | - | - | ✅ | ✅ | ✅ | ✅ | 0/40 |
| format/regex | ✅ | - | - | ✅ | ✅ | ✅ | 0/8 |
| format/relative-json-pointer | - | - | - | ✅ | ✅ | ✅ | 0/25 |
| format/time | 2/3 | - | - | ✅ | ✅ | ✅ | 0/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | ✅ | 43/44 | 43/44 | 43/44 | 43/44 | 43/44 | 0/44 |
| format/uri-reference | - | - | ✅ | ✅ | ✅ | ✅ | 0/17 |
| format/uri-template | - | - | ✅ | ✅ | ✅ | ✅ | 0/18 |
| format/uuid | - | - | - | - | 27/28 | 27/28 | 0/28 |
| id | - | 0/3 | ✅ | ✅ | ✅ | ✅ | 0/3 |
| no-schema | - | - | - | - | ✅ | ✅ | - |
| non-bmp-regex | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 0/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 0/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| refOfUnknownKeyword | - | - | - | - | ✅ | ✅ | 0/10 |
| unknownKeyword | - | - | 0/3 | 0/3 | 0/3 | 0/3 | 0/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Djv-Validation"></a>



### Djv

Results for the djv validation library.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | ✅ | ✅ | ✅ | ✅ | ✅ | - | - |
| additionalProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| allOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| anchor | - | - | - | - | 0/8 | 0/8 | 0/8 |
| anyOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 42/54 | 42/54 | 42/54 | 42/54 | 42/54 |
| contains | - | - | 18/19 | 20/21 | 20/21 | 20/21 | 24/25 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| definitions | - | 0/2 | 0/2 | 0/2 | - | - | - |
| defs | - | - | - | - | 0/2 | 0/2 | - |
| dependencies | 17/18 | 28/29 | 35/36 | 35/36 | - | - | - |
| dependentRequired | - | - | - | - | 14/20 | 14/20 | 14/20 |
| dependentSchemas | - | - | - | - | 10/20 | 10/20 | 10/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 7/44 | 3/27 |
| enum | 14/16 | 41/49 | 41/45 | 41/45 | 41/51 | 41/51 | 41/51 |
| exclusiveMaximum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| exclusiveMinimum | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| extends | 4/10 | - | - | - | - | - | - |
| format | 36/60 | 3/36 | 14/54 | 62/102 | 74/114 | 84/133 | - |
| if-then-else | - | - | - | 20/30 | 20/30 | 20/30 | 18/26 |
| infinite-loop-detection | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| items | ✅ | ✅ | ✅ | ✅ | ✅ | 22/29 | 22/29 |
| maxContains | - | - | - | - | 8/14 | 8/14 | 8/14 |
| maximum | 11/14 | 11/14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxProperties | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minContains | - | - | - | - | 16/28 | 16/28 | 16/28 |
| minimum | 12/13 | 16/17 | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minProperties | - | 7/8 | 9/10 | 9/10 | 9/10 | 9/10 | 9/10 |
| multipleOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| not | - | ✅ | ✅ | ✅ | 39/40 | 39/40 | 39/40 |
| oneOf | - | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | 10/12 | 10/12 |
| patternProperties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 25/26 |
| prefixItems | - | - | - | - | - | 9/11 | 9/11 |
| properties | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| propertyNames | - | - | 21/22 | 21/22 | 21/22 | 21/22 | 11/12 |
| recursiveRef | - | - | - | - | 23/34 | - | - |
| ref | 23/27 | 35/45 | 51/70 | 51/78 | 49/81 | 48/79 | 48/79 |
| refRemote | 1/8 | 3/17 | 3/23 | 3/23 | 2/31 | 2/31 | 2/31 |
| required | 3/4 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| type | 60/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 34/56 | 43/71 | 43/71 |
| unevaluatedProperties | - | - | - | - | 82/129 | 82/129 | 82/129 |
| uniqueItems | 37/62 | 39/69 | 39/69 | 39/69 | 39/69 | 37/69 | 37/69 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | 1/4 | 1/4 | 1/4 |
| bignum | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/2 | 0/3 | 0/1 | - |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | ✅ |
| dynamicRef | - | - | - | - | - | 1/2 | 1/2 |
| ecmascript-regex | - | 64/74 | 64/74 | 64/74 | 64/74 | 64/74 | 64/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | 84/133 |
| format-assertion | - | - | - | - | - | ✅ | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | 14/33 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format/date-time | ✅ | 23/33 | 23/33 | 23/33 | 23/33 | 23/33 | 23/33 |
| format/duration | - | - | - | - | 27/52 | 27/52 | 27/52 |
| format/ecmascript-regex | 2/3 | - | - | - | - | 5/12 | 5/12 |
| format/email | 7/11 | 9/20 | 9/20 | 9/20 | 9/20 | 12/27 | 12/27 |
| format/host-name | 2/12 | - | - | - | - | - | - |
| format/hostname | - | 27/30 | 27/30 | 38/64 | 38/64 | 38/64 | 38/64 |
| format/idn-email | - | - | - | 16/18 | 16/18 | 16/18 | 16/19 |
| format/idn-hostname | - | - | - | 35/89 | 36/90 | 36/90 | 36/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | 34/41 | 34/41 | 34/41 | 34/41 | 34/41 | 34/41 |
| format/ipv6 | 10/12 | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format/iri | - | - | - | 11/15 | 11/15 | 11/15 | 11/15 |
| format/iri-reference | - | - | - | 11/13 | 11/13 | 11/13 | 11/13 |
| format/json-pointer | - | - | 35/40 | 35/40 | 35/40 | 35/40 | 35/40 |
| format/regex | 1/2 | - | - | 7/8 | 7/8 | 7/8 | 7/8 |
| format/relative-json-pointer | - | - | - | 13/25 | 13/25 | 13/25 | 13/25 |
| format/time | 1/3 | - | - | 19/47 | 19/47 | 19/47 | 19/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | ✅ | 38/44 | 38/44 | 38/44 | 38/44 | 38/44 | 38/44 |
| format/uri-reference | - | - | 16/17 | 16/17 | 16/17 | 16/17 | 16/17 |
| format/uri-template | - | - | 9/10 | 17/18 | 17/18 | 17/18 | 17/18 |
| format/uuid | - | - | - | - | 15/28 | 15/28 | 15/28 |
| id | - | 1/3 | 5/7 | 3/7 | 1/3 | 1/3 | 1/3 |
| no-schema | - | - | - | - | ✅ | ✅ | - |
| non-bmp-regex | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 | 9/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 2/6 |
| refOfUnknownKeyword | - | - | - | - | ✅ | ✅ | ✅ |
| unknownKeyword | - | - | 0/3 | 0/3 | 0/3 | 0/3 | 0/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Sury-Semantics"></a>



### Sury

Results using `S.fromJSONSchema(...)` to test Sury semantics against the Json Schema specification.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | 3/14 | 5/17 | 6/19 | 6/19 | 6/19 | - | - |
| additionalProperties | 9/16 | 9/16 | 9/16 | 9/16 | 13/21 | 13/21 | 13/21 |
| allOf | - | 26/27 | 29/30 | 29/30 | 29/30 | 29/30 | 29/30 |
| anchor | - | - | - | - | 4/8 | 4/8 | 4/8 |
| anyOf | - | 14/15 | 17/18 | 17/18 | 17/18 | 17/18 | 17/18 |
| boolean_schema | - | - | 9/18 | 9/18 | 9/18 | 9/18 | 9/18 |
| const | - | - | 47/54 | 47/54 | 47/54 | 47/54 | 47/54 |
| contains | - | - | 9/19 | 10/21 | 10/21 | 10/21 | 10/25 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| definitions | - | 1/2 | 1/2 | 1/2 | - | - | - |
| defs | - | - | - | - | 1/2 | 1/2 | - |
| dependencies | 7/18 | 13/29 | 15/36 | 15/36 | - | - | - |
| dependentRequired | - | - | - | - | 6/20 | 6/20 | 6/20 |
| dependentSchemas | - | - | - | - | 10/20 | 10/20 | 10/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 22/44 | 12/27 |
| enum | 13/16 | 38/49 | 34/45 | 34/45 | 34/51 | 34/51 | 34/51 |
| exclusiveMaximum | - | - | 3/4 | 3/4 | 3/4 | 3/4 | 3/4 |
| exclusiveMinimum | - | - | 3/4 | 3/4 | 3/4 | 3/4 | 3/4 |
| extends | 4/10 | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| if-then-else | - | - | - | 26/30 | 26/30 | 26/30 | 22/26 |
| infinite-loop-detection | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 |
| items | ✅ | 16/21 | 21/28 | 21/28 | 21/28 | 20/29 | 20/29 |
| maxContains | - | - | - | - | 7/14 | 7/14 | 7/14 |
| maximum | 13/14 | 13/14 | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| maxLength | 4/5 | 4/5 | 6/7 | 6/7 | 6/7 | 6/7 | 6/7 |
| maxProperties | - | 2/8 | 3/10 | 3/10 | 3/10 | 3/10 | 3/10 |
| minContains | - | - | - | - | 14/28 | 14/28 | 14/28 |
| minimum | 12/13 | 16/17 | ✅ | ✅ | ✅ | ✅ | ✅ |
| minItems | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| minLength | 4/5 | 4/5 | 6/7 | 6/7 | 6/7 | 6/7 | 6/7 |
| minProperties | - | 1/8 | 2/10 | 2/10 | 2/10 | 2/10 | 2/10 |
| multipleOf | - | 4/11 | 4/11 | 4/11 | 4/11 | 4/11 | 4/11 |
| not | - | ✅ | ✅ | ✅ | 39/40 | 39/40 | 39/40 |
| oneOf | - | 21/23 | 25/27 | 25/27 | 25/27 | 25/27 | 25/27 |
| pattern | ✅ | ✅ | ✅ | ✅ | ✅ | 10/12 | 10/12 |
| patternProperties | 7/17 | 7/18 | 10/23 | 10/23 | 10/23 | 10/25 | 11/26 |
| prefixItems | - | - | - | - | - | 5/11 | 5/11 |
| properties | 11/15 | 17/24 | 21/28 | 21/28 | 21/28 | 21/28 | 21/28 |
| propertyNames | - | - | 5/22 | 5/22 | 5/22 | 5/22 | 2/12 |
| recursiveRef | - | - | - | - | 23/34 | - | - |
| ref | 14/27 | 24/45 | 36/70 | 40/78 | 42/81 | 41/79 | 41/79 |
| refRemote | 4/8 | 9/17 | 12/23 | 12/23 | 16/31 | 16/31 | 16/31 |
| required | 3/4 | 12/17 | 13/18 | 13/18 | 13/18 | 13/18 | 13/18 |
| type | 67/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 20/56 | 28/71 | 28/71 |
| unevaluatedProperties | - | - | - | - | 61/129 | 62/129 | 61/129 |
| uniqueItems | 17/62 | 19/69 | 19/69 | 19/69 | 19/69 | 19/69 | 19/69 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | 2/4 | 2/4 | 2/4 |
| bignum | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 1/2 | 2/3 | ✅ | - |
| dependencies-compatibility | - | - | - | - | 14/36 | 14/36 | 14/36 |
| dynamicRef | - | - | - | - | - | 1/2 | 1/2 |
| ecmascript-regex | - | 61/74 | 61/74 | 61/74 | 61/74 | 61/74 | 61/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | ✅ |
| format-assertion | - | - | - | - | - | 2/4 | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | 14/33 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format/date-time | 3/11 | 14/33 | 14/33 | 14/33 | 14/33 | 14/33 | 14/33 |
| format/duration | - | - | - | - | 27/52 | 27/52 | 27/52 |
| format/ecmascript-regex | 2/3 | - | - | - | - | 6/12 | 6/12 |
| format/email | 5/11 | 11/20 | 11/20 | 11/20 | 11/20 | 16/27 | 16/27 |
| format/host-name | 2/12 | - | - | - | - | - | - |
| format/hostname | - | 14/30 | 14/30 | 29/64 | 29/64 | 29/64 | 29/64 |
| format/idn-email | - | - | - | 16/18 | 16/18 | 16/18 | 16/19 |
| format/idn-hostname | - | - | - | 35/89 | 36/90 | 36/90 | 36/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 |
| format/ipv6 | 6/12 | 17/40 | 17/40 | 17/40 | 17/40 | 17/40 | 17/40 |
| format/iri | - | - | - | 11/15 | 11/15 | 11/15 | 11/15 |
| format/iri-reference | - | - | - | 11/13 | 11/13 | 11/13 | 11/13 |
| format/json-pointer | - | - | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format/regex | 1/2 | - | - | 7/8 | 7/8 | 7/8 | 7/8 |
| format/relative-json-pointer | - | - | - | 13/25 | 13/25 | 13/25 | 13/25 |
| format/time | 1/3 | - | - | 19/47 | 19/47 | 19/47 | 19/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | 1/4 | 21/44 | 21/44 | 21/44 | 21/44 | 21/44 | 21/44 |
| format/uri-reference | - | - | 13/17 | 13/17 | 13/17 | 13/17 | 13/17 |
| format/uri-template | - | - | 9/10 | 12/18 | 12/18 | 12/18 | 12/18 |
| format/uuid | - | - | - | - | 15/28 | 15/28 | 15/28 |
| id | - | 2/3 | 4/7 | 4/7 | 2/3 | 2/3 | 2/3 |
| no-schema | - | - | - | - | ✅ | ✅ | - |
| non-bmp-regex | 7/12 | 7/12 | 7/12 | 7/12 | 7/12 | 7/12 | 7/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | ✅ |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 4/6 |
| refOfUnknownKeyword | - | - | - | - | 5/10 | 5/10 | 5/10 |
| unknownKeyword | - | - | 1/3 | 1/3 | 1/3 | 1/3 | 1/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Sury-RoundTrip"></a>



### Sury

Results using `S.fromJSONSchema(...)` and `S.toJSONSchema(...)` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | 1/14 | 1/17 | 1/19 | 1/19 | 1/19 | - | - |
| additionalProperties | 5/16 | 5/16 | 5/16 | 5/16 | 5/21 | 5/21 | 5/21 |
| allOf | - | 8/27 | 9/30 | 9/30 | 9/30 | 9/30 | 9/30 |
| anchor | - | - | - | - | 4/8 | 4/8 | 4/8 |
| anyOf | - | 11/15 | 14/18 | 14/18 | 14/18 | 14/18 | 14/18 |
| boolean_schema | - | - | 9/18 | 9/18 | 9/18 | 9/18 | 9/18 |
| const | - | - | 35/54 | 35/54 | 35/54 | 35/54 | 35/54 |
| contains | - | - | 0/19 | 0/21 | 0/21 | 0/21 | 0/25 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| definitions | - | 1/2 | 1/2 | 1/2 | - | - | - |
| defs | - | - | - | - | 1/2 | 1/2 | - |
| dependencies | 0/18 | 0/29 | 0/36 | 0/36 | - | - | - |
| dependentRequired | - | - | - | - | 0/20 | 0/20 | 0/20 |
| dependentSchemas | - | - | - | - | 0/20 | 0/20 | 0/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 21/44 | 11/27 |
| enum | 11/16 | 32/49 | 28/45 | 28/45 | 28/51 | 28/51 | 28/51 |
| exclusiveMaximum | - | - | 2/4 | 2/4 | 2/4 | 2/4 | 2/4 |
| exclusiveMinimum | - | - | 2/4 | 2/4 | 2/4 | 2/4 | 2/4 |
| extends | 3/10 | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| if-then-else | - | - | - | 16/30 | 16/30 | 16/30 | 14/26 |
| infinite-loop-detection | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 |
| items | 5/7 | 13/21 | 18/28 | 18/28 | 18/28 | 19/29 | 19/29 |
| maxContains | - | - | - | - | 0/14 | 0/14 | 0/14 |
| maximum | 10/14 | 10/14 | 6/8 | 6/8 | 6/8 | 6/8 | 6/8 |
| maxItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| maxLength | 4/5 | 4/5 | 5/7 | 5/7 | 5/7 | 5/7 | 5/7 |
| maxProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| minContains | - | - | - | - | 0/28 | 0/28 | 0/28 |
| minimum | 9/13 | 12/17 | 8/11 | 8/11 | 8/11 | 8/11 | 8/11 |
| minItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| minLength | 3/5 | 3/5 | 4/7 | 4/7 | 4/7 | 4/7 | 4/7 |
| minProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| multipleOf | - | 0/11 | 0/11 | 0/11 | 0/11 | 0/11 | 0/11 |
| not | - | 6/20 | 15/38 | 15/38 | 15/40 | 15/40 | 15/40 |
| oneOf | - | 12/23 | 13/27 | 13/27 | 13/27 | 13/27 | 13/27 |
| pattern | 8/9 | 8/9 | 8/9 | 8/9 | 8/9 | 11/12 | 11/12 |
| patternProperties | 0/17 | 0/18 | 0/23 | 0/23 | 0/23 | 0/25 | 0/26 |
| prefixItems | - | - | - | - | - | 9/11 | 9/11 |
| properties | 5/15 | 10/24 | 12/28 | 12/28 | 12/28 | 12/28 | 12/28 |
| propertyNames | - | - | 0/22 | 0/22 | 0/22 | 0/22 | 0/12 |
| recursiveRef | - | - | - | - | 20/34 | - | - |
| ref | 13/27 | 22/45 | 33/70 | 37/78 | 36/81 | 36/79 | 36/79 |
| refRemote | 4/8 | 9/17 | 12/23 | 12/23 | 16/31 | 16/31 | 16/31 |
| required | 3/4 | 11/17 | 12/18 | 12/18 | 12/18 | 12/18 | 12/18 |
| type | 60/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 2/56 | 2/71 | 2/71 |
| unevaluatedProperties | - | - | - | - | 2/129 | 2/129 | 2/129 |
| uniqueItems | 0/62 | 0/69 | 0/69 | 0/69 | 0/69 | 0/69 | 0/69 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | 2/4 | 2/4 | 2/4 |
| bignum | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 1/2 | 2/3 | ✅ | - |
| dependencies-compatibility | - | - | - | - | 0/36 | 0/36 | 0/36 |
| dynamicRef | - | - | - | - | - | 1/2 | 1/2 |
| ecmascript-regex | - | 48/74 | 48/74 | 48/74 | 48/74 | 48/74 | 48/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | ✅ |
| format-assertion | - | - | - | - | - | 2/4 | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | 14/33 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format/date-time | 3/11 | 14/33 | 14/33 | 14/33 | 14/33 | 14/33 | 14/33 |
| format/duration | - | - | - | - | 27/52 | 27/52 | 27/52 |
| format/ecmascript-regex | 2/3 | - | - | - | - | 6/12 | 6/12 |
| format/email | 5/11 | 11/20 | 11/20 | 11/20 | 11/20 | 16/27 | 16/27 |
| format/host-name | 2/12 | - | - | - | - | - | - |
| format/hostname | - | 14/30 | 14/30 | 29/64 | 29/64 | 29/64 | 29/64 |
| format/idn-email | - | - | - | 16/18 | 16/18 | 16/18 | 16/19 |
| format/idn-hostname | - | - | - | 35/89 | 36/90 | 36/90 | 36/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 |
| format/ipv6 | 6/12 | 17/40 | 17/40 | 17/40 | 17/40 | 17/40 | 17/40 |
| format/iri | - | - | - | 11/15 | 11/15 | 11/15 | 11/15 |
| format/iri-reference | - | - | - | 11/13 | 11/13 | 11/13 | 11/13 |
| format/json-pointer | - | - | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format/regex | 1/2 | - | - | 7/8 | 7/8 | 7/8 | 7/8 |
| format/relative-json-pointer | - | - | - | 13/25 | 13/25 | 13/25 | 13/25 |
| format/time | 1/3 | - | - | 19/47 | 19/47 | 19/47 | 19/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | 1/4 | 21/44 | 21/44 | 21/44 | 21/44 | 21/44 | 21/44 |
| format/uri-reference | - | - | 13/17 | 13/17 | 13/17 | 13/17 | 13/17 |
| format/uri-template | - | - | 9/10 | 12/18 | 12/18 | 12/18 | 12/18 |
| format/uuid | - | - | - | - | 15/28 | 15/28 | 15/28 |
| id | - | 2/3 | 4/7 | 4/7 | 2/3 | 2/3 | 2/3 |
| no-schema | - | - | - | - | 2/3 | 2/3 | - |
| non-bmp-regex | 3/12 | 3/12 | 3/12 | 3/12 | 3/12 | 3/12 | 3/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| refOfUnknownKeyword | - | - | - | - | 5/10 | 5/10 | 5/10 |
| unknownKeyword | - | - | 1/3 | 1/3 | 1/3 | 1/3 | 1/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Zod-Semantics"></a>



### Zod

Results using `z.fromJSONSchema(...)` to test Zod semantics against the Json Schema specification.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | 11/14 | 12/17 | 13/19 | 13/19 | 13/19 | - | - |
| additionalProperties | 11/16 | 11/16 | 11/16 | 11/16 | 12/21 | 12/21 | 12/21 |
| allOf | - | 12/27 | 15/30 | 15/30 | 15/30 | 15/30 | 15/30 |
| anchor | - | - | - | - | 0/8 | 0/8 | 0/8 |
| anyOf | - | 12/15 | 15/18 | 15/18 | 15/18 | 15/18 | 15/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 47/54 | 47/54 | 47/54 | 47/54 | 47/54 |
| contains | - | - | 10/19 | 11/21 | 11/21 | 11/21 | 15/25 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| definitions | - | 0/2 | 0/2 | 0/2 | - | - | - |
| defs | - | - | - | - | 0/2 | 0/2 | - |
| dependencies | 11/18 | 16/29 | 21/36 | 21/36 | - | - | - |
| dependentRequired | - | - | - | - | 0/20 | 0/20 | 0/20 |
| dependentSchemas | - | - | - | - | 0/20 | 0/20 | 0/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 3/44 | 1/27 |
| enum | 11/16 | 38/49 | 34/45 | 34/45 | 40/51 | 40/51 | 40/51 |
| exclusiveMaximum | - | - | 2/4 | 2/4 | 2/4 | 2/4 | 2/4 |
| exclusiveMinimum | - | - | 2/4 | 2/4 | 2/4 | 2/4 | 2/4 |
| extends | 3/10 | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| if-then-else | - | - | - | 0/30 | 0/30 | 0/30 | 0/26 |
| infinite-loop-detection | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 |
| items | 5/7 | 13/21 | 18/28 | 18/28 | 22/28 | 21/29 | 21/29 |
| maxContains | - | - | - | - | 7/14 | 7/14 | 7/14 |
| maximum | 10/14 | 10/14 | 6/8 | 6/8 | 6/8 | 6/8 | 6/8 |
| maxItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| maxLength | 4/5 | 4/5 | 5/7 | 5/7 | 5/7 | 5/7 | 5/7 |
| maxProperties | - | 6/8 | 7/10 | 7/10 | 7/10 | 7/10 | 7/10 |
| minContains | - | - | - | - | 14/28 | 14/28 | 14/28 |
| minimum | 9/13 | 12/17 | 8/11 | 8/11 | 8/11 | 8/11 | 8/11 |
| minItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| minLength | 3/5 | 3/5 | 4/7 | 4/7 | 4/7 | 4/7 | 4/7 |
| minProperties | - | 7/8 | 8/10 | 8/10 | 8/10 | 8/10 | 8/10 |
| multipleOf | - | 8/11 | 8/11 | 8/11 | 8/11 | 8/11 | 8/11 |
| not | - | 10/20 | 10/38 | 10/38 | 10/40 | 10/40 | 10/40 |
| oneOf | - | 14/23 | 18/27 | 18/27 | 18/27 | 18/27 | 18/27 |
| pattern | 8/9 | 8/9 | 8/9 | 8/9 | 8/9 | 9/12 | 9/12 |
| patternProperties | 10/17 | 11/18 | 13/23 | 13/23 | 13/23 | 15/25 | 15/26 |
| prefixItems | - | - | - | - | - | 9/11 | 9/11 |
| properties | 9/15 | 14/24 | 16/28 | 16/28 | 16/28 | 16/28 | 16/28 |
| propertyNames | - | - | 17/22 | 17/22 | 17/22 | 17/22 | 10/12 |
| recursiveRef | - | - | - | - | 20/34 | - | - |
| ref | 13/27 | 13/45 | 21/70 | 21/78 | 27/81 | 27/79 | 27/79 |
| refRemote | 1/8 | 1/17 | 2/23 | 2/23 | 2/31 | 2/31 | 2/31 |
| required | 3/4 | 11/17 | 12/18 | 12/18 | 12/18 | 12/18 | 12/18 |
| type | 60/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 1/56 | 1/71 | 1/71 |
| unevaluatedProperties | - | - | - | - | 0/129 | 1/129 | 0/129 |
| uniqueItems | 45/62 | 50/69 | 50/69 | 50/69 | 50/69 | 50/69 | 50/69 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | 0/4 | 0/4 | 0/4 |
| bignum | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/2 | 0/3 | 0/1 | - |
| dependencies-compatibility | - | - | - | - | 22/36 | 22/36 | 22/36 |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | - | 56/74 | 56/74 | 56/74 | 56/74 | 56/74 | 56/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | ✅ |
| format-assertion | - | - | - | - | - | 2/4 | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | 14/33 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format/date-time | 3/11 | 14/33 | 14/33 | 14/33 | 14/33 | 14/33 | 14/33 |
| format/duration | - | - | - | - | 27/52 | 27/52 | 27/52 |
| format/ecmascript-regex | 2/3 | - | - | - | - | 6/12 | 6/12 |
| format/email | 5/11 | 11/20 | 11/20 | 11/20 | 11/20 | 16/27 | 16/27 |
| format/host-name | 2/12 | - | - | - | - | - | - |
| format/hostname | - | 14/30 | 14/30 | 29/64 | 29/64 | 29/64 | 29/64 |
| format/idn-email | - | - | - | 16/18 | 16/18 | 16/18 | 16/19 |
| format/idn-hostname | - | - | - | 35/89 | 36/90 | 36/90 | 36/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 |
| format/ipv6 | 6/12 | 17/40 | 17/40 | 17/40 | 17/40 | 17/40 | 17/40 |
| format/iri | - | - | - | 11/15 | 11/15 | 11/15 | 11/15 |
| format/iri-reference | - | - | - | 11/13 | 11/13 | 11/13 | 11/13 |
| format/json-pointer | - | - | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format/regex | 1/2 | - | - | 7/8 | 7/8 | 7/8 | 7/8 |
| format/relative-json-pointer | - | - | - | 13/25 | 13/25 | 13/25 | 13/25 |
| format/time | 1/3 | - | - | 19/47 | 19/47 | 19/47 | 19/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | 1/4 | 21/44 | 21/44 | 21/44 | 21/44 | 21/44 | 21/44 |
| format/uri-reference | - | - | 13/17 | 13/17 | 13/17 | 13/17 | 13/17 |
| format/uri-template | - | - | 9/10 | 12/18 | 12/18 | 12/18 | 12/18 |
| format/uuid | - | - | - | - | 15/28 | 15/28 | 15/28 |
| id | - | 0/3 | 0/7 | 0/7 | 0/3 | 0/3 | 0/3 |
| no-schema | - | - | - | - | 2/3 | 2/3 | - |
| non-bmp-regex | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| refOfUnknownKeyword | - | - | - | - | 4/10 | 4/10 | 4/10 |
| unknownKeyword | - | - | 0/3 | 0/3 | 0/3 | 0/3 | 0/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="Zod-RoundTrip"></a>



### Zod

Results using `z.fromJSONSchema(...)` and `z.toJSONSchema(...)` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | 11/14 | 12/17 | 13/19 | 13/19 | 13/19 | - | - |
| additionalProperties | 11/16 | 11/16 | 11/16 | 11/16 | 12/21 | 12/21 | 12/21 |
| allOf | - | 12/27 | 15/30 | 15/30 | 15/30 | 15/30 | 15/30 |
| anchor | - | - | - | - | 0/8 | 0/8 | 0/8 |
| anyOf | - | 12/15 | 15/18 | 15/18 | 15/18 | 15/18 | 15/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 51/54 | 51/54 | 51/54 | 51/54 | 51/54 |
| contains | - | - | 10/19 | 11/21 | 11/21 | 11/21 | 15/25 |
| content | - | - | - | - | ✅ | ✅ | ✅ |
| default | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| definitions | - | 0/2 | 0/2 | 0/2 | - | - | - |
| defs | - | - | - | - | 0/2 | 0/2 | - |
| dependencies | 17/18 | ✅ | ✅ | ✅ | - | - | - |
| dependentRequired | - | - | - | - | 0/20 | 0/20 | 0/20 |
| dependentSchemas | - | - | - | - | 0/20 | 0/20 | 0/20 |
| disallow | 4/9 | - | - | - | - | - | - |
| divisibleBy | 6/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 3/44 | 1/27 |
| enum | 11/16 | 38/49 | 34/45 | 34/45 | 40/51 | 40/51 | 40/51 |
| exclusiveMaximum | - | - | 2/4 | 2/4 | 2/4 | 2/4 | 2/4 |
| exclusiveMinimum | - | - | 2/4 | 2/4 | 2/4 | 2/4 | 2/4 |
| extends | 3/10 | - | - | - | - | - | - |
| format | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| if-then-else | - | - | - | 0/30 | 0/30 | 0/30 | 0/26 |
| infinite-loop-detection | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 | 1/2 |
| items | 5/7 | 13/21 | 18/28 | 18/28 | 21/28 | 20/29 | 20/29 |
| maxContains | - | - | - | - | 7/14 | 7/14 | 7/14 |
| maximum | 10/14 | 10/14 | 6/8 | 6/8 | 6/8 | 6/8 | 6/8 |
| maxItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| maxLength | 4/5 | 4/5 | 5/7 | 5/7 | 5/7 | 5/7 | 5/7 |
| maxProperties | - | 6/8 | 7/10 | 7/10 | 7/10 | 7/10 | 7/10 |
| minContains | - | - | - | - | 14/28 | 14/28 | 14/28 |
| minimum | 9/13 | 12/17 | 8/11 | 8/11 | 8/11 | 8/11 | 8/11 |
| minItems | 3/4 | 3/4 | 4/6 | 4/6 | 4/6 | 4/6 | 4/6 |
| minLength | 3/5 | 3/5 | 4/7 | 4/7 | 4/7 | 4/7 | 4/7 |
| minProperties | - | 7/8 | 8/10 | 8/10 | 8/10 | 8/10 | 8/10 |
| multipleOf | - | 8/11 | 8/11 | 8/11 | 8/11 | 8/11 | 8/11 |
| not | - | 10/20 | 10/38 | 10/38 | 10/40 | 10/40 | 10/40 |
| oneOf | - | 14/23 | 18/27 | 18/27 | 18/27 | 18/27 | 18/27 |
| pattern | 8/9 | 8/9 | 8/9 | 8/9 | 8/9 | 11/12 | 11/12 |
| patternProperties | 10/17 | 11/18 | 13/23 | 13/23 | 13/23 | 15/25 | 16/26 |
| prefixItems | - | - | - | - | - | 9/11 | 9/11 |
| properties | 9/15 | 14/24 | 16/28 | 16/28 | 16/28 | 16/28 | 16/28 |
| propertyNames | - | - | 17/22 | 17/22 | 17/22 | 17/22 | 10/12 |
| recursiveRef | - | - | - | - | 28/34 | - | - |
| ref | 14/27 | 14/45 | 22/70 | 22/78 | 28/81 | 28/79 | 28/79 |
| refRemote | 1/8 | 1/17 | 2/23 | 2/23 | 2/31 | 2/31 | 2/31 |
| required | 3/4 | 11/17 | 12/18 | 12/18 | 12/18 | 12/18 | 12/18 |
| type | 60/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 1/56 | 1/71 | 1/71 |
| unevaluatedProperties | - | - | - | - | 0/129 | 1/129 | 0/129 |
| uniqueItems | 45/62 | 50/69 | 50/69 | 50/69 | 50/69 | 50/69 | 50/69 |
| vocabulary | - | - | - | - | 4/5 | 4/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | 0/4 | 0/4 | 0/4 |
| bignum | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 |
| content | - | - | - | 6/10 | - | - | - |
| cross-draft | - | - | - | 0/2 | 0/3 | 0/1 | - |
| dependencies-compatibility | - | - | - | - | ✅ | ✅ | ✅ |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | - | 56/74 | 56/74 | 56/74 | 56/74 | 56/74 | 56/74 |
| float-overflow | - | ✅ | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | ✅ |
| format-assertion | - | - | - | - | - | 2/4 | - |
| format/color | 3/6 | - | - | - | - | - | - |
| format/date | 14/33 | - | - | 23/81 | 23/81 | 23/81 | 23/81 |
| format/date-time | 3/11 | 14/33 | 14/33 | 14/33 | 14/33 | 14/33 | 14/33 |
| format/duration | - | - | - | - | 27/52 | 27/52 | 27/52 |
| format/ecmascript-regex | 2/3 | - | - | - | - | 6/12 | 6/12 |
| format/email | 5/11 | 11/20 | 11/20 | 11/20 | 11/20 | 16/27 | 16/27 |
| format/host-name | 2/12 | - | - | - | - | - | - |
| format/hostname | - | 14/30 | 14/30 | 29/64 | 29/64 | 29/64 | 29/64 |
| format/idn-email | - | - | - | 16/18 | 16/18 | 16/18 | 16/19 |
| format/idn-hostname | - | - | - | 35/89 | 36/90 | 36/90 | 36/90 |
| format/ip-address | 1/3 | - | - | - | - | - | - |
| format/ipv4 | - | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 | 11/41 |
| format/ipv6 | 6/12 | 17/40 | 17/40 | 17/40 | 17/40 | 17/40 | 17/40 |
| format/iri | - | - | - | 11/15 | 11/15 | 11/15 | 11/15 |
| format/iri-reference | - | - | - | 11/13 | 11/13 | 11/13 | 11/13 |
| format/json-pointer | - | - | 28/40 | 28/40 | 28/40 | 28/40 | 28/40 |
| format/regex | 1/2 | - | - | 7/8 | 7/8 | 7/8 | 7/8 |
| format/relative-json-pointer | - | - | - | 13/25 | 13/25 | 13/25 | 13/25 |
| format/time | 1/3 | - | - | 19/47 | 19/47 | 19/47 | 19/47 |
| format/unknown | - | ✅ | ✅ | ✅ | ✅ | ✅ | - |
| format/uri | 1/4 | 21/44 | 21/44 | 21/44 | 21/44 | 21/44 | 21/44 |
| format/uri-reference | - | - | 13/17 | 13/17 | 13/17 | 13/17 | 13/17 |
| format/uri-template | - | - | 9/10 | 12/18 | 12/18 | 12/18 | 12/18 |
| format/uuid | - | - | - | - | 15/28 | 15/28 | 15/28 |
| id | - | 0/3 | 0/7 | 0/7 | 0/3 | 0/3 | 0/3 |
| no-schema | - | - | - | - | 2/3 | 2/3 | - |
| non-bmp-regex | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 | 6/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 4/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 17/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| refOfUnknownKeyword | - | - | - | - | 4/10 | 4/10 | 4/10 |
| unknownKeyword | - | - | 0/3 | 0/3 | 0/3 | 0/3 | 0/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="ArkType-Semantics"></a>



### ArkType

Results using `jsonSchemaToType(...)` to test ArkType semantics against the Json Schema specification.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | 0/14 | 0/17 | 0/19 | 0/19 | 0/19 | - | - |
| additionalProperties | 0/16 | 0/16 | 0/16 | 0/16 | 0/21 | 0/21 | 0/21 |
| allOf | - | 2/27 | 4/30 | 4/30 | 4/30 | 4/30 | 4/30 |
| anchor | - | - | - | - | 0/8 | 0/8 | 0/8 |
| anyOf | - | 2/15 | 5/18 | 5/18 | 5/18 | 5/18 | 5/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 47/54 | 47/54 | 47/54 | 47/54 | 47/54 |
| contains | - | - | 0/19 | 0/21 | 0/21 | 0/21 | 0/25 |
| content | - | - | - | - | 0/18 | 0/18 | 0/18 |
| default | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 |
| definitions | - | 0/2 | 0/2 | 0/2 | - | - | - |
| defs | - | - | - | - | 0/2 | 0/2 | - |
| dependencies | 0/18 | 0/29 | 0/36 | 0/36 | - | - | - |
| dependentRequired | - | - | - | - | 0/20 | 0/20 | 0/20 |
| dependentSchemas | - | - | - | - | 0/20 | 0/20 | 0/20 |
| disallow | 0/9 | - | - | - | - | - | - |
| divisibleBy | 0/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 2/44 | 0/27 |
| enum | 13/16 | 41/49 | 37/45 | 37/45 | 43/51 | 43/51 | 43/51 |
| exclusiveMaximum | - | - | 0/4 | 0/4 | 0/4 | 0/4 | 0/4 |
| exclusiveMinimum | - | - | 0/4 | 0/4 | 0/4 | 0/4 | 0/4 |
| extends | 0/10 | - | - | - | - | - | - |
| format | 0/60 | 0/36 | 0/54 | 0/102 | 0/114 | 0/133 | - |
| if-then-else | - | - | - | 0/30 | 0/30 | 0/30 | 0/26 |
| infinite-loop-detection | 0/2 | 0/2 | 0/2 | 0/2 | 0/2 | 0/2 | 0/2 |
| items | 0/7 | 3/21 | 3/28 | 3/28 | 3/28 | 3/29 | 3/29 |
| maxContains | - | - | - | - | 0/14 | 0/14 | 0/14 |
| maximum | 0/14 | 0/14 | 0/8 | 0/8 | 0/8 | 0/8 | 0/8 |
| maxItems | 0/4 | 0/4 | 0/6 | 0/6 | 0/6 | 0/6 | 0/6 |
| maxLength | 0/5 | 0/5 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| maxProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| minContains | - | - | - | - | 0/28 | 0/28 | 0/28 |
| minimum | 0/13 | 0/17 | 0/11 | 0/11 | 0/11 | 0/11 | 0/11 |
| minItems | 0/4 | 0/4 | 0/6 | 0/6 | 0/6 | 0/6 | 0/6 |
| minLength | 0/5 | 0/5 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| minProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| multipleOf | - | 0/11 | 0/11 | 0/11 | 0/11 | 0/11 | 0/11 |
| not | - | 8/20 | 26/38 | 26/38 | 26/40 | 26/40 | 26/40 |
| oneOf | - | 2/23 | 6/27 | 6/27 | 6/27 | 6/27 | 6/27 |
| pattern | 0/9 | 0/9 | 0/9 | 0/9 | 0/9 | 1/12 | 1/12 |
| patternProperties | 0/17 | 0/18 | 0/23 | 0/23 | 0/23 | 2/25 | 2/26 |
| prefixItems | - | - | - | - | - | 0/11 | 0/11 |
| properties | 0/15 | 0/24 | 0/28 | 0/28 | 0/28 | 0/28 | 0/28 |
| propertyNames | - | - | 0/22 | 0/22 | 0/22 | 0/22 | 0/12 |
| recursiveRef | - | - | - | - | 2/34 | - | - |
| ref | 1/27 | 1/45 | 2/70 | 2/78 | 2/81 | 2/79 | 2/79 |
| refRemote | 0/8 | 0/17 | 0/23 | 0/23 | 0/31 | 0/31 | 0/31 |
| required | 0/4 | 0/17 | 0/18 | 0/18 | 0/18 | 0/18 | 0/18 |
| type | 59/80 | 78/79 | 79/80 | 79/80 | 79/80 | 79/80 | 79/80 |
| unevaluatedItems | - | - | - | - | 1/56 | 1/71 | 1/71 |
| unevaluatedProperties | - | - | - | - | 20/129 | 5/129 | 20/129 |
| uniqueItems | 0/62 | 0/69 | 0/69 | 0/69 | 0/69 | 0/69 | 0/69 |
| vocabulary | - | - | - | - | 2/5 | 2/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | 0/4 | 0/4 | 0/4 |
| bignum | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 |
| content | - | - | - | 0/10 | - | - | - |
| cross-draft | - | - | - | 0/2 | 1/3 | ✅ | - |
| dependencies-compatibility | - | - | - | - | 0/36 | 0/36 | 0/36 |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | - | 40/74 | 52/74 | 52/74 | 52/74 | 52/74 | 52/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | 0/133 |
| format-assertion | - | - | - | - | - | 0/4 | - |
| format/color | 0/6 | - | - | - | - | - | - |
| format/date | 0/33 | - | - | 0/81 | 0/81 | 0/81 | 0/81 |
| format/date-time | 0/11 | 0/33 | 0/33 | 0/33 | 0/33 | 0/33 | 0/33 |
| format/duration | - | - | - | - | 0/52 | 0/52 | 0/52 |
| format/ecmascript-regex | 0/3 | - | - | - | - | 0/12 | 0/12 |
| format/email | 0/11 | 0/20 | 0/20 | 0/20 | 0/20 | 0/27 | 0/27 |
| format/host-name | 0/12 | - | - | - | - | - | - |
| format/hostname | - | 0/30 | 0/30 | 0/64 | 0/64 | 0/64 | 0/64 |
| format/idn-email | - | - | - | 0/18 | 0/18 | 0/18 | 0/19 |
| format/idn-hostname | - | - | - | 0/89 | 0/90 | 0/90 | 0/90 |
| format/ip-address | 0/3 | - | - | - | - | - | - |
| format/ipv4 | - | 0/41 | 0/41 | 0/41 | 0/41 | 0/41 | 0/41 |
| format/ipv6 | 0/12 | 0/40 | 0/40 | 0/40 | 0/40 | 0/40 | 0/40 |
| format/iri | - | - | - | 0/15 | 0/15 | 0/15 | 0/15 |
| format/iri-reference | - | - | - | 0/13 | 0/13 | 0/13 | 0/13 |
| format/json-pointer | - | - | 0/40 | 0/40 | 0/40 | 0/40 | 0/40 |
| format/regex | 0/2 | - | - | 0/8 | 0/8 | 0/8 | 0/8 |
| format/relative-json-pointer | - | - | - | 0/25 | 0/25 | 0/25 | 0/25 |
| format/time | 0/3 | - | - | 0/47 | 0/47 | 0/47 | 0/47 |
| format/unknown | - | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | - |
| format/uri | 0/4 | 0/44 | 0/44 | 0/44 | 0/44 | 0/44 | 0/44 |
| format/uri-reference | - | - | 0/17 | 0/17 | 0/17 | 0/17 | 0/17 |
| format/uri-template | - | - | 0/10 | 0/18 | 0/18 | 0/18 | 0/18 |
| format/uuid | - | - | - | - | 0/28 | 0/28 | 0/28 |
| id | - | 0/3 | 0/7 | 0/7 | 0/3 | 0/3 | 0/3 |
| no-schema | - | - | - | - | 0/3 | 0/3 | - |
| non-bmp-regex | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 0/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 0/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| refOfUnknownKeyword | - | - | - | - | 0/10 | 0/10 | 0/10 |
| unknownKeyword | - | - | 0/3 | 0/3 | 0/3 | 0/3 | 0/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>


---


<a name="ArkType-RoundTrip"></a>



### ArkType

Results using `@ark/json-schema` to bi-directionally transform JSON Schema. The transformed schema is passed to Cfworker for testing.


<details>
<summary>Specification Coverage</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| additionalItems | 0/14 | 0/17 | 0/19 | 0/19 | 0/19 | - | - |
| additionalProperties | 0/16 | 0/16 | 0/16 | 0/16 | 0/21 | 0/21 | 0/21 |
| allOf | - | 2/27 | 4/30 | 4/30 | 4/30 | 4/30 | 4/30 |
| anchor | - | - | - | - | 0/8 | 0/8 | 0/8 |
| anyOf | - | 2/15 | 5/18 | 5/18 | 5/18 | 5/18 | 5/18 |
| boolean_schema | - | - | ✅ | ✅ | ✅ | ✅ | ✅ |
| const | - | - | 35/54 | 35/54 | 35/54 | 35/54 | 35/54 |
| contains | - | - | 0/19 | 0/21 | 0/21 | 0/21 | 0/25 |
| content | - | - | - | - | 0/18 | 0/18 | 0/18 |
| default | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 | 3/7 |
| definitions | - | 0/2 | 0/2 | 0/2 | - | - | - |
| defs | - | - | - | - | 0/2 | 0/2 | - |
| dependencies | 0/18 | 0/29 | 0/36 | 0/36 | - | - | - |
| dependentRequired | - | - | - | - | 0/20 | 0/20 | 0/20 |
| dependentSchemas | - | - | - | - | 0/20 | 0/20 | 0/20 |
| disallow | 0/9 | - | - | - | - | - | - |
| divisibleBy | 0/9 | - | - | - | - | - | - |
| dynamicRef | - | - | - | - | - | 2/44 | 0/27 |
| enum | 11/16 | 32/49 | 28/45 | 28/45 | 34/51 | 34/51 | 34/51 |
| exclusiveMaximum | - | - | 0/4 | 0/4 | 0/4 | 0/4 | 0/4 |
| exclusiveMinimum | - | - | 0/4 | 0/4 | 0/4 | 0/4 | 0/4 |
| extends | 0/10 | - | - | - | - | - | - |
| format | 0/60 | 0/36 | 0/54 | 0/102 | 0/114 | 0/133 | - |
| if-then-else | - | - | - | 0/30 | 0/30 | 0/30 | 0/26 |
| infinite-loop-detection | 0/2 | 0/2 | 0/2 | 0/2 | 0/2 | 0/2 | 0/2 |
| items | 0/7 | 3/21 | 3/28 | 3/28 | 3/28 | 3/29 | 3/29 |
| maxContains | - | - | - | - | 0/14 | 0/14 | 0/14 |
| maximum | 0/14 | 0/14 | 0/8 | 0/8 | 0/8 | 0/8 | 0/8 |
| maxItems | 0/4 | 0/4 | 0/6 | 0/6 | 0/6 | 0/6 | 0/6 |
| maxLength | 0/5 | 0/5 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| maxProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| minContains | - | - | - | - | 0/28 | 0/28 | 0/28 |
| minimum | 0/13 | 0/17 | 0/11 | 0/11 | 0/11 | 0/11 | 0/11 |
| minItems | 0/4 | 0/4 | 0/6 | 0/6 | 0/6 | 0/6 | 0/6 |
| minLength | 0/5 | 0/5 | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 |
| minProperties | - | 0/8 | 0/10 | 0/10 | 0/10 | 0/10 | 0/10 |
| multipleOf | - | 0/11 | 0/11 | 0/11 | 0/11 | 0/11 | 0/11 |
| not | - | 0/20 | 0/38 | 0/38 | 0/40 | 0/40 | 0/40 |
| oneOf | - | 0/23 | 0/27 | 0/27 | 0/27 | 0/27 | 0/27 |
| pattern | 0/9 | 0/9 | 0/9 | 0/9 | 0/9 | 3/12 | 3/12 |
| patternProperties | 0/17 | 0/18 | 0/23 | 0/23 | 0/23 | 2/25 | 3/26 |
| prefixItems | - | - | - | - | - | 0/11 | 0/11 |
| properties | 0/15 | 0/24 | 0/28 | 0/28 | 0/28 | 0/28 | 0/28 |
| propertyNames | - | - | 0/22 | 0/22 | 0/22 | 0/22 | 0/12 |
| recursiveRef | - | - | - | - | 0/34 | - | - |
| ref | 0/27 | 0/45 | 0/70 | 0/78 | 0/81 | 0/79 | 0/79 |
| refRemote | 0/8 | 0/17 | 0/23 | 0/23 | 0/31 | 0/31 | 0/31 |
| required | 0/4 | 0/17 | 0/18 | 0/18 | 0/18 | 0/18 | 0/18 |
| type | 60/80 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| unevaluatedItems | - | - | - | - | 1/56 | 1/71 | 1/71 |
| unevaluatedProperties | - | - | - | - | 18/129 | 3/129 | 18/129 |
| uniqueItems | 0/62 | 0/69 | 0/69 | 0/69 | 0/69 | 0/69 | 0/69 |
| vocabulary | - | - | - | - | 2/5 | 2/5 | - |


</details>


<details>
<summary>Optional Formats and Proposals</summary>


| Spec | 3 | 4 | 6 | 7 | 2019-09 | 2020-12 | v1 |
|:-----|:--|:--|:--|:--|:--|:--|:--|
| anchor | - | - | - | - | 0/4 | 0/4 | 0/4 |
| bignum | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 | 5/9 |
| content | - | - | - | 0/10 | - | - | - |
| cross-draft | - | - | - | 0/2 | 1/3 | ✅ | - |
| dependencies-compatibility | - | - | - | - | 0/36 | 0/36 | 0/36 |
| dynamicRef | - | - | - | - | - | 0/2 | 0/2 |
| ecmascript-regex | - | 40/74 | 57/74 | 57/74 | 57/74 | 57/74 | 57/74 |
| float-overflow | - | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 | 0/1 |
| format-annotation | - | - | - | - | - | - | 0/133 |
| format-assertion | - | - | - | - | - | 0/4 | - |
| format/color | 0/6 | - | - | - | - | - | - |
| format/date | 0/33 | - | - | 0/81 | 0/81 | 0/81 | 0/81 |
| format/date-time | 0/11 | 0/33 | 0/33 | 0/33 | 0/33 | 0/33 | 0/33 |
| format/duration | - | - | - | - | 0/52 | 0/52 | 0/52 |
| format/ecmascript-regex | 0/3 | - | - | - | - | 0/12 | 0/12 |
| format/email | 0/11 | 0/20 | 0/20 | 0/20 | 0/20 | 0/27 | 0/27 |
| format/host-name | 0/12 | - | - | - | - | - | - |
| format/hostname | - | 0/30 | 0/30 | 0/64 | 0/64 | 0/64 | 0/64 |
| format/idn-email | - | - | - | 0/18 | 0/18 | 0/18 | 0/19 |
| format/idn-hostname | - | - | - | 0/89 | 0/90 | 0/90 | 0/90 |
| format/ip-address | 0/3 | - | - | - | - | - | - |
| format/ipv4 | - | 0/41 | 0/41 | 0/41 | 0/41 | 0/41 | 0/41 |
| format/ipv6 | 0/12 | 0/40 | 0/40 | 0/40 | 0/40 | 0/40 | 0/40 |
| format/iri | - | - | - | 0/15 | 0/15 | 0/15 | 0/15 |
| format/iri-reference | - | - | - | 0/13 | 0/13 | 0/13 | 0/13 |
| format/json-pointer | - | - | 0/40 | 0/40 | 0/40 | 0/40 | 0/40 |
| format/regex | 0/2 | - | - | 0/8 | 0/8 | 0/8 | 0/8 |
| format/relative-json-pointer | - | - | - | 0/25 | 0/25 | 0/25 | 0/25 |
| format/time | 0/3 | - | - | 0/47 | 0/47 | 0/47 | 0/47 |
| format/unknown | - | 0/7 | 0/7 | 0/7 | 0/7 | 0/7 | - |
| format/uri | 0/4 | 0/44 | 0/44 | 0/44 | 0/44 | 0/44 | 0/44 |
| format/uri-reference | - | - | 0/17 | 0/17 | 0/17 | 0/17 | 0/17 |
| format/uri-template | - | - | 0/10 | 0/18 | 0/18 | 0/18 | 0/18 |
| format/uuid | - | - | - | - | 0/28 | 0/28 | 0/28 |
| id | - | 0/3 | 0/7 | 0/7 | 0/3 | 0/3 | 0/3 |
| no-schema | - | - | - | - | 0/3 | 0/3 | - |
| non-bmp-regex | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 | 0/12 |
| proposals/propertyDependencies/additionalProperties | - | - | - | - | - | - | 0/3 |
| proposals/propertyDependencies/dynamicRef | - | - | - | - | - | - | 0/8 |
| proposals/propertyDependencies/propertyDependencies | - | - | - | - | - | - | 0/21 |
| proposals/propertyDependencies/unevaluatedProperties | - | - | - | - | - | - | 0/6 |
| refOfUnknownKeyword | - | - | - | - | 0/10 | 0/10 | 0/10 |
| unknownKeyword | - | - | 0/3 | 0/3 | 0/3 | 0/3 | 0/3 |
| zeroTerminatedFloats | 0/1 | 0/1 | - | - | - | - | - |


</details>

