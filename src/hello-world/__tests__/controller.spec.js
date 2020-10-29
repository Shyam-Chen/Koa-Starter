import controller from '../controller';

const getHandler = (router, { method, path, position = 0 }) =>
  router.stack.find(r => r.path === path && r.methods.some(m => m === method)).stack[position];

describe('hello-world', () => {
  it('', async () => {
    const handler = getHandler(controller, { method: 'POST', path: '/hello-world' });
    const ctx = { request: { body: {} } };
    await handler(ctx);
    expect(ctx.body).toEqual({ data: 'Hello, World!' });
  });
});
