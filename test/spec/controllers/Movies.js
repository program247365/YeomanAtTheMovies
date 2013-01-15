'use strict';

describe('Controller: MoviesCtrl', function() {

  // load the controller's module
  beforeEach(module('YeomanAtTheMoviesApp'));

  var MoviesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MoviesCtrl = $controller('MoviesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
