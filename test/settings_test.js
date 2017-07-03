import assert from 'assert';
import Settings from '../src/Settings';

describe('Settings', () => {
  const settings = new Settings();

  describe('getUserSheetName', () => {
    it('when exists user sheet name', () => {
      assert.equal(settings.getUserSheetName('app2641'), 'ユーザーA');
    });

    it('when not exists user sheet name', () => {
      assert.equal(settings.getUserSheetName('anonymous'), null);
    });
  });

  describe('getTimeSheetId', () => {
    it('when exists time sheet id', () => {
      assert.equal(settings.getTimeSheetId(1), 'spreadsheetId');
    });

    it('when not exists time sheet id', () => {
      assert.equal(settings.getTimeSheetId(10), null);
    });
  });
});
