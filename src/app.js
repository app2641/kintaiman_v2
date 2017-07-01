import Settings from './settings';

export default class App {
  constructor(message) {
    this.userName = String(message.user_name);
    this.body = String(message.text);

    this.settings = new Settings();
  }

  run() {
    // #で始まるメッセージは無視
    if (this.body.match(/^(#|♯)/)) return;

    if (!this.settings.getUserSheetName(this.userName));
  }
}
