'use strict';

YeomanAtTheMoviesApp.controller('MoviesCtrl', function($scope, $http, $templateCache) {

$scope.movies = [];
$scope.movies.poster_path = null;
$scope.method = 'JSONP';
$scope.url = 'https://api.themoviedb.org/3/movie/550';
$scope.image_base_url = 'https://d1zm4mmpsrckwj.cloudfront.net/t/p/w500/';
$scope.movies.poster_path = null;
$scope.movies.title = null;
$scope.movies.tagline = null;
$scope.movies.tmdb_api_key = 'PUTYOURAPIKEYHERE';

  $scope.getMovies = function() {
    $scope.code = null;
    $scope.response = null;
    $scope.params = {
      api_key: $scope.movies.tmdb_api_key,
      callback: 'JSON_CALLBACK'
    };
    $scope.headers = {
      Accept: 'application/json'
    };

    $http({method: $scope.method, url: $scope.url, params: $scope.params, headers: $scope.headers}).
      success(function(data, status) {
        $scope.status = status;
        $scope.data = data;
        $scope.createMovieModel($scope.data);
      }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });
  };

  $scope.updateModel = function(method, url) {
    $scope.method = method;
    $scope.url = url;
  };

  $scope.createMovieModel = function(data){
    $scope.movies.title = data.original_title;
    $scope.movies.poster_path = $scope.image_base_url + data.poster_path;
    $scope.movies.tagline = data.tagline;
    $scope.movies =
    [
      {"title" : $scope.movies.title},
      {"poster" : $scope.movies.poster_path},
      {"tagline" : $scope.movies.tagline}
    ];
  };

//Do the work
var poster_url = $scope.getMovies();

});
