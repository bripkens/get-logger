/* eslint-env jest */

'use strict';

var getDefaultLogger = require('../lib/getDefaultLogger');

describe('getDefaultLogger', function () {
  var logger;

  beforeEach(() => {
    logger = getDefaultLogger();
  });

  it('must supprt debug method', () => {
    logger.debug('supports debug?');
  });

  it('must supprt info method', () => {
    logger.info('supports info?');
  });

  it('must supprt warn method', () => {
    logger.warn('supports warn?');
  });

  it('must supprt error method', () => {
    logger.error('supports error?');
  });
});
