YeomanAtTheMovies
=================

A small AngularJS to show off building something cool with Yeoman.

This is a followup demo to the initial presentation that I did on Yeoman, which can be found here: https://github.com/program247365/yeoman-presentation See the README for a link to the slides.

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

You can first do: yeoman search [package name]. If you don’t find it there, you can arbitrarily tell Yeoman to install a particular github url, like the following:

yeoman install git://github.com/brehaut/color-js.git --save

Don’t worry about the “could not find local component.json.” message you get. It just means that you’re installing an arbitrary library, and Yeoman (Bower) doesn’t know about it’s dependencies.

Show that you now have a library installed and Yeoman knows about it:
yeoman list

## Create the Movie Controller
yeoman init angular:controller Movies

Yeoman will now tell you it created two JS files for this AngularJS controller. The file that will do the work, and a test file, with a single test already in it for you.

It even added the /scripts/controllers/Movies.js to your index.html file for you!

Now let’s see that the two tests Yeoman has generated for you, are currently passing (one for the initial app, and one for the newly created controller):
yeoman test

---

### Resources

- Documentation on how the AngularJS generator for Yeoman works: https://github.com/yeoman/generator-angular