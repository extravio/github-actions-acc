const process = require('process');
const cp = require('child_process');
const path = require('path');
const nock = require('nock');
const listPublicRepositories = require('./fixtures/list-public-repositories-es5.js')

// import nock from 'nock';
// import action from './index.js';
// import { listPublicRepositories } from './fixtures/list-public-repositories';

describe('action test suite', () => {
  // beforeEach(() => {
  //   const repoToken = 'token';
  //   process.env['INPUT_REPO_TOKEN'] = repoToken;
  // });

 

  test('It returns a list of public repositories', () => {
    const repoToken = 'token';
    process.env['INPUT_REPO_TOKEN'] = repoToken;

    nock('https://api.github.com')
          .persist()
          .get('/repositories')
          .reply(200, listPublicRepositories);

    const ip = path.join(__dirname, 'index.js');

    const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
    console.log(result);
  })
});