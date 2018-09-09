FROM node:8.11.4-jessie

RUN apt-get update \
 && apt-get install -y  vim

WORKDIR /home/node/app
