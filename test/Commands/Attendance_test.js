import assert from 'assert';
import Attendance from '../../src/Commands/Attendance';
import Settings from '../../src/Settings';

describe('Attendance', () => {
  const settings = new Settings();
  const userName = 'app2641';
  const message = '1/1 10:00';
  const command = new Attendance(settings, userName, message);

  describe('run', () => {
    it('write attendance datetime', () => {
      assert.equal(command.run(), true);
    });
  });
});
