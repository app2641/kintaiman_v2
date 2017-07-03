import assert from 'assert';
import Leaving from '../../src/Commands/Leaving';
import Settings from '../../src/Settings';

describe('Leaving', () => {
  const settings = new Settings();
  const command = new Leaving();

  describe('run', () => {
    it('write leaving datetime', () => {
      const userName = 'app2641';
      const message = '1/1 19:00';

      assert.equal(command.run(settings, userName, message), true);
    });
  });
});
