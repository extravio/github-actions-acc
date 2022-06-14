import nock from 'nock';
import action from './get-import-status';
import { ImportSourceComplete } from '../fixtures/import-source';

describe('action test suite', () => {

  it('It starts an import', async () => {

    // token is defined in "./.jest/setEnvVars.js"
    nock('https://api.github.com')
      .persist()
      .get('/repos/owner/repo/import')
      .reply(200, ImportSourceComplete);
    
      const migrationStatus = await action();

      expect(migrationStatus).toBe("complete");
  });
});