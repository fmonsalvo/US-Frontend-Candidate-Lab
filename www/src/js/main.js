require.config({
  //path aliases for loaded scripts
  paths: {
    'backbone' : 'vendor/backbone/backbone',
    'jquery' : 'vendor/jquery/jquery-1.10.2',
    'underscore' : 'vendor/lodash/lodash',
    'modernizr' : 'vendor/modernizr/modernizr',
    'templateregistry' : 'app/templates',
  },
  //load script's dependencies in correct order &
  //wraps non-AMD scripts into AMD-modules
  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'modernizr': {
      exports: 'Modernizr'
    }
  },
  waitSeconds: 30
});

require(
  [
    'app/router',
    'modernizr'
  ],
  function(Router) {
    'use strict';
    new Router();
  }
);
