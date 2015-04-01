var express = require('express');

var path = require('path');
//var favicon = require('serve-favicon');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();
//app.use(express.static('public'));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

var Twit = require('twit')

// setup Twitter
var T = new Twit({
    consumer_key: '2AQDuUGPKqsFMYwLpT2gkA',
    consumer_secret: '4c8F36f2uD0pNUrKYPEuPv8TkdIkiX07haqPPO36k8k',
    access_token: '17838399-lOSpV4KlEn6eANlwgIQqFmICIiQ4Tddm6b6wPfj97',
    access_token_secret: 'so8I6FacFnsYW0D60rBaOEtrJ4KnzIHMFsOrUBMkcRA'
});

// define an array to hold all tweets
var tweets = [];

// query the Twitter API with the Twit module
T.get('search/tweets', { q: '"go to work" from:jaybilas', count: 100, result_type: 'mixed' }, function (err, data, response) {
    
    // store the tweets
    tweets = data.statuses;
    
    console.log('# of Tweets: ' + data.statuses.length);

});

// setup the default API route
app.get('/api/tweets', function (request, response) {
    
    // return the array of tweets
    response.json(tweets);

});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

//var server = app.listen();

module.exports = app;
