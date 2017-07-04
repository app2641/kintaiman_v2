import AbstractCommand from './AbstractCommand';
import TimeSheet from '../TimeSheet';

export default class Leaving extends AbstractCommand {
  run() {
    const timeSheetId = this.settings.getTimeSheetId(this.month);
    if (!timeSheetId) return;

    const timeSheet = new TimeSheet(timeSheetId);
    const userSheetName = this.settings.getUserSheetName(this.userName);
    return timeSheet.setTime(userSheetName, 'D', this.day, this.time);
  }
}
