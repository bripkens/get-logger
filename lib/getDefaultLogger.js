'use strict';

var logger = {
  debug: console.log.bind(console),
  info: console.info.bind(console),
  warn: console.warn.bind(console),
  error: console.error.bind(console)
};

module.exports = function getDefaultLogger () {
  return logger;
};
