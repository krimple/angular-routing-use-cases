// Code goes here

angular.module('myApp', ['ngMaterial', 'ngNewRouter',
                         'myApp.blank',
                         'myApp.one', 'myApp.two'])
.controller('AppController', function($router) {
  $router.config([
    { path: '/one', components: {
      top: 'blank',
      bottom: 'one' }
    },
    { path: '/two', components: { 
      top: 'blank',
      bottom: 'two' }
    }
  ]);
});