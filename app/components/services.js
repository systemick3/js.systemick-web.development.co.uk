angular.module("systemick")

  // Get tweets from Twitter API
  .factory("tweetsFactory", ['$http', 'systemickConfig', function($http, systemickConfig) {
    var tweetsData = {};
    var apiData = systemickConfig.apiData;
    var tweetsUrl = apiData.server + ':' + apiData.port + '/twitter/user/systemick/2';

    tweetsData.getTweets = function () {
        return $http.get(tweetsUrl);
    };

    return tweetsData;
  }])

  // Get front page data from Systemick API
  .factory("frontFactory", ['$http', 'systemickConfig', function($http, systemickConfig) {
    var frontData = {};
    var apiData = systemickConfig.apiData;
    var frontUrl = apiData.server + ':' + apiData.port + '/systemick/collection/front';

    frontData.getFront = function () {
      return $http.get(frontUrl);
    };

    return frontData;
  }])

  // Get front about data from Systemick API
  .factory("aboutFactory", ['$http', 'systemickConfig', function($http, systemickConfig) {
    var aboutData = {};
    var apiData = systemickConfig.apiData;
    var aboutUrl = apiData.server + ':' + apiData.port + '/systemick/collection/pages';

    aboutData.getAbout = function () {
      return $http.get(aboutUrl);
    };

    return aboutData;
  }])

  .factory("skillsFactory", ['$http', 'systemickConfig', function($http, systemickConfig) {
  var promise;
  var apiData = systemickConfig.apiData;
  var skillsUrl = apiData.server + ':' + apiData.port + '/systemick/collection/skills';
  var skillsData = {
    getSkills: function() {
      if ( !promise ) {
        // $http returns a promise, which has a then function, which also returns a promise
        promise = $http.get(skillsUrl).then(function (response) {
          // The then function here is an opportunity to modify the response
          // The return value gets picked up by the then in the controller.
          return response;
        });
      }
      // Return the promise to the controller
      return promise;
    }
  };
  return skillsData;
}]);