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
    const userSheetName = settings.getUserSheetName(userName);
    const result = timeSheet.setTime(userSheetName, 'C', day, time);

    if (result) {
      return timeSheet.setTime(userSheetName, 'E', day, '1:00');
    }

    return false;
  }
}
