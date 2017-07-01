export default class DateUtils {
  constructor(now) {
    this.now = now || new Date();
  }

  static get TIME_REG() {
    return /(\d{1,2})\s*:\s*(\d{1,2})\s*/;
  }

  static get DATE_REG() {
    return /((\d{4})[-\/年]{1}|)(\d{1,2})[-\/月]{1}(\d{1,2})/;
  }

  parseTime(str) { // eslint-disable-line class-methods-use-this
    const normalizedStr = DateUtils.normalize(str);
    const matches = normalizedStr.match(DateUtils.TIME_REG);
    if (matches) {
      const hour = matches[1];
      let min = matches[2];
      min = min.length === 1 ? `0${min}` : min;

      return `${hour}:${min}`;
    }

    return null;
  }

  parseDate(str) {
    const normalizedStr = DateUtils.normalize(str);

    if (normalizedStr.match(/(明日|tomorrow)/)) {
      const tomorrow = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() + 1);
      return [tomorrow.getMonth() + 1, tomorrow.getDate()];
    }

    if (normalizedStr.match(/(今日|today)/)) {
      return [this.now.getMonth() + 1, this.now.getDate()];
    }

    if (normalizedStr.match(/(昨日|yesterday)/)) {
      const yesterday = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate() - 1);
      return [yesterday.getMonth() + 1, yesterday.getDate()];
    }

    const matches = normalizedStr.match(DateUtils.DATE_REG);
    if (matches) {
      const month = parseInt(matches[3]);
      const day = parseInt(matches[4]);

      return [month, day];
    }

    return null;
  }

  static normalize(str) {
    return str.toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９：／]/g, s => (
      String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    ));
  }
}
