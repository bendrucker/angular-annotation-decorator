'use strict';

import test from 'tape';
import {annotate} from '../';

test((t) => {

  @annotate
  class Foo {}
  t.ok(Array.isArray(Foo.$inject), 'no params');

  @annotate('foo', 'bar')
  class Bar {}
  t.deepEqual(Bar.$inject, ['foo', 'bar'], 'spread params');

  @annotate(['foo', 'bar'])
  class Baz {}
  t.deepEqual(Baz.$inject, ['foo', 'bar'], 'array param');

  t.end();

});
