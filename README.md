# test-project

- [Overview](#overview)
- [Setup](#setup)
- [Running test scripts, code-coverage](#run)
- [TODO](#todo)

## Overview
This is sample project performs test cases for functions

## Setup
Start to install dependencies by running `yarn` command. Take a ☕ and wait for installation completes

## Running test scripts, code-coverage
Testing is done with `yarn test`
Other test scripts:
- `yarn test:watch`: Run test in detach mode and re-run test in only changed file(s)
- `yarn test:coverage`: Run full test and generate test coverage report both in console and files

The full report for test coverage is here

File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------|----------|----------|----------|----------|-------------------|
All files          |      100 |    76.47 |      100 |      100 |                   |
 coverageTest.js   |      100 |      100 |      100 |      100 |                   |
 impureFunction.js |      100 |    63.64 |      100 |      100 |           2,3,6,7 |

Coverage report format is export as `coverage/lcov-report/index.html`.
## TODO
- [x] Provide impure functions declared in `impureFunction.js`, which has one side effect in each function
- [x] Provide coverage test sample declared in `coverageTest.js`
- [x] Write test cases for 2 test suites above
- [x] Export test coverage for 2 test suites above
