FROM node:20-alpine3.16

RUN npm i -g @nestjs/cli \
    && apk --update add --no-cache git

WORKDIR /app/google_auth
# WORKDIR /app/

# ENV PATH /app/node_modules/.bin:$PATH

ENTRYPOINT [ "yarn", "start:dev"]

# ENTRYPOINT ["/bin/ash" docke]