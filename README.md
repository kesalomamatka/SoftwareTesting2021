# Software testing repository
## Purpose of this repository

This is a project for students participating in Software Testing course
at Tampere University.


## To Run tests locally

1. Clone the repository or download ZIP
  'https://github.com/kesalomamatka/SoftwareTesting2021.git'
2. Install dependencies by:
   'npm install'
3. Run all tests or run specific test 
  'npm run test' or e.g. 'npm run eq.test.js'
  
## To get coverage report locally

  Run 'npm run coveralls' in order to get coverage report locally. The report will be generated under /coverage folder.

## To get coverage report from coveralls.io

  When we send push or pull request, the GitHub actions ci will be triggered and the generated 'lcov.info' will send to coveralls.io

### Link to coveralls.io
[![Coverage Status](https://coveralls.io/repos/github/kesalomamatka/SoftwareTesting2021/badge.svg?branch=main)](https://coveralls.io/github/kesalomamatka/SoftwareTesting2021?branch=main)


## GitHub Actions

Some of the tests runs in ci will failed, the "continue-on-error" setted to "true" will allow it pass when it fails.
Since we are supposed to only test the original files, but not make correction for it. 
With "continue-on-error" setted to true, the ci will run next steps for coverage report. 
This is the clarification for the status of workflow is pass but the test is failed. 

### GitHub Actions status

![CI workflow](https://github.com/kesalomamatka/SoftwareTesting2021/actions/workflows/ci.yml/badge.svg)

