var port = process.env.port || 1337;
var express = require('express');
var path = require('path');
var tweets = require('./routes/tweets.js');

// initialize application
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

// setup api routes
app.use('/api', tweets)

// start the server
var server = app.listen(port, function () {
    
    console.log('GottaGoToWork app listening on port ' + port);

});
