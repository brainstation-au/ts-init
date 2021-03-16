FROM node:lts-alpine

LABEL maintainer="brainstation<brainstation@outlook.com.au>"

COPY resources /tmp/ts-init/resources

COPY entrypoint.sh scripts.js /tmp/ts-init/

ENTRYPOINT [ "/tmp/ts-init/entrypoint.sh" ]
