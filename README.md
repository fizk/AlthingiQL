# AlthingiQL
React client that talks to an isomorphic Express server with a GraphQL
layer for data.


## What?
This application is the **Loggjafarthing** client as well as the thin
GraphQL server that provides the data to the client.

## How?
This app is expecting the [Loggjafarthing API](https://github.com/fizk/Loggjafarthing)
to be running (by default on host `0.0.0.0:8080`) to provide
data to the GraphQL server.

### Install
* Clone the repo
* Run `npm install`

### Develop
* Watch JS files `webpack:watch`
* Watch SCSS files `sass:watch`
* Run Express server in dev mode `server:dev`

This will start **Express server** through **nodemon** and run the
server-side code in-memory through **babel-node**. Client-side code is
compiled and stored in the `./public` folder. **Gulp** will be listening
for SCSS changes and storing CSS files in `./public` as well.

**Summary**: Run `npm run webpack:watch`, `npm run sass:watch`,
`server:dev` for development.

### Production
Production code is run through **forever** from the `./dist` directory.
Everything needs to be compiled before. For that there is the `npm run server:prod`
command, it will build and compile everything, store it in `./dist` and then
start the **Express server** through **forever**. That is all there is to it.

**Summary**: Run `npm run server:prod` for production.

### Env variables
The application can be configured with the following variables.

#### Server.
This is the connection to the GraphQL server. These values are used both on
the server-side for SSR and on the client for XHR requests.

* **SERVER_PROTOCOL** &lt;string&gt;  _default_: 'http',
* **SERVER_HOST** &lt;string&gt;  _default_: 'localhost'
* **PORT** &lt;number&gt;  _default_: 3000


#### Client
This is the REST API server. Since only the GraphQL server will interact with it,
it is best to talk to it via `localhost`. The default values will do just fine.

* **CLIENT_PROTOCOL** &lt;string&gt;  _default_: 'http'
* **CLIENT_HOST** &lt;string&gt;  _default_: 'localhost'
* **CLIENT_PORT** &lt;number&gt;  _default_: 8080

### NPM tasks

* **test** Run tests
* **start** Start the server with `forever`
* **stop** Stop the `forever` server.
* **server:dev** Run server through `nodemon` for development
* **server:prod** Build (client and server) and run production server through `forever`
* **webpack** Build client JS code
* **webpack:watch** Build and watch JS client code
* **sass** Build SCSS
* **sass:watch** Build and watch SCSS
* **build:server** Build server JS code
* **build:client** Build client JS/SCSS code
* **build** Build client and server JS code
* **storybook** Start `Storybook` server
* **lint:js** Lint JS code
* **lint:scss** Lint SCSS code

### Continuous Delivery
This repo uses Travis-CI and has a `.travis.yml` file for continuous delivery.
That file defines a web-hook that will be triggered every time there is a successful
commit to `master` branch, in which case the
[loggjafarthing.einarvalur.co](loggjafarthing.einarvalur.co) code will be updated and
the server will be re-started.

## How it fits all together.
The client is a part of a bigger system that includes:

* [Loggjafarthing](https://github.com/fizk/Loggjafarthing)
* [AlthingiAggregator](https://github.com/fizk/AlthingiAggregator)

This system is the blue box in this diagram:
![loggjafarthing-schema](https://user-images.githubusercontent.com/386336/33251209-9b8ba358-d389-11e7-83cd-eb2e34614afe.png)
