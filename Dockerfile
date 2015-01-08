FROM node:latest
MAINTAINER mysticPrg <mysticPrg@gmail.com>

RUN mkdir /home/WebStudy
COPY ./ /home/WebStudy

WORKDIR /home/WebStudy
RUN npm install

RUN npm install -g bower
RUN bower install --allow-root -F

CMD node index