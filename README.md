# Koa Starter

:egg: A boilerplate for Node.js, Koa, Mongoose, Heroku, Atlas, Nodemon, PM2, and Babel.

## Table of Contents

- [Getting Started](#getting-started)
- [Key Features](#key-features)
- [Dockerization](#dockerization)
- [Configuration](#configuration)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [Microservices](#microservices)

## Getting Started

Follow steps to execute this boilerplate.

1. Clone this boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Koa-Starter.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install dependencies

```bash
$ yarn install
```

3. Start a development server

```bash
$ brew services start redis
$ brew services start mongodb-community
$ yarn serve
```

4. Produce a production-ready bundle

```bash
$ yarn build
```

5. Lint and fix files

```bash
$ yarn lint
```

6. Run unit tests

```bash
$ yarn unit
```

7. Run end-to-end tests

```sh
$ yarn e2e
```

## Key Features

- [Koa](https://github.com/koajs/koa)

## Dockerization

Dockerize an application.

```

```

## Configuration

Control the environment.

### Default environments

Set your local environment variables. (use `this.<ENV_NAME> = process.env.<ENV_NAME> || <LOCAL_ENV>;`)

```js
function Environments() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.HOST_NAME = process.env.HOST_NAME || '0.0.0.0';
  this.SITE_PORT = process.env.SITE_PORT || 3000;

  this.SECRET = process.env.SECRET || 'SrScah0TXyRFyo7tqYBgmk9YgAPNGKXR';

  this.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test';
  this.CLOUDINARY_URL = process.env.CLOUDINARY_URL || 'cloudinary://key:secret@domain_name';
}

module.exports = new Environments();
```

### Runtime environments

Set Docker environment variables during image build. (see `produce.Dockerfile`)

```dockerfile
# envs --
ARG secret_key
ENV SECRET_KEY=$secret_key

ARG mongodb_uri
ENV MONGODB_URI=$mongodb_uri
# -- envs
```

### File-based environments

If you want to set environment variables from a file.

```ts
.
├── envs
│   ├── dev.js
│   ├── stage.js
│   └── prod.js
└── src
```

```js
// envs/<ENV_NAME>.js

function Environments() {
  this.NODE_ENV = 'production';

  this.HOST_NAME = '0.0.0.0';
  this.SITE_PORT = 3000;

  this.SECRET = 'SrScah0TXyRFyo7tqYBgmk9YgAPNGKXR';

  this.MONGODB_URI = 'mongodb://127.0.0.1:27017/test';
  this.CLOUDINARY_URL = 'cloudinary://key:secret@domain_name';
}

module.exports = new Environments();
```

```sh
$ yarn add env-cmd -D
```

```js
// package.json

  "scripts": {
    // "env-cmd -f ./envs/<ENV_NAME>.js" + "yarn build"
    "build:dev": "env-cmd -f ./envs/dev.js yarn build",
    "build:stage": "env-cmd -f ./envs/stage.js yarn build",
    "build:prod": "env-cmd -f ./envs/prod.js yarn build",
  },
```

## Examples

- [Hello World](./src/hello-world)
- CRUD Operations
- Authentication
- File Uploads
- Realtime Data

## Directory Structure

```ts
.
├── src
│   ├── core
│   │   └── ...
│   ├── <FEATURE> -> feature module
│   │   ├── __tests__
│   │   │   ├── controller.spec.js
│   │   │   ├── service.spec.js
│   │   │   ├── model.spec.js
│   │   │   └── rest|<FLOW_NAME>.e2e-spec.js
│   │   ├── controller.js
│   │   ├── service.js
│   │   ├── model.js
│   │   └── index.js
│   ├── <GROUP> -> module group
│   │   └── <FEATURE> -> feature module
│   │       ├── __tests__
│   │       │   ├── controller.spec.js
│   │       │   ├── service.spec.js
│   │       │   ├── model.spec.js
│   │       │   └── rest|<FLOW_NAME>.e2e-spec.js
│   │       ├── controller.js
│   │       ├── service.js
│   │       ├── model.js
│   │       └── index.js
│   ├── app.js
│   └── server.js
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .prettierrc
├── babel.config.js
├── build.js
├── circle.yml
├── docker-compose.yml
├── Dockerfile
├── env.js
├── jest.config.js
├── LICENSE
├── package.json
├── README.md
├── webpack.config.js
└── yarn.lock
```

## Microservices

> Microservice architecture – a variant of the service-oriented architecture structural style – arranges an application as a collection of loosely coupled services. In a microservices architecture, services are fine-grained and the protocols are lightweight.

See [Server-side Micro-Fullstack](https://github.com/Shyam-Chen/Micro-Fullstack/tree/master/mbe) for instructions on how to create microservices from source code.
