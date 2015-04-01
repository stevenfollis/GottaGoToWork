var express = require('express');
var router = express.Router();
var Twit = require('twit')

// setup the Twit module 
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

/* GET tweets */
router.get('/tweets', function (request, response) {

    // return the array of tweets
    response.json(tweets);

});

module.exports = router;












