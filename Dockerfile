FROM node:9-alpine

RUN apk add --no-cache bash
RUN apk add --no-cache nano

WORKDIR /usr/src/app/
