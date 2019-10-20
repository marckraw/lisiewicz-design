# Dockerfile for FRONTEND container
FROM node:latest as build-deps

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json yarn.lock /usr/src/app/
RUN yarn
COPY . ./

RUN yarn build


# Stage 2 - the production environment
FROM nginx:1.12-alpine
RUN /bin/sh -c "apk add --no-cache bash"
RUN /bin/sh -c "apk add --no-cache vim"

RUN ls -l
# COPY ./lisiewiczdesign.crt /etc/ssl
# COPY ./lisiewiczdesign.key /etc/ssl
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html 
EXPOSE 80
# EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
