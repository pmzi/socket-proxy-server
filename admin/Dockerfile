FROM node:16-alpine AS builder

WORKDIR /front

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn

COPY . .

ARG REACT_APP_BASE_API_URL

RUN yarn build

FROM nginx AS server

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /front/build /var/www

EXPOSE 8000

ENTRYPOINT ["nginx","-g","daemon off;"]
