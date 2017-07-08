import AbstractTimeSheetCommand from './AbstractTimeSheetCommand';

export default class GetTimeSheet extends AbstractTimeSheetCommand {
  run() {
    const month = this.parseMonth(this.text);
    const timeSheetId = this.settings.getTimeSheetId(month);
    if (!timeSheetId) return;

    this.timeSheetUrl = `https://docs.google.com/spreadsheets/d/${timeSheetId}/edit`;

    return true;
  }

  buildMessage() {
    if (!this.timeSheetUrl) return;
    return `@${this.userName} ${this.timeSheetUrl}`;
  }
}
