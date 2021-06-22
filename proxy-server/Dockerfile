FROM node:16-alpine AS compiler

WORKDIR /proxy-socket

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn

COPY . .

RUN yarn build

FROM node:16-alpine AS server

RUN npm i -g pm2

WORKDIR /proxy-socket


COPY ./ecosystem.config.js ./ecosystem.config.js
COPY ./package.json ./package.json
COPY --from=compiler /proxy-socket/node_modules ./node_modules
COPY --from=compiler /proxy-socket/dist ./dist

EXPOSE 8080

CMD ["pm2-runtime", "start", "./ecosystem.config.js", "--env", "production"]