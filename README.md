# ProxyServer

This project is made for my university's Internet Engineering course.

Basically it is a http proxy server which will proxy your request to the desired server and port.

## Running

This project uses docker to bootstrap, so it is required to install docker.

After installing docker you have to rename `proxy-server.env.sample` and `server.env.sample` with your own envs and remove `.sample` from their names. After that, the only thing you need to do is to run the following command:
```
$ docker compose up
```

After this, the project is up and running on `localhost:80`.

To use proxy server you need to go to the `localhost/proxy` and specify target and port as query strings. For example: `https://localhost/proxy?target=duspviz.mit.edu&target=80`.

To use admin panel you need to seed the DB first. To do that do the following instructions:

```
$ docker container exec -it proxy-main-server sh
$ yarn seed
$ exit
```

After that, you can login with username `admin` and password `admin`.

## Architecture

![Architecture](https://user-images.githubusercontent.com/11475858/122997813-9cef2800-d3c1-11eb-8b91-6898c02594ab.png)


## Used Technologies

Theses technologies are used to create this project:

- NodeJS
- TypeScript
- React
- Docker
- Nginx
- Postgres