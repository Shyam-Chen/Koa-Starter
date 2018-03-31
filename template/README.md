# {{ name }}

:poodle: {{ description }}

## Table of Contents

* [Getting Started](#getting-started)
* [Dockerization](#dockerization)
* [Configuration](#configuration)
* [Directory Structure](#directory-structure)

## Getting Started

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
$ firebase serve --only functions
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
    "development": "vue-by-example-dev",
    "production": "vue-by-example-prod"
  }
}
```

### Default environments

Set your local env variables.

```js
// env.js
const NODE_ENV = process.env.NODE_ENV || 'development';

const SITE_PORT = process.env.SITE_PORT || 8000;
const SITE_URL = process.env.SITE_URL || `http://localhost:${SITE_PORT}`;

const FUNC_PROJECT = process.env.FUNC_PROJECT || 'vue-by-example-dev';
const FUNC_URL = process.env.FUNC_URL || `http://localhost:5000/${FUNC_PROJECT}/us-central1`;

/* eslint-disable object-property-newline */
module.exports = {
  NODE_ENV,
  SITE_PORT, SITE_URL,
  FUNC_PROJECT, FUNC_URL,
};
```

### Deploy environments

Create your `Docker.<dev|prod>` env image.

```dockerfile
[...]
# envs --
ENV SITE_URL <SITE_URL>

ENV FUNC_URL <FUNC_URL>
# -- envs
[...]
```

Don't add `Docker.<dev|prod>` in version control.

So you need to push private images to Docker Hub.

```bash
$ docker login
$ docker push DOCKER_ID_USER/IMAGE_NAME
```

After having a private image, you need to login to Docker Hub at `circle.yml`.

```sh
docker login -u ${DOCKER_USERNAME} -p ${DOCKER_TOKEN}
```

And then pull your private image at `docker-compose.yml`.

```diff
[...]
  <dev|prod>:
-   image: <dev|prod>
-   build:
-     context: .
-     dockerfile: Dockerfile.prod
+   image: <PRIVATE_IMAGE>
    volumes:
      - yarn:/home/node/.cache/yarn
    tty: true
[...]
```

## Directory Structure

```
.
├── flow-typed  -> module types
├── src
│   ├── api
│   ├── app
│   │   ├── config
│   │   ├── <FEATURE>
│   │   │   ├── actions.js
│   │   │   ├── constants.js
│   │   │   ├── <FEATURE>.vue
│   │   │   ├── getters.js
│   │   │   └── mutations.js
│   │   └── shared
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
