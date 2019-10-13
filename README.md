# AlthingiQL
React client that talks to an isomorphic Express server with a GraphQL
layer for data.


## What?
This application is the **Loggjafarthing's** client as well as the thin
GraphQL (BFF) server that provides data to the client.


## Run in Docker
This repo provides a `docker-compose` file. Its main service is `run`, so, to get the service up should be as simple
as running

```bash
$ docker-compose up -d run
```

This service is expecting to be able to query [Loggjafarthing API](https://github.com/fizk/Loggjafarthing) for data. The
default is that the API is running on the same local machine. If this is not the case, you can provide an environment
variable `ENV_SERVER_HOST=http://loggjafarthing.einarvalur.co` to use the production server. There are more variables you
can set. See the table below. Running the container then becomes: (on a mac)

```bash
$ export ENV_SERVER_HOST=http://loggjafarthing.einarvalur.co
$ docker-compose up -d run
```

This will then start the service in development mode. It has listeners for file-changes and nodemon for restarting the
node server. 

### Run locally.
If you rather want to run it locally, you can clone this repo and then install all npm packages via:
```bash
$ npm i
```
After that, you can start the dev server via
```bash
$ npm run dev
```
There are a few other npm command you can run

* **test**: Run Jest
* **test-update**: Update Jest snapshots
* **lint**: Lint with esLint
* **dev**: Start in dev mode
* **start**: Start in prod mode
* **storybook**: Start Storybook

## Production
If you run `npm start`, the service will compile code for production and the start it up via 
[forever](https://github.com/foreversd/forever). All output will be sent to stdOut.

## Test
In the `docker-compose` file there is another service: `test` that can run all tests and linter
```bash
$ docker-compose run test
```
That's the one the CI server will use.


### Env variables
The application can be configured with the following variables.

The application is configured via:

| Key             | Default value |
| --------------- | -----------   |
| NODE_ENV        | development   |
| SERVER_PROTOCOL | http          |
| SERVER_HOST     | localhost     |
| SERVER_PORT     | 3000          |
| API_PROTOCOL    | http          |
| API_HOST        | localhost     |
| API_PORT        | 8080          |

All of these values are already set in the `docker-compose` file.

If you then want to send other values into the docker container the the `docker-compose` runs, you can set
environment variables in your host system

| key                 | default value         |
| ------------------- | --------------------- |
| ENV_SERVER_PROTOCOL | http                  |
| ENV_SERVER_HOST     | localhost             |
| ENV_SERVER_PORT     | 3000                  |
| ENV_API_PROTOCOL    | http                  |
| ENV_API_HOST        | host.docker.internal  |
| ENV_API_PORT        | 8080                  |

## How it fits all together.

This system is the blue box in this diagram:
![loggjafarthing-schema](https://user-images.githubusercontent.com/386336/33863159-9212c998-df3a-11e7-882d-859b1da96bf0.png)
