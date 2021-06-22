FROM node:16-alpine AS builder

WORKDIR /front

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock




RUN yarn

COPY . .

RUN yarn build

FROM nginx AS server

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /front/build /var/www

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
