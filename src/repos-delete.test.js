import nock from 'nock';
import action from './repos-delete';

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

    const { status, data } = await action();
    expect(status).toBe(204);
  });
});