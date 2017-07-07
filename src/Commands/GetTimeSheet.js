import AbstractCommand from './AbstractCommand';
import CommandFactory from '../CommandFactory';
import DateUtils from '../DateUtils';

export default class GetTimeSheet extends AbstractCommand {
  run() {
    const month = this.parseMonth(this.text);
    const timeSheetId = this.settings.getTimeSheetId(month);
    if (!timeSheetId) return;

    this.timeSheetUrl = `https://docs.google.com/spreadsheets/d/${timeSheetId}/edit`;

    return true;
  }

  parseMonth(text) {
    const matched = DateUtils.normalize(text).match(CommandFactory.GET_TIMESHEET_REG);

    if (matched) {
      return matched[1];
    }
    return null;
  }

  buildMessage() {
    if (!this.timeSheetUrl) return;
    return `@${this.userName} ${this.timeSheetUrl}`;
  }
}
