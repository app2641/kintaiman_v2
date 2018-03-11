import AbstractTimeSheetCommand from './AbstractTimeSheetCommand';
import TimeSheet from '../TimeSheet';

export default class GetTimeSheet extends AbstractTimeSheetCommand {
  run() {
    const month = this.parseMonth(this.text);
    const timeSheetId = this.settings.getTimeSheetId(month);

    const userSheetName = this.settings.getUserSheetName(this.userName);
    const timeSheet = new TimeSheet(timeSheetId);
    const sheet = timeSheet.getSheet(userSheetName);
    const sheetId = sheet.getSheetId();

    if (timeSheetId) {
      const gid = sheetId ? `#gid=${sheetId}` : '';
      this.timeSheetUrl = `https://docs.google.com/spreadsheets/d/${timeSheetId}/edit${gid}`;
    } else {
      return null;
    }
    return true;
  }

  buildMessage() {
    if (this.timeSheetUrl) {
      return `@${this.userName} ${this.timeSheetUrl}`;
    }

    return `@${this.userName} 日報が見つかりませんでした`;
  }
}
