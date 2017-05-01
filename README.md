# get-logger &nbsp; [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Downloads][downloads-image]][npm-url]

Node.js logging facade to decouple frameworks, libraries and application code from specific logging implementations.

**[Installation](#installation) |**
**[Usage](#usage) |**
**[API](get-logger.d.ts) |**
**[Changelog](CHANGELOG.md)**

---



## Installation

```
yarn add get-logger
# -or-
npm install --save get-logger
```

## Usage for application developers
TODO

```javascript
const logger = require('get-logger')('shoppingModule');
```

```javascript
require('get-logger').setLoggerProvider(name => {
  return {
    debug,
    info,
    warn,
    error
  };
});
```


## Usage for framework and library developers

```javascript
const logger = require('get-logger')('shoppingModule');
```

[npm-url]: https://npmjs.org/package/get-logger
[npm-image]: http://img.shields.io/npm/v/get-logger.svg

[downloads-image]: http://img.shields.io/npm/dm/get-logger.svg

[travis-url]: https://travis-ci.org/bripkens/get-logger
[travis-image]: http://img.shields.io/travis/bripkens/get-logger.svg

[coveralls-url]: https://coveralls.io/r/bripkens/get-logger
[coveralls-image]: http://img.shields.io/coveralls/bripkens/get-logger/master.svg
