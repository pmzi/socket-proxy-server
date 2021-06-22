FROM node:16-alpine AS compiler

WORKDIR /proxy-server

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn

COPY . .

RUN yarn build

FROM node:16-alpine AS server

RUN npm i -g pm2

WORKDIR /proxy-server


COPY ./ecosystem.config.js ./ecosystem.config.js
COPY ./package.json ./package.json
COPY ./.sequelizerc ./.sequelizerc
COPY --from=compiler /proxy-server/node_modules ./node_modules
COPY --from=compiler /proxy-server/dist ./dist

EXPOSE 3000

CMD ["pm2-runtime", "start", "./ecosystem.config.js", "--env", "production"]