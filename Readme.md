# Default React Build with TypeScript

## What’s Included?
- [React 17 version](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)  
- [Webpack 5](https://webpack.js.org/)
    - [Webpack dev server](https://webpack.js.org/configuration/dev-server/)
    - [Clean webpack plugin](https://www.npmjs.com/package/clean-webpack-plugin)
    - [Copy webpack plugin](https://webpack.js.org/plugins/copy-webpack-plugin/)
    - [HTML webpack plugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- [Jest](https://jestjs.io/)
- [React-test-renderer](https://www.npmjs.com/package/react-test-renderer)  
- [Postcss](https://preset-env.cssdb.org/)
  - [Autoprefixer](https://github.com/postcss/autoprefixer) (included in [preset-env](https://babeljs.io/docs/en/babel-preset-env))
  - [Font magician](https://www.npmjs.com/package/postcss-font-magician)
  - [Mqpacker](https://www.npmjs.com/package/mqpacker)
- [Tslint](https://eslint.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)

## Start build with hot reload
```sh
npm run start
```

## Start build with hot reload (https connection)
### Generate key and cert files

```sh
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```
### Start build with cert flag 
```sh
npm run start:https
```

## Make a dev build
```sh
npm run dev
```
## Make a prod build
```sh
npm run build
```

# Testing
## The build uses Jest for unit testing and react-test-renderer for e2e testing 
## Npm command to start the tests
```sh
npm run test
```

# Linters
## List of commands to work with linters
``` sh
npm run prettier                  (to check a code by prettier)
npm run prettier:fix              (to fix prettier errors and warnings)
npm run linter"                   (to check a code by eslint)
npm run linter:fix                (to fix eslint errors and warnings)
npm run linters:check             (to check a code by eslint and pretter)
npm run linters:fix               (to fix eslint and prettier errors and warnings)
npm run stylelint                 (to check a code by stylelint)
npm run stylelint:fix             (to fix a code by stylelint)
npm run linters:all:check         (to check a code by eslint, prettier and stylelint)
npm run linters:all:fix           (to fix a code by eslint, prettier and stylelint)
```
