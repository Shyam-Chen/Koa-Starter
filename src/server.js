import app from './app';

const server = app.listen(3000);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.close());
}
