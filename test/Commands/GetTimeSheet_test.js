import assert from 'assert';
import GetTimeSheet from '../../src/Commands/GetTimeSheet';
import Settings from '../../src/Settings';

describe('GetTimeSheet', () => {
  const settings = new Settings();
  const userName = 'app2641';
  const text = '1月の日報をくれ';
  const command = new GetTimeSheet(settings, userName, text);

  describe('run', () => {
    it('get time sheet', () => {
      assert.equal(command.run(), true);
    });
  });

  describe('buildMessage', () => {
    it('message for post', () => {
      assert.equal(command.buildMessage(), '@app2641 https://docs.google.com/spreadsheets/d/spreadsheetId/edit');
    });
  });
});
