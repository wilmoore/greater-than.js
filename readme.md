# greater-than

[![Build Status](http://img.shields.io/travis/wilmoore/greater-than.js.svg)](https://travis-ci.org/wilmoore/greater-than.js) [![NPM version](http://img.shields.io/npm/v/greater-than.svg)](https://www.npmjs.org/package/greater-than) [![NPM downloads](http://img.shields.io/npm/dm/greater-than.svg)](https://www.npmjs.org/package/greater-than) [![LICENSE](http://img.shields.io/npm/l/greater-than.svg)](LICENSE)

> Whether given value or value within an object property is greater than X.

    $ npm install greater-than

## Usage

###### greater than primitive value

    var minimum = require('greater-than')(10);
    var numbers = [1, 5, 6, 9, 25, 33, 44];

    var choosen = numbers.filter(minimum);
    //=> [25, 33, 44]

###### greater than object property value

    var isNonEmptyArray = require('greater-than')(0, 'length');

    Users.active().then(isNonEmptyArray);
    //=> true

## Debug Logging

    DEBUG=greater-than node …

## License

  [MIT](LICENSE)

