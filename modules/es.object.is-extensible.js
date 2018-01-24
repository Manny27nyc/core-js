// 19.1.2.11 Object.isExtensible(O)
var isObject = require('core-js-internals/is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});
