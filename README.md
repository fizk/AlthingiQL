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
| API_PATH        | /api          |
| IMAGE_SERVER    | /images       |
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
| ENV_IMAGE_SERVER    | /images               |

## How it fits all together.

This system is the blue box in this diagram:
![loggjafarthing-schema](https://user-images.githubusercontent.com/386336/33863159-9212c998-df3a-11e7-882d-859b1da96bf0.png)


## More technical bla bla.
This applications is really _two-in-one_.

It's the GraphQL (BFF) that provides data (sourced from the [API](https://github.com/fizk/Loggjafarthing)) and send that 
back to the client.

Then it's the React client that displays data from the BFF along with interaction.

But there is also this bit in the middle, where this application works as an isomorphic application, as in, it can do the work
of the GraphQL and the React on the server side and send the client back a full HTML populated with data.

  
The code is split up into `src/client` and `src/server`. 

Since the application is written in TypeScript, there needs to be process where the server-side code is compiled down to
what ever Node can use to run the GraphQL part of it. This part of the code does'nt need any polyfilling, we know exactly
the environment that it's gonna run in (Node 10) so we just strip TypeScript annotations from the code and change the file
extensions to *.js.

The client side of the code needs to be converted from TypeScript into JavaScript, then from JSX syntax to JS syntax, then
polyfilled, then bundled into a single bundle.js file.

These are quite different. so there are two different pipelines. One for the client, defined in a Webpack config, and another
for the server, defined in the tsconfig.json file.

Then for the tricky part: The server code actually also needs to run React code for the isomorphic part of it, so it to needs
the JSX to JS part as well.

Lastly: since there are statement in the code like these `import './index.scss'`, these need to be stripped out for the server,
as it will not find any `*.scss` files. But the client code actually needs these imports as it will use it to create the
bundled *.css file. The pipelines become pretty similar:

server: tsx -> jsx -> js -> strip scss imports -> save
client: tsx -> jsx -> js -> use scss imports -> bundle (webpack)

That's why where are two Babel config. One stored as `.server.babelrc` used for the Server and one embedded in the `webpack.config.js`.
The only difference between them is that the Server one strip out `import './index.scss'`, the other one does'nt.

The obviously, the Server process stores the compiled versions as is, while the client one creates a bundle out of everything
and stores it as a single file.
