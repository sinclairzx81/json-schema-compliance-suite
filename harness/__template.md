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
| **Semantics** | JSON Schema is decoded to library type and validated using the libraries own validator. Results indicate how aligned the library is to the validation semantics of JSON Schema. |
| **Translation** | JSON Schema is encoded/decoded through the library, then passed to CfWorker for validation testing. Failed tests indicate either lossy translation or serialization error. |

