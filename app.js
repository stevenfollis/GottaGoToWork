var express = require('express');
var path = require('path');

// initialize application
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

// initialize api routes
var tweets = require('./routes/tweets.js');
app.use('/api', tweets)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = app;
