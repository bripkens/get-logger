/* eslint-env jest */

'use strict';

var sinon = require('sinon');

var getLogger = require('../lib/logging');

describe('logging', function () {
  beforeEach(function () {
    getLogger.nextTestIteration();
  });

  describe('default logger', function () {
    ['debug', 'info', 'warn', 'error'].forEach(function (type) {
      it('must be possible to log on ' + type + ' level without any manual configuration', function () {
        getLogger('a')[type]('123');
      });
    });
  });

  describe('custom logger', function () {
    var provider;
    var logger;

    beforeEach(function () {
      provider = sinon.stub();
      logger = {
        debug: sinon.stub(),
        info: sinon.stub(),
        warn: sinon.stub(),
        error: sinon.stub()
      };
      provider.returns(logger);
    });

    describe('setting before the creation of a logger', function () {
      var loggerName;
      var createdLogger;

      beforeEach(function () {
        getLogger.setLoggerProvider(provider);
        loggerName = 'shopping';
        createdLogger = getLogger(loggerName);
      });

      it('must create an instance', function () {
        expect(provider.callCount).toBe(1);
        expect(provider.getCall(0).args[0]).toBe(loggerName);
      });

      ['debug', 'info', 'warn', 'error'].forEach(function (type) {
        it('must forward `' + type + '` log messages to the logger instance', function () {
          var arg1 = 'a ' + type + ' message';
          var arg2 = 42;
          createdLogger[type](arg1, arg2);
          expect(logger[type].callCount).toBe(1);
          expect(logger[type].getCall(0).args[0]).toBe(arg1);
          expect(logger[type].getCall(0).args[1]).toBe(arg2);
        });
      });
    });

    describe('setting after the creation of a logger', function () {
      var loggerName;
      var createdLogger;

      beforeEach(function () {
        loggerName = 'shopping';
        createdLogger = getLogger(loggerName);
        getLogger.setLoggerProvider(provider);
      });

      it('must create an instance', function () {
        expect(provider.callCount).toBe(1);
        expect(provider.getCall(0).args[0]).toBe(loggerName);
      });

      ['debug', 'info', 'warn', 'error'].forEach(function (type) {
        it('must forward `' + type + '` log messages to the logger instance', function () {
          var arg1 = 'a ' + type + ' message';
          var arg2 = 42;
          createdLogger[type](arg1, arg2);
          expect(logger[type].callCount).toBe(1);
          expect(logger[type].getCall(0).args[0]).toBe(arg1);
          expect(logger[type].getCall(0).args[1]).toBe(arg2);
        });
      });
    });
  });
});
