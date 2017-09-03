import assert from 'assert';
import SetTimeSheet from '../../src/Commands/SetTimeSheet';
import Settings from '../../src/Settings';

describe('SetTimeSheet', () => {
  const settings = new Settings();
  const userName = 'app2641';
  const text = '1月の日報 https://docs.google.com/spreadsheets/d/spreadsheetId/edit';
  const command = new SetTimeSheet(settings, userName, text);

  describe('run', () => {
    it('set time sheet', () => {
      assert.equal(command.run(), true);
    });
  });

  describe('buildMessage', () => {
    it('message for post', () => {
      assert.equal(command.buildMessage(), '@app2641 1月の日報を登録');
    });
  });
});
