/* eslint-disable no-console */
/* eslint-disable global-require */
let app = require('./app').default;

const server = app.listen(3000);

if (module.hot) {
  module.hot.accept('./app', () => {
    try {
      server.removeAllListeners('request', server);
      app = require('./app').default;
      server.on('request', app.callback());
    } catch (err) {
      console.error(err);
    }
  });

  module.hot.accept();
  module.hot.dispose(() => server.close());
}
