export default class AppLogger {
  constructor(settings, userName, text, expMsg = null) {
    this.settings = settings;
    this.userName = userName;
    this.text = text;
    this.expMsg = expMsg;
  }

  log() {
    const body = `username: ${this.userName}
text: ${this.text}
exception: ${this.expMsg}`;
    const email = this.settings.getValue('Settings', 'LoggingEmail');
    GmailApp.sendEmail(email, 'kintaiman log', body);
  }
}
