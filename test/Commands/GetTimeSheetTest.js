import assert from 'assert';
import GetTimeSheet from '../../src/Commands/GetTimeSheet';
import Settings from '../../src/Settings';

describe('GetTimeSheet', () => {
  const settings = new Settings();
  const userName = 'app2641';

  describe('run', () => {
    const text = '1月の日報をくれ';
    const command = new GetTimeSheet(settings, userName, text);

    it('get time sheet', () => {
      assert.equal(command.run(), true);
    });
  });

  describe('buildMessage', () => {
    it('found timesheet', () => {
      const text = '1月の日報をくれ';
      const command = new GetTimeSheet(settings, userName, text);
      command.run();

      assert.equal(command.buildMessage(), '@app2641 https://docs.google.com/spreadsheets/d/spreadsheetId/edit');
    });

    it('not found timesheet', () => {
      const text = '10月の日報をくれ';
      const command = new GetTimeSheet(settings, userName, text);
      command.run();

      assert.equal(command.buildMessage(), '@app2641 日報が見つかりませんでした');
    });
  });
});
