import nock from 'nock';
import action from './repos-create';
import { repository } from '../fixtures/repository';

beforeEach(() => {
  nock('https://api.github.com')
      .persist()
      .post('/user/repos', { 
        name: 'repo' 
      })
      .reply(201, repository);
});

afterEach(() => {
  nock.cleanAll();
});

describe('action test suite', () => {
  it('It creates a repository', async () => {
    const { status, data } = await action();
    // const status = await action();
    expect(status).toBe(201);
    expect(data.id).toBe(1296269);
  });
});