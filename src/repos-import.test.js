import nock from 'nock';
import action from './repos-import.js';
import { ImportSourceComplete } from '../fixtures/import-source';

beforeEach(() => {
  nock('https://api.github.com')
      .persist()
      .put('/repos/owner/repo/import', { 
        vcs_url:       'https://ado-repo',
        vcs:           'git',
        vcs_username:  'user',
        vcs_password:  'pat'
      })
      .reply(200, ImportSourceComplete);
});

afterEach(() => {
  nock.cleanAll();
});


describe('action test suite', () => {

  it('It starts an import', async () => {

    const { status, data } = await action();

    expect(status).toBe(200);
    expect(data.status).toBe("complete");
  });
});