## test-example

Code example demonstrating code quality in the dimension of unit tests,
documentation and similar topics. Besides that it doesn't provide any actual
functionalities.

### Installation

I will use yarn, but of course you can use the package manager of your choice.

```sh
git clone https://github.com/IUnknown68/test-example.git
cd test-example
yarn install
```

### Commands

The following commands are available:

- `yarn lint`: Lint the code. Base is [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base).
- `yarn test`: Run unit tests using [jest](https://jestjs.io/).
- `yarn doc`: Create documentation via [jsdoc](https://jsdoc.app/). Ouputs to `./docs`.
- `yarn doc:md`: Creates [api.md](https://github.com/IUnknown68/test-example/blob/main/api.md) using [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).

### API

See the api documentation, either as [markdown](https://github.com/IUnknown68/test-example/blob/main/api.md) or [html](./docs/).

### Todo:

Lots of possibilities here, e.g. more code analytics, possibly some git hooks, end-to-end tests etc.
