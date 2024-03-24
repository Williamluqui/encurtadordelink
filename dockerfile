
# Ultima versão node 
FROM node:lts-alpine3.19

ENV NODE_VERSION 20.11.1

RUN apk update && apk upgrade


WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333 

CMD [ "npm", "build" ]