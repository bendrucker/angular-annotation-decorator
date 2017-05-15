'use strict';

var slice = [].slice;

module.exports = function annotate () {
  var services = slice.call(arguments);
  return function decorate (target, key, descriptor) {
    if (descriptor) target = descriptor.value;
    target.$inject = services;
    return descriptor;
  }
}
