import assert from 'assert';
import DateUtils from '../src/DateUtils';

describe('DateUtils', () => {
  describe('normalize', () => {
    it('for string', () => {
      const utils = new DateUtils();
      assert.equal(DateUtils.normalize('０：Ａ／ｚ'), '0:a/z');
    });
  });

  describe('parseTime', () => {
    const utils = new DateUtils();

    it('not matching string', () => {
      assert.equal(utils.parseTime('1200'), null);
    });

    it('matching string', () => {
      assert.equal(utils.parseTime('19:0'), '19:00');
      assert.equal(utils.parseTime('３：30'), '3:30');
    })
  });
});
