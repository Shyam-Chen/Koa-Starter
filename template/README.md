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
$ yarn firebase serve --only functions
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
# front-end
$ yarn e2e:app

# back-end
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
const NODE_ENV = exports.NODE_ENV = process.env.NODE_ENV || 'development';

const PROJECT_NAME = exports.PROJECT_NAME = process.env.PROJECT_NAME || '{{ name }}';

const SITE_PORT = exports.SITE_PORT = process.env.SITE_PORT || 8000;
const SITE_URL = exports.SITE_URL = process.env.SITE_URL || `http://localhost:${SITE_PORT}`;

const FUNC_PORT = exports.FUNC_PORT = process.env.FUNC_PORT || 5000;
const FUNC_URL = exports.FUNC_URL = process.env.FUNC_URL || `http://localhost:${FUNC_PORT}/${PROJECT_NAME}/us-central1`;
```

### Deploy environments

Create your `Docker.<dev|prod>` env image and set the environment variables.

```dockerfile
[...]
# envs --
ENV SITE_URL https://{{ name }}.firebaseapp.com

ENV FUNC_URL https://us-central1-{{ name }}.cloudfunctions.net
# -- envs
[...]
```

For security, don't add `Docker.<dev|prod>` in version control.

So you need to push private images to Docker Hub.

```bash
$ docker login
$ docker push <DOCKER_ID_USER>/<IMAGE_NAME>
```

And then pull your private image at `docker-compose.yml`.

```diff
[...]
  <dev|prod>:
-   image: <dev|prod>
-   build:
-     context: .
-     dockerfile: Dockerfile.<dev|prod>
+   image: <PRIVATE_IMAGE>
    volumes:
      - yarn:/home/node/.cache/yarn
    tty: true
[...]
```

After that, you need to login to Docker Hub at `circle.yml`.

Don't forget to set CI's environment variables in CircleCI.

```sh
docker login -u ${DOCKER_USERNAME} -p ${DOCKER_TOKEN}
```

Change deployment configuration is completed.

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

```
.
├── flow-typed  -> module types
├── src
│   ├── api
│   │   ├── <FEATURE>
│   │   └── index.js
│   ├── app
│   │   ├── config
│   │   ├── <FEATURE>
│   │   ├── shared
│   │   ├── actions.js
│   │   ├── App.vue
│   │   ├── constants.js
│   │   ├── getters.js
│   │   ├── mutations.js
│   │   ├── translation.yml
│   │   └──types.js
│   ├── assets  -> datas, fonts, images, medias, styles
│   ├── client.js
│   ├── index.html
│   └── server.js
├── tools
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .firebaserc
├── .flowconfig
├── .gitignore
├── .postcssrc
├── .stylelintrc
├── Dockerfile
├── Dockerfile.dev
├── Dockerfile.prod
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
