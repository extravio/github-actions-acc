import nock from 'nock';
import action from './<template>';
import { <response> } from '../fixtures/<filename>';

beforeEach(() => {
  nock('https://api.github.com')
      .persist()
      .<spec>(<path>, { 
        <payload> 
      })
      .reply(201, <response>);
});

afterEach(() => {
  nock.cleanAll();
});

describe('action test suite', () => {
  it('<description>', async () => {
    const { status, data } = await action();
    expect(status).toBe(200);
    expect(data.<key>).toBe(<value>);
  });
});