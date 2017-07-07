import AbstractCommand from './AbstractCommand';
import TimeSheet from '../TimeSheet';

export default class Attendance extends AbstractCommand {
  run() {
    const timeSheetId = this.settings.getTimeSheetId(this.month);
    if (!timeSheetId) return;

    const timeSheet = new TimeSheet(timeSheetId);
    const userSheetName = this.settings.getUserSheetName(this.userName);
    const result = timeSheet.setTime(userSheetName, 'C', this.day, this.time);

    if (result) {
      return timeSheet.setTime(userSheetName, 'E', this.day, '1:00');
    }
    return false;
  }

  buildMessage() {
    return `@${this.userName} ${this.month}/${this.day} ${this.time} 出勤`;
  }
}
