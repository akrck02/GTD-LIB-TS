FROM node:latest AS node_base

RUN mkdir -p /gtd-lib
WORKDIR /gtd-lib

RUN echo "NODE Version:" && node --version
RUN echo "NPM Version:" && npm --version

COPY . .
RUN apt-get update 
RUN apt-get install -y wget gnupg fonts-ipafont-gothic fonts-freefont-ttf firefox-esr --no-install-recommends

RUN apt-get install sudo

RUN cp build/drivers/geckodriver /usr/local/bin
RUN chmod +x /usr/local/bin/geckodriver

RUN npm i
EXPOSE 5500