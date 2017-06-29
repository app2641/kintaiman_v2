import { Hello } from './hello';

global.main = () => {
  const hello = new Hello('jeliy');
  hello.say();
};
