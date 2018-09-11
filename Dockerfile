FROM node:8.11.4-jessie

RUN apt-get update \
  && apt-get install -y  vim

EXPOSE 3000

ARG GRAPHQL_SERVER

RUN export GRAPHQL_SERVER=$GRAPHQL_SERVER

WORKDIR /home/node/app

COPY . .

RUN npm run clean \
    && npm cache clean --force \
    && npm install \
    && npm run build:server \
    && npm run build:client.prod

CMD ["node", "./dist/server/index.js"]