import CommandFactory from './CommandFactory';
import Settings from './Settings';

export default class App {
  constructor(message) {
    this.userName = String(message.user_name);
    this.message = String(message.text);

    this.settings = new Settings();
  }

  run() {
    // #で始まるメッセージは無視
    if (this.message.match(/^(#|♯)/)) return;

    if (!this.settings.getUserSheetName(this.userName)) return;

    const command = new CommandFactory(this.settings, this.userName, this.message).getCommand();
    if (!command) return;

    const result = command.run();
    if (result) {
      const postMessage = command.buildMessage();
    }
    return;
  }
}
