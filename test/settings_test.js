import assert from 'assert';
import Settings from '../src/settings';

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
});
