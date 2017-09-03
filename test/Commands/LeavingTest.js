import assert from 'assert';
import Leaving from '../../src/Commands/Leaving';
import Settings from '../../src/Settings';

describe('Leaving', () => {
  const settings = new Settings();
  const userName = 'app2641';
  const text = '1/1 19:00';
  const command = new Leaving(settings, userName, text);

  describe('run', () => {
    it('write leaving datetime', () => {
      assert.equal(command.run(), true);
    });
  });

  describe('buildMessage', () => {
    it('message for post', () => {
      assert.equal(command.buildMessage(), '@app2641 1/1 19:00 退勤');
    });
  });
});
