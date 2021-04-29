# Koa Starter

:egg: A boilerplate for Node.js, Koa, Mongoose, Heroku, Atlas, Nodemon, PM2, and Babel.

## Table of Contents

- [Project Setup](#project-setup)
- [Key Features](#key-features)
- [Dockerization](#dockerization)
- [Configuration](#configuration)
- [Examples](#examples)
- [Directory Structure](#directory-structure)
- [Microservices](#microservices)

## Project Setup

Follow steps to execute this boilerplate.

### Install dependencies

```bash
$ yarn install
```

### Start a development server

```bash
$ brew services start redis
$ brew services start mongodb-community
$ yarn serve
```

### Produce a production-ready bundle

```bash
$ yarn build
```

### Lints and fixes files

```bash
$ yarn lint
```

### Runs unit tests

Files: `src/**/*.spec.js`

```bash
$ yarn unit
```

### Runs end-to-end tests

Files: `e2e/**/*.spec.js`

```sh
# Before running the `meas` command, make sure to run the following commands.
$ yarn build
$ yarn preview

# If it's not setup, run it.
$ yarn setup

$ yarn e2e
```

### Measures APIs

Files: `e2e/**/*.meas.js`

```sh
# Before running the `meas` command, make sure to run the following commands.
$ yarn build
$ yarn preview

# If it's not setup, run it.
$ yarn setup

$ yarn meas
```

### Mocks third-party APIs

```sh
# If it's not active, run it.
$ yarn active

$ yarn mock
```

## Key Features

- [Koa](https://github.com/koajs/koa)
- [Koa Router](https://github.com/koajs/router)

## Dockerization

Dockerize an application.

```sh

```

## Configuration

Control the environment.

### Default environments

Set your local environment variables. (use `this.<ENV_NAME> = process.env.<ENV_NAME> || <LOCAL_ENV>;`)

```js
// env.js

function Environment() {
  this.NODE_ENV = process.env.NODE_ENV || 'development';

  this.HOST_NAME = process.env.HOST_NAME || '0.0.0.0';
  this.SITE_PORT = process.env.SITE_PORT || 3000;

  this.SECRET_KEY = process.env.SECRET_KEY || 'SrScah0TXyRFyo7tqYBgmk9YgAPNGKXR';

  this.REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379/4';
  this.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test';
  this.CLOUDINARY_URL = process.env.CLOUDINARY_URL || 'cloudinary://key:secret@domain_name';
}

module.exports = new Environment();
```

### Runtime environments

Set Docker environment variables during image build. (see `produce.Dockerfile`)

```dockerfile
# envs --
ARG secret_key
ENV SECRET_KEY=$secret_key

ARG redis_url
ENV REDIS_URL=$redis_url

ARG mongodb_uri
ENV MONGODB_URI=$mongodb_uri
# -- envs
```

### File-based environments

If you want to set environment variables from a file.

```ts
.
├── e2e
├── envs
│   ├── dev.js
│   ├── stage.js
│   └── prod.js
├── mock
└── src
```

```js
// envs/<ENV_NAME>.js

function Environment() {
  this.NODE_ENV = 'production';

  this.HOST_NAME = '0.0.0.0';
  this.SITE_PORT = 3000;

  this.SECRET_KEY = 'SrScah0TXyRFyo7tqYBgmk9YgAPNGKXR';

  this.REDIS_URL = 'redis://127.0.0.1:6379/4';
  this.MONGODB_URI = 'mongodb://127.0.0.1:27017/test';
  this.CLOUDINARY_URL = 'cloudinary://key:secret@domain_name';
}

module.exports = new Environment();
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

```coffee
.
├── e2e
├── mock
│   ├── requests
│   └── responses
├── src
│   ├── core
│   │   └── ...
│   ├── <FEATURE> -> feature module
│   │   ├── __tests__
│   │   │   ├── controller.spec.js
│   │   │   ├── service.spec.js
│   │   │   └── model.spec.js
│   │   ├── controller.js
│   │   ├── service.js
│   │   ├── model.js
│   │   └── index.js
│   ├── <GROUP> -> module group
│   │   └── <FEATURE> -> feature module
│   │       ├── __tests__
│   │       │   ├── controller.spec.js
│   │       │   ├── service.spec.js
│   │       │   └── model.spec.js
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
├── Caddyfile
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
