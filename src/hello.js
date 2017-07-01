export default class Hello {
  constructor(name) {
    this.name = name;
  }

  say() {
    Logger.log(`hello, ${this.name}!`);
  }
}
