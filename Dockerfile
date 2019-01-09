FROM node:8.12

WORKDIR /app
COPY ./ /app/
RUN yarn install

ENTRYPOINT [ "yarn","start" ]