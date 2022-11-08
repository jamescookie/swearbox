# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Docker

Build and run locally

```sh
$ docker build -t jamescookie/swearbox:0.1 .
$ docker run -d -p 8888:5000 --name swearbox jamescookie/swearbox:0.1
```
