# syntax=docker/dockerfile:1
FROM node:16-alpine

WORKDIR /code/
COPY package*.json .
#RUN npm install --production=false

EXPOSE 4200

RUN npm install -g @angular/cli@11.2.10