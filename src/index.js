'use strict';

export function annotate (...services) {
  return function decorate (target, key, descriptor) {
    if (descriptor) target = descriptor.value;
    target.$inject = services;
    return descriptor;
  }
}
