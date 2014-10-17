'use strict';

/**
 * imports.
 */

var debug = require('debug')('greater-than');

/**
 * exports.
 */

module.exports = gt;

/**
 * Whether given value or value within an object property is greater than X.
 *
 * @param {Number} min
 * The number being compared to.
 *
 * @param {String} [field]
 * The property to be compared.
 *
 * @return {Function} lengthGt
 * Whether given value or value within an object property is greater than X.
 */

function gt(min, field) {
  min = (typeof min === 'number') ? min : 0;

  /**
   * Whether given value or value within an object property is greater than X.
   *
   * @param {*} value
   * Value to check.
   *
   * @return {Boolean}
   * Whether given value or value within an object property is greater than X.
   */

  return function gt(value) {
    debug('list: %s', JSON.stringify(value));

    if (field && field in value) {
      return value[field] > min;
    }

    return value > min;
  };
}
