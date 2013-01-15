YeomanAtTheMovies
=================

A small AngularJS to show off building something cool with Yeoman.

##How this app was built with Yeoman

## Start an Angular MVC application
yeoman init angular

- Say “Y”, to Twitter Bootstrap question.
- Say “Y”, to Twitter Bootstrap for Compass question.
- Then “N” to final question about making any changes.

## You Now Have a Running Angular app
yeoman server

- Comment out line 33 of _compass_twitter_boostrap.scss, to remove warning about the icon fonts, when using yeoman server (perhaps a pull request should be made for the AngularJS generator?)
- Change title to “Yeoman at the Movies” in app/index.html, to show off the livereload capabilities of Yeoman

## Install the Color JS library we’ll Use
yeoman install git://github.com/brehaut/color-js.git --save

## Create the Movie Controller
yeoman init angular:controller Movies

---

### Resources

- Documentation on how the AngularJS generator for Yeoman works: https://github.com/yeoman/generator-angular