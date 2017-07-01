import AttendanceCommand from './AttendanceCommand';
import LeavingCommand from './LeavingCommand';
import RestCommand from './RestCommand';
import GetTimeSheetCommand from './GetTimeSheetCommand';

export default class CommandFactory {
  static get ATTENDANCE_REG() {
    return /おは|おっは|はじめ|はろー|ハロー|モーニン|出勤|出社|始め|hello|morning|oha|:sunny:/i;
  }

  static get LEAVING_REG() {
    return /おつ|おわり|おわる|さらば|さよう?なら|グッバイ|乙|お疲|お先|終わり|終わる|失礼します|帰|退勤|退社|bye|saraba|get\s*wild|:frog:|:beer:|:beers:/i;
  }

  static get REST_REG() {
    return /ランチ|昼食|休憩|:bento:/;
  }

  static get GET_TIMESHEET_REG() {
    return /[0-9０-９]+月の(?:業務)?日報/;
  }

  static getCommand(message) {
    if (message.match(CommandFactory.ATTENDANCE_REG)) {
      return new AttendanceCommand();
    } else if (message.match(CommandFactory.LEAVING_REG)) {
      return new LeavingCommand();
    } else if (message.match(CommandFactory.REST_REG)) {
      return new RestCommand();
    } else if (message.match(CommandFactory.GET_TIMESHEET_REG)) {
      return new GetTimeSheetCommand();
    }

    return null;
  }
}
