import CommandFactory from './CommandFactory';
import Settings from './Settings';
import Slack from './Slack';
import AppLogger from './AppLogger';

export default class App {
  constructor(message) {
    this.userName = String(message.user_name);
    this.text = String(message.text);

    this.settings = new Settings();
  }

  run() {
    try {
      // #で始まるメッセージは無視
      if (this.text.match(/^(#|♯)/)) return;

      if (!this.settings.getUserSheetName(this.userName)) return;

      const command = new CommandFactory(this.settings, this.userName, this.text).getCommand();
      if (!command) return;

      const result = command.run();
      if (result) {
        const postMessage = command.buildMessage();
        const slack = new Slack(this.settings);
        return slack.post(postMessage);
      }
    } catch (e) {
      this.expMsg = e.message;
    } finally {
      const logger = new AppLogger(this.settings, this.userName, this.text, this.expMsg);
      logger.log();
    }
  }
}
