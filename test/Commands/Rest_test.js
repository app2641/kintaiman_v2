import assert from 'assert';
import Rest from '../../src/Commands/Rest';
import Settings from '../../src/Settings';

describe('Rest', () => {
  const settings = new Settings();
  const command = new Rest();

  describe('run', () => {
    it('write rest datetime', () => {
      const userName = 'app2641';
      const message = '1/1 10:00';

      assert.equal(command.run(settings, userName, message), true);
    });
  });
});
