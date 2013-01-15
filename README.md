YeomanAtTheMovies
=================

We’ll be building a small AngularJS app, to make a call to the open Movie Database, to display a movie poster.

This is a followup demo to the initial presentation that I did on Yeoman, which can be found here: https://github.com/program247365/yeoman-presentation See the README for a link to the slides.

##How this app was built with Yeoman

## Start an Angular MVC application ##

```bash
yeoman init angular
```

- Say “Y”, to Twitter Bootstrap question.
- Say “Y”, to Twitter Bootstrap for Compass question.
- Then “N” to final question about making any changes.

## You Now Have a Running Angular app ##

```bash
yeoman server
```

- Comment out line 33 of _compass_twitter_boostrap.scss, to remove warning about the icon fonts, when using yeoman server (perhaps a pull request should be made for the AngularJS generator?)
- Change title to “Yeoman at the Movies” in app/index.html, to show off the livereload capabilities of Yeoman

## Install the Color JS library we’ll Use

You can first do: yeoman search [package name]. If you don’t find it there, you can arbitrarily tell Yeoman to install a particular github url, like the following:

```bash
yeoman install git://github.com/lokesh/color-thief.git --save
```

Don’t worry about the “could not find local component.json.” message you get. It just means that you’re installing an arbitrary library, and Yeoman (Bower) doesn’t know about it’s dependencies.

Show that you now have a library installed and Yeoman knows about it:

```bash
yeoman list
```

## Create the Movie Controller ##

```bash
yeoman init angular:controller movies
```

Yeoman will now tell you it created two JS files for this AngularJS controller. The file that will do the work, and a test file, with a single test already in it for you.

It even added the /scripts/controllers/movies.js to your index.html file for you!

Now let’s see that the two tests Yeoman has generated for you, are currently passing (one for the initial app, and one for the newly created controller):
yeoman test

## Add Logic to Your Movie Controller ##

Update the movies.js file to be:

```javascript
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
```

And update the main.html view file to be:

```html
<div class="hero-unit" style="margin: 20px;">
    <h1>Yeoman at the Movies</h1>
    <li style="list-style: none; margin: 0 20px 20px 20px;" ng-repeat="movie in movies">
        <h2>{{movie.title}}</h2>
        <img ng-src="{{movie.poster}}"/>
        <p>{{movie.tagline}}</p>
    </li>
  </ul>
</div>
```

---
### Appendix:

#### The Movie Database API

Documentation: http://docs.themoviedb.apiary.io/

- Base URL: http://api.themoviedb.org/3
- Get Configuration data: /3/configuration
- Get a Movie: /3/movie/{id}
- Get a Movie’s Posters: /3/movie/{id}/images
	- Example URL to put together: https://d1zm4mmpsrckwj.cloudfront.net/t/p/w500/jc1BopnUnrQzWUWSkgfPfcMi5Gy.jpg

Full request looks like:
http://api.themoviedb.org/3/movie/MOVIEID?api_key=###

---

### Resources

- Documentation on how the AngularJS generator for Yeoman works: https://github.com/yeoman/generator-angular