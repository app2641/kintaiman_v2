import DateUtils from '../DateUtils';

export default class AbstractCommand {
  constructor(settings, userName, text) {
    this.settings = settings;
    this.userName = userName;
    this.text = text;

    const utils = new DateUtils();
    [this.month, this.day] = utils.parseDate(this.text);
    this.time = utils.parseTime(this.text);
  }
}
