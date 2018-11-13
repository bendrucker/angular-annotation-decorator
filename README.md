# angular-annotation-decorator [![Build Status](https://travis-ci.org/bendrucker/angular-annotation-decorator.svg?branch=master)](https://travis-ci.org/bendrucker/angular-annotation-decorator) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/angular-annotation-decorator.svg)](https://greenkeeper.io/)

ES7 decorator for adding `$inject` annotations for Angular 1.x.

## Installing
```sh
$ npm install angular-annotation-decorator
```

## Usage

```js
import inject from 'angular-annotation-decorator';

@inject('$http', '$q')
class MyService {
  constructor ($http, $q) {
    //
  }

  @inject('$log')
  method ($log) {
    //
  }
}
```

You'll need to use an ESNext transpiler like [Babel](https://babeljs.io/) and [enable support for decorators](https://www.npmjs.com/package/babel-plugin-transform-decorators-legacy).
