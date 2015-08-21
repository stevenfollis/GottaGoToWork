var express = require('express');
var router = express.Router();
var Twit = require('twit');
var config = require('../config');

// setup the Twit module 
var T = new Twit({
    consumer_key: config.consumer_key,
    consumer_secret: config.consumer_secret,
    access_token: config.access_token,
    access_token_secret: config.access_token_secret
});

// define an array to hold all tweets
var tweets = [];

// query the Twitter API with the Twit module
T.get('search/tweets', { q: '"go to work" from:jaybilas', count: 100, result_type: 'mixed' }, function (err, data, response) {
    
    // store the tweets
    tweets = data.statuses;
    
    console.log('# of Tweets: ' + data.statuses.length);

});

/* GET tweets */
router.get('/tweets', function (request, response) {

    // return the array of tweets
    response.json(tweets);

});

module.exports = router;












