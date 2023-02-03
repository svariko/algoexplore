FROM ubuntu:latest
USER root
WORKDIR /home/app
RUN apt-get update && apt-get -y install curl gnupg xz-utils && \
    curl -LO https://nodejs.org/dist/v18.0.0/node-v18.0.0-linux-x64.tar.xz && \
    tar -xvf node-v18.0.0-linux-x64.tar.xz && \
    cp -r node-v18.0.0-linux-x64/bin /usr/ && \
    cp -r node-v18.0.0-linux-x64/include /usr/ && \
    cp -r node-v18.0.0-linux-x64/lib /usr/ && \
    cp -r node-v18.0.0-linux-x64/share /usr/
RUN node --version && \
    rm -rf /home/app/node-v18.0.0-linux-x64  && \
    rm -rf /home/app/node-v18.0.0-linux-x64.tar.xz
COPY ./package.json /home/app/package.json
RUN npm install
COPY ./mergesortedarrays.js /home/app/mergesortedarrays.js
COPY ./mergesortedarrays.test.js /home/app/mergesortedarrays.test.js
