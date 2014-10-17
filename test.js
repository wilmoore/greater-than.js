'use strict';

/**
 * imports.
 */

var test = require('tape');
var Promise = require('bluebird');

/**
 * local imports.
 */

var gt = require('./');

/**
 * predicates.
 */

var isNonEmptyArray = gt(0, 'length');
var isGreaterThan10 = gt(10);

/**
 * fixtures.
 */

var numberList = [1, 5, 6, 9, 25, 33, 44];
var emptyList = [];

/**
 * test cases.
 */

test('n > 10', function (t) {
  t.deepEqual([25, 33, 44], numberList.filter(isGreaterThan10));
  t.end();
});

test('_.length > 0', function (t) {
  new Promise(function(done, reject) {
    setTimeout(done, 0);
  })
  .then(function () {
    return numberList;
  })
  .then(isNonEmptyArray)
  .then(function (result) {
    t.equal(true, result);
    t.end();
  });
});

test('_.length <= 0', function (t) {
  new Promise(function(done, reject) {
    setTimeout(done, 0);
  })
  .then(function () {
    return emptyList;
  })
  .then(isNonEmptyArray)
  .then(function (result) {
    t.equal(false, result);
    t.end();
  });
});

