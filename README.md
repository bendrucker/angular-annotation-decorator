# angular-annotation-decorator [![Build Status](https://travis-ci.org/bendrucker/angular-annotation-decorator.svg?branch=master)](https://travis-ci.org/bendrucker/angular-annotation-decorator)

ES7 decorator for adding `$inject` annotations for Angular 1.x.

## Installing
npm install angular-annotation-decorator

## Usage

```js
import {annotate} from 'angular-annotation-decorator';

@annotate('$http', '$q')
class MyService {
  constructor ($http, $q) {
    // 
  }
}
```

You'll need to use an ESNext transpiler like [Babel](https://babeljs.io/) and [enable the experimental `es7.decorators` transformer](http://babeljs.io/docs/usage/experimental/).
