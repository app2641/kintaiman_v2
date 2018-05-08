import Attendance from './Commands/Attendance';
import Leaving from './Commands/Leaving';
import Rest from './Commands/Rest';
import GetTimeSheet from './Commands/GetTimeSheet';
import SetTimeSheet from './Commands/SetTimeSheet';

export default class CommandFactory {
  static get ATTENDANCE_REG() {
    return /おっ?は|はじめ|はろー|ハロー|モーニン|出勤|出社|始め|hello|morning|oha|:sunny:/i;
  }

  static get LEAVING_REG() {
    return /おっ?つ|おわり|おわる|かえり|かえる|さらば|さば|鯖|サバ|さよう?なら|グッバイ|乙|お疲|お先|終わり|終わる|失礼します|帰|退勤|退社|サラダバー|bye|ots?u|saraba|get\s*wild|:frog:|:beer:|:beers:/i;
  }

  static get REST_REG() {
    return /ランチ|昼食|休憩|:bento:/;
  }

  static get GET_TIMESHEET_REG() {
    return /([0-9０-９]+)月の(?:業務)?日報/;
  }

  static get TIMESHEET_URL_REG() {
    return /https?:\/\/docs\.google\.com\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/;
  }

  constructor(settings, userName, text) {
    this.settings = settings;
    this.userName = userName;
    this.text = text;
  }

  getCommand() {
    if (this.text.match(CommandFactory.ATTENDANCE_REG)) {
      return new Attendance(this.settings, this.userName, this.text);
    } else if (this.text.match(CommandFactory.LEAVING_REG)) {
      return new Leaving(this.settings, this.userName, this.text);
    } else if (this.text.match(CommandFactory.REST_REG)) {
      return new Rest(this.settings, this.userName, this.text);
    } else if (this.text.match(CommandFactory.GET_TIMESHEET_REG)) {
      if (this.text.match(CommandFactory.TIMESHEET_URL_REG)) {
        return new SetTimeSheet(this.settings, this.userName, this.text);
      }
      return new GetTimeSheet(this.settings, this.userName, this.text);
    }

    return null;
  }
}
