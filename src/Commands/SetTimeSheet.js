import AbstractTimeSheetCommand from './AbstractTimeSheetCommand';

export default class SetTimeSheet extends AbstractTimeSheetCommand {
  run() {
    const spreadsheetId = this.parseSpreadsheetId(this.text);
    this.month = this.parseMonth(this.text);

    const sheet = this.settings.getTimeSheetsSheet();
    const monthRow = this.getMonthRow(sheet);
    if (!monthRow) return;

    sheet.getRange(`B${monthRow}`).setValue(spreadsheetId);
    return true;
  }

  getMonthRow(sheet) {
    const sheetSets = sheet.getRange('A1:B12').getValues();

    let monthRow;
    sheetSets.forEach((sheetSet, index) => {
      if (sheetSet[0] === `${this.month}月`) monthRow = index + 1;
    });

    return monthRow;
  }

  buildMessage() {
    return `@${this.userName} ${this.month}月の日報を登録`;
  }
}
