export default class Slack {
  constructor(settings) {
    this.settings = settings;
  }

  post(message) {
    const slackUrl = this.settings.getSlackUrl();
    if (!slackUrl) return;

    const payload = {
      text: message,
      link_names: true,
    };
    const options = {
      method: 'post',
      payload: { payload: JSON.stringify(payload) },
    };

    return UrlFetchApp.fetch(slackUrl, options);
  }
}
