FROM node:16.10.0-alpine as base

# set work directory
WORKDIR /src

COPY ./entrypoint.sh /src/entrypoint.sh
RUN chmod +x /src/entrypoint.sh
COPY . /src/
ENV WDS_SOCKET_PORT=0
ENTRYPOINT ["sh","/src/entrypoint.sh"]