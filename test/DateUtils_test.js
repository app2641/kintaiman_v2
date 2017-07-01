import assert from 'assert';
import DateUtils from '../src/DateUtils';

describe('DateUtils', () => {
  describe('normalize', () => {
    it('for string', () => {
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
    });
  });

  describe('parseDate', () => {
    const utils = new DateUtils(new Date(2017, 0, 1, 0, 0, 0));

    it('today', () => {
      assert.deepEqual(utils.parseDate('今日'), [1, 1]);
    });

    it('yesterday', () => {
      assert.deepEqual(utils.parseDate('昨日'), [12, 31]);
    });

    it('tomorrow', () => {
      assert.deepEqual(utils.parseDate('tomorrow'), [1, 2]);
    });

    it('specify date', () => {
      assert.deepEqual(utils.parseDate('01/10'), [1, 10]);
      assert.deepEqual(utils.parseDate('1-01'), [1, 1]);
    });
  });
});
