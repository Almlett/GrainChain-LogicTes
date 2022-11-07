FROM node:16.4.2-alpine as base

# set work directory
WORKDIR /src

COPY ./entrypoint.sh /src/entrypoint.sh
RUN chmod +x /src/entrypoint.sh
COPY . /src/
ENV WDS_SOCKET_PORT=0
ENTRYPOINT ["/src/entrypoint.sh"]