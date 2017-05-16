'use strict';

import test from 'tape';
import inject from '../';

test((t) => {

  @inject('b', 'c')
  class A {}
  t.deepEqual(A.$inject, ['b', 'c'], 'class');

  class B {
    @inject('a')
    method () {}
  }
  t.deepEqual(B.prototype.method.$inject, ['a'], 'method');

  t.end();

});
