import assert from 'assert';
import GetTimeSheet from '../../src/Commands/GetTimeSheet';
import Settings from '../../src/Settings';

describe('GetTimeSheet', () => {
  const settings = new Settings();
  const userName = 'app2641';
  const message = '1月の日報をくれ';
  const command = new GetTimeSheet(settings, userName, message);

  describe('run', () => {
    it('get time sheet', () => {
      assert.equal(command.run(), true);
    });
  });
});
