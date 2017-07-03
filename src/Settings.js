export default class Settings {
  constructor() {
    // setting sheet id
    const spreadsheetId = '1vewqKuhv1z-W5QGVJFjIu7JOeoyCenvkKvN1p2MKWn4';
    this.spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  }

  getUserSheetName(name) {
    return this.getValue('Users', name);
  }

  getTimeSheetId(month) {
    return this.getValue('TimeSheets', `${month}月`);
  }

  getValue(sheetName, key) {
    const sheet = this.spreadsheet.getSheetByName(sheetName);
    const dataSets = sheet.getRange(`A1:B${sheet.getLastRow()}`).getValues();

    let matchedDataSet;
    dataSets.forEach((dataSet) => {
      if (dataSet[0] === key) matchedDataSet = dataSet;
    });

    if (matchedDataSet) {
      return matchedDataSet[1];
    }
    return null;
  }
}
