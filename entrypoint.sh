#!/usr/bin/env sh

npm init

/tmp/ts-init/scripts.js

npm install --save-dev \
  @types/node \
  typescript \
  jest \
  @types/jest \
  ts-jest \
  eslint \
  @types/eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser

cp -a /tmp/ts-init/resources/. .
