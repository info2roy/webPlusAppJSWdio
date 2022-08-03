FROM node:16.14.0-alpine3.15

RUN apk update && \
    apk add --no-cache --upgrade \
      zip \
      git \
      bash \
      curl && \
      rm -rf /var/cache/apk/*

WORKDIR /app

COPY package.json package-lock.json ./

RUN yarn install --pure-lockfile

COPY . ./

RUN npm install

CMD ["node_modules/.bin/wdio", "wdio.responsive.conf.js"]
