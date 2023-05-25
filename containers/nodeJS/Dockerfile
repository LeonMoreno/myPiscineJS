FROM node:20-alpine3.16

RUN npm i -g @nestjs/cli \
    && apk --update add --no-cache git \
    && adduser -H -D -h /home/leo leo \
	&& echo leo:Col2020 | chpasswd

<<<<<<< HEAD
WORKDIR /app/nestjs-api-tutorial

ENV PATH /app/node_modules/.bin:$PATH
=======
WORKDIR /home/leo
>>>>>>> f4be77a (Arch)

ENTRYPOINT [ "yarn", "start:dev"]

# ENTRYPOINT ["/bin/ash" ]