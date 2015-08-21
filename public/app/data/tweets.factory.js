(function () {
    'use strict';
    
    angular
		.module('app')
		.factory('Tweets', Tweets);
    
    Tweets.$inject = ['$http', '$log'];
    
    function Tweets($http, $log) {
        return {
            getTweets: getTweets
        };
        
        function getTweets() {
            
            return $http.get('/api/tweets')
				.then(getTweetsComplete)
				.catch(getTweetsFailed);
            
            function getTweetsComplete(response) {
                return response.data;
            }
            
            function getTweetsFailed(error) {
                $log.error('XHR Failed for getTweets.' + error.data);
            }

        }

    }

})();