FROM node:20-alpine3.16

RUN npm i -g @nestjs/cli \
    && apk --update add --no-cache git \
    && adduser -H -D -h /home/leo leo \
	&& echo leo:Col2020 | chpasswd

<<<<<<< HEAD
WORKDIR /app/nestjs-api-tutorial

<<<<<<< HEAD
# ENV PATH /app/node_modules/.bin:$PATH
=======
ENV PATH /app/node_modules/.bin:$PATH
=======
WORKDIR /home/leo
>>>>>>> f4be77a (Arch)
>>>>>>> f623dd1d66cc484a31e94143451eac2ce0fb12d8

ENTRYPOINT [ "yarn", "start:dev"]

# ENTRYPOINT ["/bin/ash" ]