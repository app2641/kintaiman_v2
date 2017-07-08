import AbstractCommand from './AbstractCommand';
import DateUtils from '../DateUtils';
import CommandFactory from '../CommandFactory';

export default class AbstractTimeSheetCommand extends AbstractCommand {
  parseMonth(text) {
    const matched = DateUtils.normalize(text).match(CommandFactory.GET_TIMESHEET_REG);

    if (matched) {
      return matched[1];
    }
    return null;
  }

  parseSpreadsheetId(text) {
    const matched = DateUtils.normalize(text).match(CommandFactory.TIMESHEET_URL_REG);

    if (matched) {
      return matched[1];
    }
    return null;
  }
}
