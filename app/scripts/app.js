'use strict';

var YeomanAtTheMoviesApp = angular.module('YeomanAtTheMoviesApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MoviesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
