export default class DateUtils {
  constructor(now) {
    this.now = now || new Date();
  }

  static get TIME_REG() {
    return /(\d{1,2})\s*:\s*(\d{1,2})\s*/;
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

  static normalize(str) {
    return str.toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９：／]/g, s => (
      String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
    ));
  }
}
