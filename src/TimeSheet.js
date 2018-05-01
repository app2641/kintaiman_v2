export default class TimeSheet {
  static get REPORT_TABLE_FIRST_ROW() {
    return 9;
  }

  static get REPORT_TABLE_LAST_ROW() {
    return 41;
  }

  constructor(spreadsheetId) {
    this.spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  }

  setTime(sheetName, column, day, time) {
    const sheet = this.getSheet(sheetName);
    const dayRow = this.getDayRow(day);
    if (!dayRow) return;

    sheet.getRange(`${column}${dayRow}`).setValue(time);
    return true;
  }

  getSheet(sheetName) {
    if (this.sheet) return this.sheet;
    let sheet = this.spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      sheet = this.spreadsheet.getSheetByName('見本').copyTo(this.spreadsheet);
      sheet.setName(sheetName);
    }
    this.sheet = sheet;

    return sheet;
  }

  getDayRow(day) {
    const range = `A${TimeSheet.REPORT_TABLE_FIRST_ROW}:A${TimeSheet.REPORT_TABLE_LAST_ROW}`;
    const daySets = this.sheet.getRange(range).getValues();

    let dayRow;
    daySets.forEach((daySet, index) => {
      let value = daySet[0];
      if (value.constructor.name === 'Date') value = Utilities.formatDate(value, 'JST', 'd');
      if (String(value) === String(day)) dayRow = (TimeSheet.REPORT_TABLE_FIRST_ROW + index);
    });

    return dayRow;
  }
}
