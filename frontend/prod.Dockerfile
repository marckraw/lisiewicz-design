# Dockerfile for FRONTEND container
FROM node:latest

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json yarn.lock /usr/src/app/
RUN yarn
COPY . /usr/src/app

