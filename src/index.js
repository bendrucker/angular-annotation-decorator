'use strict';

export function annotate (...services) {
  const [first] = services;
  if (typeof first === 'function') {
    services = [];
    return decorate(first);
  }
  else if (Array.isArray(first)) {
    services = first;
  }
  return decorate;
  function decorate (target) {
    target.$inject = services;
  }
}
