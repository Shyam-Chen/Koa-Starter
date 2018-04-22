# {{ name }}

:poodle: {{ description }}

## Table of Contents

* [Getting Started](#getting-started)
* [Dockerization](#dockerization)
* [Configuration](#configuration)
* [Directory Structure](#directory-structure)

## Getting Started

Follow steps to execute this boilerplate.

1. Install Dependencies

```bash
$ yarn install

# install flow types
$ yarn typed
```

2. Run the code

```bash
# front-end
$ yarn start:app

# back-end
$ yarn start:api
```

3. Build the code

```bash
# front-end
$ yarn build:app

# back-end
$ yarn build:api
```

4. Check the code

```bash
# scripts
$ yarn lint:js

# styles
$ yarn lint:css
```

5. Run the test

```bash
# front-end
$ yarn test:app

# back-end
$ yarn test:api
```

6. Run the e2e

```bash
# ui
$ yarn e2e:app

# http
$ yarn e2e:api
```

## Dockerization

Dockerize an application.

1. Build and run the container in the background

```bash
$ docker-compose up -d <SERVICE>
```

2. Run a command in a running container

```bash
$ docker-compose exec <SERVICE> <COMMAND>
```

3. Remove the old container before creating the new one

```bash
$ docker-compose rm -fs
```

4. Restart up the container in the background

```bash
$ docker-compose up -d --build <SERVICE>
```

## Configuration

### Project environments

Change to your projects.

```js
// .firebaserc
{
  "projects": {
    "development": "{{ name }}",
    "production": "{{ name }}"
  }
}
```

### Default environments

Set your local environment variables.

```js
// env.js
function Environments() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.PROJECT_NAME = process.env.PROJECT_NAME || '{{ name }}';

  this.SITE_PORT = process.env.SITE_PORT || 8000;
  this.SITE_URL = process.env.SITE_URL || `http://localhost:${this.SITE_PORT}`;

  this.FUNC_PORT = process.env.FUNC_PORT || 5000;
  this.FUNC_URL = process.env.FUNC_URL || `http://localhost:${this.FUNC_PORT}/${this.PROJECT_NAME}/us-central1`;

  this.GOOGLE_ANALYTICS = process.env.GOOGLE_ANALYTICS || '<GOOGLE_ANALYTICS>';

  this.SENTRY_DSN = process.env.SENTRY_DSN || null;
}
```

### Deploy environments

Set your deploy environment variables.

```dockerfile
# tools/Dockerfile.<dev|prod>

# envs --
ENV SITE_URL <SITE_URL>
ENV FUNC_URL <FUNC_URL>

ENV SENTRY_DSN <SENTRY_DSN>
# -- envs
```

### Enable SEO

Enable Billing on your Firebase and Google Cloud Platform the project by switching to the Blaze plan.

Serve dynamic content for bots.

```diff
// firebase.json
    "rewrites": [
      {
        "source": "**",
-       "destination": "/index.html"
+       "function": "app"
      }
    ],
```

Deploy rendertron instance to Google App Engine.

```bash
$ git clone https://github.com/GoogleChrome/rendertron
$ cd rendertron
$ gcloud auth login
$ gcloud app deploy app.yaml --project <PROJECT_NAME>
```

### VS Code settings

```js
{
  "window.zoomLevel": 1,
  "workbench.colorTheme": "Material Theme",
  "workbench.iconTheme": "material-icon-theme",
  "eslint.validate": [
    "javascript", {
      "language": "vue"
    },
    "javascriptreact",
    "html"
  ],
  "javascript.validate.enable": false,
  "vetur.validation.script": false
}
```

## Directory Structure

```js
.
├── src
│   ├── api
│   │   ├── <FEATURE>
│   │   │   ├── __tests__
│   │   │   │   └── ...
│   │   │   └── ...
│   │   └── index.js
│   ├── app
│   │   ├── _languages
│   │   │   └── ...
│   │   ├── config  -> config plugins
│   │   │   └── ...
│   │   ├── <FEATURE>
│   │   │   ├── __tests__
│   │   │   │   ├── actions.spec.js
│   │   │   │   ├── <FEATURE>.e2e-spec.js
│   │   │   │   ├── <FEATURE>.spec.js
│   │   │   │   ├── getters.spec.js
│   │   │   │   └── mutations.spec.js
│   │   │   ├── _languages
│   │   │   │   └── ...
│   │   │   ├── actions.js
│   │   │   ├── constants.js
│   │   │   ├── <FEATURE>.vue
│   │   │   ├── getters.js
│   │   │   ├── mutations.js
│   │   │   └── types.js
│   │   ├── shared  -> shared components
│   │   │   └── ...
│   │   ├── actions.js  -> root actions
│   │   ├── App.vue
│   │   ├── constants.js
│   │   ├── getters.js  -> root getters
│   │   ├── mutations.js  -> root mutations
│   │   └── types.js
│   ├── assets  -> datas, fonts, images, medias, styles
│   ├── client.js
│   ├── index.html
│   └── server.js
├── tools
│   └── ...
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .firebaserc
├── .flowconfig
├── .gitignore
├── .postcssrc
├── .stylelintrc
├── Dockerfile
├── LICENSE
├── README.md
├── circle.yml
├── docker-compose.yml
├── env.js
├── firebase.json
├── gulpfile.js
├── jest.config.js
├── package.json
├── webpack.config.js
└── yarn.lock
```
