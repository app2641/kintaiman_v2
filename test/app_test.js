import assert from 'assert';
import App from '../src/app';

describe('App', () => {
  it('when beginning of message is #', () => {
    const params = { user_name: 'app2641', message: '# beginning of message is #' };
    const app = new App(params);
    assert.equal(app.run(), null);
  });
});
