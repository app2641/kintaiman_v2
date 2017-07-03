import assert from 'assert';
import TimeSheet from '../src/TimeSheet';

describe('TimeSheet', () => {
  const timeSheet = new TimeSheet('timesheetId');

  describe('setAttendanceTime', () => {
    it('set time', () => {
      assert.equal(timeSheet.setAttendanceTime('ユーザーA', 1, '10:00'), true);
    });
  });
});
