import AbstractCommand from './AbstractCommand';
import TimeSheet from '../TimeSheet';

export default class Leaving extends AbstractCommand {
  run() {
    const timeSheetId = this.settings.getTimeSheetId(this.month);
    if (!timeSheetId) return;

    const timeSheet = new TimeSheet(timeSheetId);
    const userSheetName = this.settings.getUserSheetName(this.userName);
    return timeSheet.setTime(userSheetName, 'D', this.day, this.time);
  }

  buildMessage() {
    let message = `@${this.userName} ${this.month}/${this.day} ${this.time} 退勤`;
    if (this.text.match(/get\s*wild/)) {
      const lyric = '44Ki44K544OV44Kh44Or44OIIOOCv+OCpOODpOOCkuWIh+OCiuOBpOOBkeOBquOBjOOCieaal+mXh+i1sOOCiuOBrOOBkeOCiwrjg4Hjg7zjg5fjgarjgrnjg6rjg6vjgavouqvjgpLjgb7jgYvjgZvjgabjgoLmmI7ml6XjgavjgYrjgbPjgYjjgabjgYTjgZ/jgogKSXQncyB5b3VyIHBhaW4gb3IgbXkgcGFpbiBvciBzb21lYm9keSdzIHBhaW4K6Kqw44GL44Gu44Gf44KB44Gr55Sf44GN44KJ44KM44KL44Gq44KJCkl0J3MgeW91ciBkcmVhbSBvciBteSBkcmVhbSBvciBzb21lYm9keSdzIGRyZWFtCuS9leOCgiDjgZPjgo/jgY/jga/jgarjgYQKCkdldCB3aWxkIGFuZCB0b3VnaCDjgbLjgajjgorjgafjga/op6PjgZHjgarjgYTmhJvjga7jg5Hjgrrjg6vjgpLmirHjgYTjgaYKR2V0IHdpbGQgYW5kIHRvdWdoIOOBk+OBruihl+OBp+OChOOBleOBl+OBleOBq+eUmOOBiOOBpuOBhOOBn+OBj+OBr+OBquOBhApHZXQgY2hhbmNlIGFuZCBsdWNrIOWQm+OBoOOBkeOBjOWuiOOCjOOCi+OCguOBruOBjOOBqeOBk+OBi+OBq+OBguOCi+OBlQpHZXQgY2hhbmNlIGFuZCBsdWNrIOOBsuOBqOOCiuOBp+OCgiDlgrfjgaTjgYTjgZ/lpKLjgpLjgajjgorjgoLjganjgZnjgogKCuOCr+ODq+ODnuOBruODqeOCpOODiOOBq2tpc3PjgpLmipXjgZLjgabjga/ou4rpgZPjgafouIrjgovjgYLjga7lqJgK5Ya344Gf44GE5aSc56m644KS44K544OG44O844K444Gr44GX44Gm5ZOA44GX44GP44GK44Gp44GR44Gm44GE44Gf44GtCkl0J3MgeW91ciBwYWluIG9yIG15IHBhaW4gb3Igc29tZWJvZHkncyBwYWluCuiqsOOBi+OBruOBn+OCgeOBq+aEm+OBm+OCi+OBruOBquOCiQpJdCdzIHlvdXIgZHJlYW0gb3IgbXkgZHJlYW0gb3Igc29tZWJvZHkncyBkcmVhbQrjgY3jgaPjgagg5by344GP44Gq44KM44KLCgpHZXQgd2lsZCBhbmQgdG91Z2gg44Gy44Go44KK44Gn44Gv5raI44Gb44Gq44GE55eb44G/5b+D44Gr5oqx44GE44GmCkdldCB3aWxkIGFuZCB0b3VnaCDjgZPjga7ooZfjgafoh6rnlLHjgpLjgoLjgabjgYLjgb7jgZfjgZ/jgY/jga/jgarjgYQKR2V0IGNoYW5jZSBhbmQgbHVjayDlkJvjgaDjgZHjgYzlrojjgozjgovjgoLjga7jgpLjgb/jgaTjgZHjgaDjgZfjgZ/jgokKR2V0IGNoYW5jZSBhbmQgbHVjayDjgbLjgajjgorjgafjgoIg5YK344Gk44GE44Gf5aSi44KS44Go44KK44KC44Gp44GZ44KICgpHZXQgd2lsZCBhbmQgdG91Z2gg44Gy44Go44KK44Gn44Gv6Kej44GR44Gq44GE5oSb44Gu44OR44K644Or44KS5oqx44GE44GmCkdldCB3aWxkIGFuZCB0b3VnaCDjgZPjga7ooZfjgafjgoTjgZXjgZfjgZXjgavnlJjjgYjjgabjgYTjgZ/jgY/jga/jgarjgYQKR2V0IGNoYW5jZSBhbmQgbHVjayDlkJvjgaDjgZHjgYzlrojjgozjgovjgoLjga7jgYzjganjgZPjgYvjgavjgYLjgovjgZUKR2V0IGNoYW5jZSBhbmQgbHVjayDjgbLjgajjgorjgafjgoIg5YK344Gk44GE44Gf5aSi44KS44Go44KK44KC44Gp44GZ44KICgpHZXQgd2lsZCBhbmQgdG91Z2gKR2V0IHdpbGQgYW5kIHRvdWdoCkdldCBjaGFuY2UgYW5kIGx1Y2sK5ZCb44Gg44GR44GMLi4u';
      const decodedData = Utilities.base64Decode(lyric, Utilities.Charset.UTF_8);
      const decodedLyric = Utilities.newBlob(decodedData).getDataAsString();
      message = `${message}\n${decodedLyric}`;
    }
    return message;
  }
}
