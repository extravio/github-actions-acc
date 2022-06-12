import nock from 'nock';
import action from './index.js';
import { listPublicRepositories } from './fixtures/list-public-repositories';

describe('action test suite', () => {
  beforeAll(() => {
    const repoToken = 'token';
    process.env['INPUT_REPO_TOKEN'] = repoToken;
  });


  it('It returns a list of public repositories', async () => {

    nock('https://api.github.com')
      .persist()
      .get('/user/repos')
      .reply(200, listPublicRepositories);
    
      const repos = await action();

      expect(repos.length).toBe(1);
      expect(repos[0].id).toBe(1296269);
      expect(repos[0].node_id).toBe("MDEwOlJlcG9zaXRvcnkxMjk2MjY5");
  });
});