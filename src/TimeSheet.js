export default class TimeSheet {
  constructor(spreadsheetId) {
    this.spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  }

  setAttendanceTime(sheetName, day, time) {
    const sheet = this.getSheet(sheetName);

    return true;
  }

  getSheet(sheetName) {
    let sheet = this.spreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      sheet = this.spreadsheet.getSheetByName('見本').copyTo(this.spreadsheet);
      sheet.setName(sheetName);
    }

    return sheet;
  }
}
