FROM node:8.11.4-jessie

RUN apt-get update \
  && apt-get install -y  vim

EXPOSE 3000

ARG GRAPHQL_SERVER

RUN export GRAPHQL_SERVER=$GRAPHQL_SERVER

WORKDIR /home/node/app

COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build:server && npm run build:client.prod

CMD [ "./node_modules/.bin/pm2-runtime", "start", "./ecosystem.config.js" ]
