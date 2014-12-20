'use strict';

angular.module("systemick", ['ngRoute', 'ngSanitize', 'systemick.config'])
  .config(function($routeProvider) {
    $routeProvider.when('/front', {
      templateUrl: 'components/views/front.html'
    });
    $routeProvider.when('/about-systemick', {
      templateUrl: 'components/views/aboutSystemick.html'
    });
    $routeProvider.when('/contact', {
      templateUrl: 'components/views/contact.html'
    });
    $routeProvider.when('/nodejs', {
      templateUrl: 'components/views/skill.html'
    });
    $routeProvider.when('/angularjs', {
      templateUrl: 'components/views/skill.html'
    });
    $routeProvider.when('/html5', {
      templateUrl: 'components/views/skill.html'
    });
    $routeProvider.when('/javascript', {
      templateUrl: 'components/views/skill.html'
    });
    $routeProvider.when('/php', {
      templateUrl: 'components/views/skill.html'
    });
    $routeProvider.when('/drupal', {
      templateUrl: 'components/views/skill.html'
    });
    $routeProvider.otherwise({
      templateUrl: 'components/views/front.html'
    });
});
