export default class Settings {
  constructor() {
    // setting sheet id
    const spreadsheetId = '1vewqKuhv1z-W5QGVJFjIu7JOeoyCenvkKvN1p2MKWn4';
    this.spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  }

  getUserSheetName(name) {
    const sheet = this.spreadsheet.getSheetByName('Users');
    const userSets = sheet.getRange("A1:B"+sheet.getLastRow()).getValues();
    const matchedUserSet = userSets.find(userSet => (userSet[0] === name));

    if (matchedUserSet) {
      return matchedUserSet[1];
    } else {
      return null;
    }
  }
}
