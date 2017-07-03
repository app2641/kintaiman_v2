import assert from 'assert';
import Attendance from '../../src/Commands/Attendance';
import Settings from '../../src/Settings';

describe('Attendance', () => {
  const settings = new Settings();
  const command = new Attendance();

  describe('run', () => {
    it('write attendance datetime', () => {
      const userName = 'app2641';
      const message = '1/10 10:00';

      command.run(settings, userName, message);
    });
  });
});
