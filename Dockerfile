FROM node:10.16.3-buster-slim

RUN apt-get update \
  && apt-get install -y  vim

EXPOSE 3000

WORKDIR /usr/src/app

COPY package*.json ./
COPY tsconfig.json ./
COPY webpack.config.js ./
COPY .server.babelrc ./
COPY .eslintrc.js ./

# questionable
COPY ./public/fonts ./public/fonts

# a little hack so nodemon can start
RUN mkdir -p ./dist/server && touch ./dist/server/index.js

RUN npm i
