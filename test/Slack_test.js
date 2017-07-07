import assert from 'assert';
import Slack from '../src/Slack';
import Settings from '../src/Settings';

describe('Slack', () => {
  const settings = new Settings();
  const slack = new Slack(settings);

  describe('post', () => {
    it('message', () => {
      assert.equal(slack.post('hoge'), true);
    });
  });
});
