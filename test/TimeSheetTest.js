import assert from 'assert';
import TimeSheet from '../src/TimeSheet';

describe('TimeSheet', () => {
  const timeSheet = new TimeSheet('timesheetId');

  describe('setTime', () => {
    it('set time', () => {
      assert.equal(timeSheet.setTime('ユーザーA', 'C', 1, '10:00'), true);
    });
  });
});
