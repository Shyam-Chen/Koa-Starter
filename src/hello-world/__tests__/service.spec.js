import service from '../service';

describe('hello-world', () => {
  it('should get a `Hello, World!`', async () => {
    expect(service.sayHello()).toBe('Hello, World!');
    expect(service.sayHello('Koa')).toBe('Hello, Koa!');
  });
});
