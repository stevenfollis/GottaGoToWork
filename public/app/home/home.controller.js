(function () {
    'use strict';
    
    angular
        .module('app')
        .controller('HomeController', HomeController);
    
    HomeController.$inject = ['$scope', '$log', '$timeout', 'Tweets'];
    
    function HomeController($scope, $log, $timeout, Tweets) {
        $scope.title = 'HomeController';
        
        activate();
        
        function activate() {
            
            $log.info($scope.title + ' Activated');
            
            // retrieve all tweets and store in scope
            getTweets().then(function (a) {
                
                // setup timer
                initTimer();

            });

        }
        
        function getTweets() {
            
            return Tweets.getTweets().then(function (data) {
                
                $scope.tweets = data;
                
                // echo out data to browser console
                $log.log('Returned ' + $scope.tweets.length + ' tweets:');
                $log.log($scope.tweets);

            });

        }
        
        function randomTweet() {
            
            // get a random number based on the number of returned tweets
            var randomNumber = Math.floor(Math.random() * $scope.tweets.length);
            
            $scope.sampNum = $scope.sampNum++;
            
            // set a new tweet
            $scope.tweet = $scope.tweets[randomNumber];

        }
        
        function initTimer() {
            
            // pick a random tweet to star twith
            randomTweet();
            
            $scope.counter = 10;
            
            $scope.onTimeout = function () {
                if ($scope.counter == 0) {
                    randomTweet();
                    $scope.counter = 10;
                }
                else {
                    $scope.counter--;
                }
                mytimeout = $timeout($scope.onTimeout, 1000);
            }

            var mytimeout = $timeout($scope.onTimeout, 1000);

        }

    }

})();