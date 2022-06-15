import nock from 'nock';
import action from './repos-delete';
import { ImportSourceComplete } from '../fixtures/import-source';

beforeEach(() => {
  nock('https://api.github.com')
      .persist()
      .delete('/repos/owner/repo')
      .reply(204, undefined);
});

afterEach(() => {
  nock.cleanAll();
});

describe('action test suite', () => {

  it('It deletes a repository', async () => {

    // token is defined in "./.jest/setEnvVars.js"
    
    
      const status = await action();

      expect(status).toBe(204);
  });
});