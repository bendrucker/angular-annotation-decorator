'use strict';

import test from 'tape';
import {annotate} from '../';

test((t) => {

  @annotate('b', 'c')
  class A {}
  t.deepEqual(A.$inject, ['b', 'c'], 'class');

  class B {
    @annotate('a')
    method () {}
  }
  t.deepEqual(B.prototype.method.$inject, ['a'], 'method');

  t.end();

});
