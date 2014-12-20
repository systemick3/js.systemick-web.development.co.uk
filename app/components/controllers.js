angular.module("systemick")
  .controller('containerCtrl', function($scope, $http, $location, $log, tweetsFactory, frontFactory, aboutFactory) {

    $scope.currentYear = new Date().getFullYear();
    $scope.getMenuClass = function(path) {
      if ($location.path().substr(0, path.length) == path) {
        return "active";
      } else {
        return "";
      }
    };
    
    aboutFactory.getAbout()
      .success(function(data) {
        $scope.about = data[0];
      }).error(function(error) {
        $log.error('Failed to get about content');
      });

    frontFactory.getFront()
      .success(function(data) {
        $scope.welcome = data[0];
      }).error(function(error) {
        $log.error('Failed to get front content');
      }) ;

    tweetsFactory.getTweets()
      .success(function (data) {
        $scope.tweets = data;
      })
      .error(function (error) {
        $scope.status = 'Unable to load tweets: ' + error.message;
      });

  })

  // Contact page controller
  //  Send details from submitted form to API
  //  API will generate an email to the admin user
  //.constant('contactUrl', 'http://localhost:3001/contact')
  .config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
  })
  .controller('contactCtrl', function($scope, $http, systemickConfig) {
    var apiData = systemickConfig.apiData;
    var contactUrl = apiData.server + ':' + apiData.port + '/systemick/contact'
    
    $scope.formSuccess = false;
    $scope.sendContactEmail = function(contactDetails) {
      if (angular.isDefined(contactDetails.name) && angular.isDefined(contactDetails.email) && angular.isDefined(contactDetails.subject) 
        && angular.isDefined(contactDetails.message)) {
        $http({
            method: "post",
            url: contactUrl,
            data: contactDetails
        })
        .success(function (data) {
          $scope.formSuccess = true;
        })
        .error(function (error) {
          $scope.status = 'Unable to send email';
        });
      }
    };
  })

  // Front page controller
  .controller('frontCtrl', function($scope, $http,  skillsFactory) {
    $scope.selectedSkill = 'nodejs';
    $scope.selectSkill = function(newSkill) {
      $scope.selectedSkill = newSkill;
    };

    $scope.getSelectedSkillClass = function(newSkill) {
      return ($scope.selectedSkill == newSkill) ? 'active' : '';
    };
    
    skillsFactory.getSkills().then(function(data) {
      console.log('frontCtrl');
      $scope.skills = data.data;
    });

  })

  // Skill page controller
  .controller('skillCtrl', function($scope, $location, skillsFactory) {

    //$scope.path = $location.path();
    $scope.currentSlug = $location.path().substr(1);

    skillsFactory.getSkills().then(function(data)  {
      $scope.skills = data.data;
    });

  });