import nock from 'nock';
import action from './get-import-status';
import { ImportSourceComplete } from '../fixtures/import-source';

beforeEach(() => {
  nock('https://api.github.com')
      .persist()
      .get('/repos/owner/repo/import')
      .reply(200, ImportSourceComplete);
});

afterEach(() => {
  nock.cleanAll();
});

describe('action test suite', () => {

  it('It starts an import', async () => {
    const { status, data } = await action();
    // const status = await action();
    expect(status).toBe(200);
    expect(data.status).toBe("complete");
  });
});