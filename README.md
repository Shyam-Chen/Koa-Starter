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

```

```

## Configuration

### File-based environments

If you want to set environment variables from a file.

```

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
