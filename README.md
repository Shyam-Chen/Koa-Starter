# Koa Starter

:egg: A boilerplate for Node.js, Koa, Mongoose, Heroku, Atlas, Nodemon, PM2, and Babel.

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

- MongoDB

```sh
$ brew tap mongodb/brew
$ brew install mongodb-community
$ mongo --version
# MongoDB shell version v4.4.1
# Build Info: {
#     "version": "4.4.1",
#     "gitVersion": "ad91a93a5a31e175f5cbf8c69561e788bbc55ce1",
#     "modules": [],
#     "allocator": "system",
#     "environment": {
#         "distarch": "x86_64",
#         "target_arch": "x86_64"
#     }
# }

# Starting MongoDB
$ brew services run mongodb-community
$ brew services list

# Stopping MongoDB
$ brew services stop mongodb-community
```

- Redis

```sh
$ brew install redis
$ brew services start redis
$ brew services list
$ redis-cli ping
# PONG

$ brew services stop redis
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
│   │   │   ├── model.spec.js
│   │   │   ├── service.spec.js
│   │   │   └── rest|<FLOW_NAME>.e2e-spec.js
│   │   ├── controller.js -> rest controller
│   │   ├── model.js -> mongodb odm
│   │   ├── service.js -> provider
│   │   └── index.js
│   ├── <GROUP> -> module group
│   │   └── <FEATURE> -> feature module
│   │       ├── __tests__
│   │       │   ├── controller.spec.js
│   │       │   ├── resolver.spec.js
│   │       │   ├── document.spec.js
│   │       │   ├── relational.spec.js
│   │       │   ├── service.spec.js
│   │       │   ├── rest.e2e-spec.js
│   │       │   └── graphql.e2e-spec.js
│   │       ├── controller.js -> rest controller
│   │       ├── resolver.js -> graphql resolver
│   │       ├── document.js -> mongodb odm
│   │       ├── relational.js -> postgresql orm
│   │       ├── service.js -> provider
│   │       └── index.js
│   ├── app.js
│   └── server.js
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .prettierrc
├── babel.config.js
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
