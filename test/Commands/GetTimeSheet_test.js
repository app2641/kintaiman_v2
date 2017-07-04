import assert from 'assert';
import GetTimeSheet from '../../src/Commands/GetTimeSheet';
import Settings from '../../src/Settings';

describe('GetTimeSheet', () => {
  const settings = new Settings();
  const command = new GetTimeSheet();

  describe('run', () => {
    const userName = 'app2641';
    const message = '1月の日報をくれ';

    it('get time sheet', () => {
      assert.equal(command.run(settings, userName, message), true);
    });
  });
});
