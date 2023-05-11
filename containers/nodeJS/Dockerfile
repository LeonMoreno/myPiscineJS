FROM node:20-alpine3.16

RUN npm i -g @nestjs/cli \
    && apk --update add --no-cache git

WORKDIR /ft_transcendence

ENV PATH /ft_transcendence/node_modules/.bin:$PATH

# ENTRYPOINT [ "npm", "run", "start:dev"]

ENTRYPOINT ["/bin/ash" ]