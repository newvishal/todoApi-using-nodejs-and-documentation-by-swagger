# specify the node base image with your desired version node:<version>
FROM node:10-alpine
WORKDIR /user/app
COPY package.json .
RUN npm install --quiet
COPY . . 