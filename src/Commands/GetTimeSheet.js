import CommandFactory from '../CommandFactory';
import DateUtils from '../DateUtils';

export default class GetTimeSheet {
  run(settings, userName, message) {
    const month = this.parseMonth(message);

    const timeSheetId = settings.getTimeSheetId(month);
    if (!timeSheetId) return;

    this.timeSheetUrl = `https://docs.google.com/spreadsheets/d/${timeSheetId}/edit`;

    return true;
  }

  parseMonth(message) {
    const matched = DateUtils.normalize(message).match(CommandFactory.GET_TIMESHEET_REG);
    if (matched) {
      return matched[1];
    }

    return;
  }
}
