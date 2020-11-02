FROM node:14

ENV HOME /Koa-Starter

WORKDIR ${HOME}
ADD . $HOME

RUN yarn install

EXPOSE 3000
