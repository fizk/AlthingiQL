FROM node:8.11.4-jessie

RUN apt-get update \
 && apt-get install -y  vim

WORKDIR /home/node/app

# Install modules
COPY package.json package-lock.json .babelrc ./

RUN npm cache clean --force \
    && npm run clean \
    && npm install

COPY . /home/node/app

ENV GRAPHQL_SERVER='http://localhost:9090/graphql'

RUN npm run build:server \
    && npm run build:client
