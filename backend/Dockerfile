FROM openjdk:8-jdk-alpine as builder

RUN mkdir -p /gradle

ADD  build.gradle /gradle
ADD  settings.gradle /gradle
ADD  src /gradle/src
ADD  gradlew /gradle
ADD  gradle /gradle/gradle
WORKDIR /gradle
RUN ./gradlew build -x test

FROM adoptopenjdk/openjdk8-openj9:x86_64-alpine-jdk8u181-b13_openj9-0.9.0-slim

ENV MONGO_HOST mongo
ENV MONGO_PORT 27017
ENV BACKEND_PORT 8080
ENV XMX 128m

RUN mkdir -p /app
COPY --from=builder /gradle/build/libs/lisiewicz_ecommerce.jar /app/
COPY run.sh /app/
COPY wait-for /app/
WORKDIR /app

ENTRYPOINT [ "sh", "./run.sh"]
