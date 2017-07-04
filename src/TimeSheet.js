export default class TimeSheet {
  static get ROW_TO_REPORT_TABLE() {
    return 9;
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
    const lastRow = String(this.sheet.getLastRow());
    const daySets = this.sheet.getRange(`A${TimeSheet.ROW_TO_REPORT_TABLE}:A${lastRow}`).getValues();

    let dayRow;
    Object.keys(daySets).forEach((key) => {
      if (daySets[key][0] === day) dayRow = (TimeSheet.ROW_TO_REPORT_TABLE + key + 1);
    });

    return dayRow;
  }
}
