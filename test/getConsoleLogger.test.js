/* eslint-env jest */

'use strict';

var getConsoleLogger = require('../lib/getConsoleLogger');

describe('getConsoleLogger', function () {
  var logger;

  beforeEach(function () {
    logger = getConsoleLogger('getConsoleLogger.test');
  });

  it('must supprt debug method', function () {
    logger.debug('supports debug?');
  });

  it('must supprt info method', function () {
    logger.info('supports info?');
  });

  it('must supprt warn method', function () {
    logger.warn('supports warn?');
  });

  it('must supprt error method', function () {
    logger.error('supports error?');
  });

  it('must log with the first parameter type != string', function () {
    logger.error({name: 'tom mason'});
  });
});
