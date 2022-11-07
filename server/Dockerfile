FROM node:18-alpine as base

WORKDIR /src
COPY package*.json /
EXPOSE 4000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN yarn global add nodemon && yarn install
COPY . /
CMD ["nodemon", "bin/www"]