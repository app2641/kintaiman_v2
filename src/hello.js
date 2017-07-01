export default class Hello {
  constructor(name) {
    this.name = name;
  }

  say() {
    return Logger.log(`hello, ${this.name}!`);
  }
}
