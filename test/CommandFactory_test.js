import assert from 'assert';
import CommandFactory from '../src/CommandFactory';

describe('CommandFactory', () => {
  describe('getCommand', () => {
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
      ].forEach((message) => {
        const command = CommandFactory.getCommand(message);
        assert.equal(command.constructor.name, 'Attendance');
      });
    });

    it('LeavingCommand', () => {
      [
        'おつ',
        'おわります',
        'おわる',
        'さらばだ',
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
        'saraba',
        'getwild',
        ':frog:',
        ':beer:',
        ':beers:',
      ].forEach((message) => {
        const command = CommandFactory.getCommand(message);
        assert.equal(command.constructor.name, 'Leaving');
      });
    });

    it('RestCommand', () => {
      [
        'ランチ行きます',
        '昼食行きます',
        '休憩行きます',
        ':bento:',
      ].forEach((message) => {
        const command = CommandFactory.getCommand(message);
        assert.equal(command.constructor.name, 'Rest');
      });
    });

    it('GetTimeSheetCommand', () => {
      const command = CommandFactory.getCommand('10月の日報をくれ');
      assert.equal(command.constructor.name, 'GetTimeSheet');
    });
  });
});
