const wait = require('./wait');
const process = require('process');
const cp = require('child_process');
const path = require('path');

const fetchMock = require('fetch-mock');

// FOR REFERENCE
// Jest mocking of Octokit library
// https://stackoverflow.com/questions/68605384/jest-mocking-of-octokit-library
// jest.mock('@octokit/rest')
// const request = () => new Promise((resolve, reject) => {
//   resolve({ status: 302, headers: { location: 'mock-url' } });
// })
// Octokit.mockImplementation(() => ({ request }))


// const jest = require('@jest/core');
// import * as jest from 'jest'

// const github = require('@actions/github');

// jest.mock('@actions/github');

beforeAll(() => {
  fetchMock
    // .mock(url('test'), 200)
    // .get(url('getBicSuccess'), { body: [{ code: 'A' }, { code: 'B' }] })
    // .get(url('getBicError'), 500)
    .mock('*', 'ok');
});

afterAll(() => {
  fetchMock.restore();
});



test('throws invalid number', async () => {
  await expect(wait('foo')).rejects.toThrow('milliseconds not a number');
});

test('wait 500 ms', async () => {
  const start = new Date();
  await wait(500);
  const end = new Date();
  var delta = Math.abs(end - start);
  expect(delta).toBeGreaterThanOrEqual(500);
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_REPO_TOKEN'] = 'abc';
  // github.getOctokit.mockResolvedValue({});

  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  console.log(result);
})
