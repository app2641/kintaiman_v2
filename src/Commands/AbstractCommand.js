import DateUtils from '../DateUtils';

export default class AbstractCommand {
  constructor(settings, userName, message) {
    this.settings = settings;
    this.userName = userName;
    this.message = message;

    const utils = new DateUtils();
    [this.month, this.day] = utils.parseDate(this.message);
    this.time = utils.parseTime(this.message);
  }
}
