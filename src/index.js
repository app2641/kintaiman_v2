import { hello } from './hello';

global.main = () => {
  const name = 'name';
  Logger.log(hello(name));
};
