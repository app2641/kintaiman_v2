import assert from 'assert';
import CommandFactory from '../src/CommandFactory';
import Settings from '../src/Settings';

describe('CommandFactory', () => {
  describe('getCommand', () => {
    const settings = new Settings();
    const userName = 'app2641';

    it('AttendanceCommand', () => {
      [
        'おは',
        'おっはー',
        'はじめます',
        'はろー',
        'ハローハロー',
        'グッモーニン',
        '出勤',
        '午後出社',
        '作業始めます',
        'hello',
        'HELLO',
        'good morning',
        'oha',
        ':sunny:',
      ].forEach((text) => {
        const args = [settings, userName, text];
        const command = new CommandFactory(...args).getCommand();
        assert.equal(command.constructor.name, 'Attendance');
      });
    });

    it('LeavingCommand', () => {
      [
        'おつ',
        'おわります',
        'おわる',
        'かえります',
        'かえる',
        'さらばだ',
        'さばだ',
        '鯖寿司',
        'サバサンド',
        'さよならストレンジャー',
        'こんにちは さようなら',
        'グッバイだね',
        '乙',
        'お疲れ様',
        'お先に失礼します',
        '作業終わります',
        'もう終わる',
        '失礼します',
        '帰ります',
        '退勤',
        '週末退社',
        'bye-bye',
        'otsu',
        ':otukaresama:',
        'saraba',
        'SARABA',
        'getwild',
        ':frog:',
        ':beer:',
        ':beers:',
      ].forEach((text) => {
        const args = [settings, userName, text];
        const command = new CommandFactory(...args).getCommand();
        assert.equal(command.constructor.name, 'Leaving');
      });
    });

    it('RestCommand', () => {
      [
        'ランチ行きます',
        '昼食行きます',
        '休憩行きます',
        ':bento:',
      ].forEach((text) => {
        const args = [settings, userName, text];
        const command = new CommandFactory(...args).getCommand();
        assert.equal(command.constructor.name, 'Rest');
      });
    });

    it('GetTimeSheetCommand', () => {
      const args = [settings, userName, '1月の日報をくれ'];
      const command = new CommandFactory(...args).getCommand();
      assert.equal(command.constructor.name, 'GetTimeSheet');
    });

    it('SetTimeSheetCommand', () => {
      const args = [settings, userName, '1月の日報はこれ https://docs.google.com/spreadsheets/d/spreadsheetId/edit'];
      const command = new CommandFactory(...args).getCommand();
      assert.equal(command.constructor.name, 'SetTimeSheet');
    });
  });
});
