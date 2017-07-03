import DateUtils from '../DateUtils';
import TimeSheet from '../TimeSheet';

export default class Attendance {
  run(settings, userName, message) {
    const utils = new DateUtils();
    const [month, day] = utils.parseDate(message);
    const time = utils.parseTime(message);

    const timeSheetId = settings.getTimeSheetId(month);
    if (!timeSheetId) return;

    const timeSheet = new TimeSheet(timeSheetId);
    timeSheet.setAttendanceTime(day, time);
  }
}
