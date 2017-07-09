import assert from 'assert';
import AbstractTimeSheetCommand from '../../src/Commands/AbstractTimeSheetCommand';
import Settings from '../../src/Settings';

describe('AbstractTimeSheetCommand', () => {
  const settings = new Settings;
  const userName = 'app2641';
  const message = '1月の日報 https://docs.google.com/spreadsheets/d/spreadsheetId/edit';
  const command = new AbstractTimeSheetCommand(settings, userName, message);

  describe('parseMonth', () => {
    it('parse month', () => {
      assert.equal(command.parseMonth(message), 1);
    });
  });

  describe('parseSpreadsheetId', () => {
    it('parse spreadsheet id', () => {
      assert.equal(command.parseSpreadsheetId(message), 'spreadsheetId');
    });
  });
});
