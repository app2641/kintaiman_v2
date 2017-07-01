import assert from 'assert';
import App from '../src/App';

describe('App', () => {
  it('when beginning of message is #', () => {
    const params = { user_name: 'app2641', message: '# beginning of message is #' };
    const app = new App(params);
    assert.equal(app.run(), null);
  });

  it('when not exists sheet', () => {
    const params = { user_name: 'anonymous', message: 'bye' };
    const app = new App(params);
    assert.equal(app.run(), null);
  });
});
