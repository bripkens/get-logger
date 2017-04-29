'use strict';

const EventEmitter = require('events');
const getDefaultLogger = require('./getDefaultLogger');

var loggerProvider = getDefaultLogger;
var events = new EventEmitter();

exports.setLoggerProvider = function setLoggerProvider (_loggerProvider) {
  loggerProvider = _loggerProvider || getDefaultLogger;
  events.emit('loggerProvider');
};

exports.getLogger = function getLogger (name) {
  var impl = loggerProvider(name);

  events.on('loggerProvider', function onLoggerProviderChanged () {
    impl = loggerProvider(name);
  });

  return {
    debug: function debug () {
      return impl.debug.apply(impl, arguments);
    },
    info: function info () {
      return impl.info.apply(impl, arguments);
    },
    warn: function warn () {
      return impl.warn.apply(impl, arguments);
    },
    error: function error () {
      return impl.error.apply(impl, arguments);
    }
  };
};

if (process.env.NODE_ENV === 'test') {
  exports.nextTestIteration = function nextTestIteration () {
    loggerProvider = getDefaultLogger;
    events = new EventEmitter();
  };
}
