# Creating a Flask Single Page App

Powered by [Real Python](https://realpython.com)

## Series

| Part |      Title                | Media | Git Tag |
|------|---------------------------|-------|---------|
| 1    | Intro, Project Setup, Hello World | [video](https://www.youtube.com/watch?v=gegrALNqdro) | [part1](https://github.com/realpython/flask-single-page-app/tree/part1) |
| 2    | Dynamic web app, Jinja2 templating, HTML/CSS, relationship between client and server | [video](https://www.youtube.com/watch?v=9bum8TDd8Ag) | [part2](https://github.com/realpython/flask-single-page-app/tree/part2) |
| 3    | Front end fun with JavaScript, jQuery, and AJAX | [video](http://youtu.be/C88eNjVUDCM) | [part3](https://github.com/realpython/flask-single-page-app/tree/part3) |
| 4    | Working with the Github API - consuming the API, parsing JSON | [video](http://youtu.be/Yo-RxGCpJ9s) | [part4](https://github.com/realpython/flask-single-page-app/tree/part4)
| 5    | Consuming RESTful APIs - parsing JSON, error handling | [video](http://youtu.be/aLAsgS1IHd8) | [part5](https://github.com/realpython/flask-single-page-app/tree/part5)
| 6    | Caching External API Requests from the Github API | [blog post](https://realpython.com/blog/python/caching-external-api-requests/) | [part6](https://github.com/realpython/flask-single-page-app/tree/part6)


## Flask!

![flask_logo](flask.png)

Flask is a minimalistic web framework. What does this mean for you?

Unlike full featured frameworks, like Django, it takes a bit more time to get an App up since it does not come pre-packaged with features. For beginners, this is good - Since you actually have to do more coding, you learn more. If you just toss an app up quickly with Django, you don't learn nearly as much. Because of this, it's hard to customize and troubleshoot issues because you don't learn what's happening under the hood. With Flask, you can build an app from the ground up and add features as you go. You learn more. Plus you get the freedom to pick and choose the features you want.

## Part 1 (09/06/2014):

1. Created a Project directory
1. Setup development environment - pip, virtualenv, and Git
1. Installed Flask with pip
1. Created our App
1. Commited our changes to the local repo

## Part 2 (09/13/2014):

1. Added a template to our 'Hello, World' app
1. Looked briefly at Jinja templating
1. Touched on dynamic routes using query parameters
1. Styled the app using HTML and CSS

## Part 3 (09/20/2014):

1. Updated our Flask view to return JSON on a POST request
1. Setup JavaScript and jQuery on the client-side
1. Grabbed the values from the form using jQuery
1. Sent the values to the server-side via AJAX
1. Summed the values on the server-side, then returned the sum back to the client-side
1. Added the returned value to the DOM

## Part 4 (09/27/2014):

1. Looked briefly at the RESTful API structure
1. Consumed the Github API with the Requests library
1. Parsed the returned data
1. Added the parsed data to the DOM

## Part 5 (09/28/2014):

1. Worked with DOM manipulation
1. Touched on error handling