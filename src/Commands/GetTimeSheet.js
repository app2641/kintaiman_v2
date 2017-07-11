import AbstractTimeSheetCommand from './AbstractTimeSheetCommand';

export default class GetTimeSheet extends AbstractTimeSheetCommand {
  run() {
    const month = this.parseMonth(this.text);
    const timeSheetId = this.settings.getTimeSheetId(month);
    if (timeSheetId) this.timeSheetUrl = `https://docs.google.com/spreadsheets/d/${timeSheetId}/edit`;

    return true;
  }

  buildMessage() {
    if (this.timeSheetUrl) {
      return `@${this.userName} ${this.timeSheetUrl}`;
    }

    return `@${this.userName} 日報が見つかりませんでした`;
  }
}
