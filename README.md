# ts-init

Bootstrap a TypeScript project.

## On Linux/Unix shell

```sh
$ docker run --rm -v $(pwd):/opt/code --workdir /opt/code -it brainstation/ts-init:latest
```

## On Windows command prompt

```
$ docker run --rm -v %cd%:/opt/code --workdir /opt/code -it brainstation/ts-init:latest
```

## Output (What to expect)
Create a new directory for your new project.
```sh
$ mkdir my-project
$ cd my-project
```

Run the docker container.
```sh
$ docker run --rm -v $(pwd):/opt/code --workdir /opt/code -it brainstation/ts-init:latest
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (code) my-project
version: (1.0.0)
description: My TypeScript Porject
entry point: (index.js)
test command:
git repository: git@github.com:brainstation-au/ts-init.git
keywords:
author: brainstation@outlook.com.au
license: (ISC)
About to write to /opt/code/package.json:

{
  "name": "my-project",
  "version": "1.0.0",
  "description": "My TypeScript Porject",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/brainstation-au/ts-init.git"
  },
  "author": "brainstation@outlook.com.au",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/brainstation-au/ts-init/issues"
  },
  "homepage": "https://github.com/brainstation-au/ts-init#readme"
}


Is this OK? (yes)
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^2.1.2 (node_modules/jest-haste-map/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ @types/eslint@7.2.7
+ @types/jest@26.0.21
+ ts-jest@26.5.4
+ jest@26.6.3
+ eslint@7.22.0
+ @types/node@14.14.35
+ @typescript-eslint/eslint-plugin@4.18.0
+ @typescript-eslint/parser@4.18.0
+ typescript@4.2.3
added 608 packages from 424 contributors and audited 610 packages in 87.445s

44 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

A green-field typescript project is ready for you.
```sh
$ ls -al
total 488
drwxr-xr-x@  14 username  682178010     448 17 Mar 10:32 .
drwxr-xr-x   10 username  682178010     320 19 Mar 09:56 ..
-rw-r--r--@   1 username  682178010     198 17 Mar 10:31 .eslintignore
-rw-r--r--@   1 username  682178010    1035 17 Mar 10:31 .eslintrc
drwxr-xr-x@   3 username  682178010      96 17 Mar 10:32 .github
-rw-r--r--@   1 username  682178010      30 17 Mar 10:31 .gitignore
-rw-r--r--@   1 username  682178010     285 17 Mar 10:31 docker-compose.yml
-rw-r--r--@   1 username  682178010     130 17 Mar 10:31 jest.config.js
drwxr-xr-x  429 username  682178010   13728 19 Mar 10:01 node_modules
-rw-r--r--    1 username  682178010  215396 19 Mar 10:01 package-lock.json
-rw-r--r--@   1 username  682178010     946 19 Mar 10:01 package.json
drwxr-xr-x@   4 username  682178010     128 17 Mar 10:32 src
-rw-r--r--@   1 username  682178010     184 17 Mar 10:31 tsconfig.app.json
-rw-r--r--@   1 username  682178010     545 17 Mar 10:31 tsconfig.json
```
