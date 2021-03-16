#!/usr/bin/env node

const fs = require('fs');

const package = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

package.scripts = {
  compile: 'rm -rf dist && tsc -p tsconfig.app.json',
  lint: 'tsc --noEmit && eslint "**/*.{js,ts}" --quiet',
  test: 'jest --forceExit --detectOpenHandles',
};

package.main = 'dist/index.js';

fs.writeFileSync('./package.json', `${JSON.stringify(package, null, 2)}\n`, {encoding: 'utf-8'});
