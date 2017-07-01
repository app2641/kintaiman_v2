import assert from 'assert';
import Hello from '../src/hello';

describe('Hello', () => {
  context('foo', () => {
    it('say', () => {
      const hello = new Hello('jeliy');
      assert.equal(hello.say(), 'hello, jeliy!')
    });
  });
});
