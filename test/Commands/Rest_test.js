import assert from 'assert';
import Rest from '../../src/Commands/Rest';
import Settings from '../../src/Settings';

describe('Rest', () => {
  const settings = new Settings();
  const userName = 'app2641';
  const message = '1/1 10:00';
  const command = new Rest(settings, userName, message);

  describe('run', () => {
    it('write rest datetime', () => {
      assert.equal(command.run(), true);
    });
  });

  describe('buildMessage', () => {
    it('message for post', () => {
      assert.equal(command.buildMessage(), '@app2641 1/1 10:00 休憩');
    });
  });
});
