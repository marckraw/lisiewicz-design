FROM node:8.11.3

RUN mkdir -p /frontend
WORKDIR /frontend

ADD /frontend /frontend

VOLUME ["/frontend"]

CMD yarn && yarn start
