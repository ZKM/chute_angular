'use strict';

angular
  .module('chuteAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('Test', ['chute']);

angular.module('Test').controller('ChuteCtrl', ['$scope', 'Chute.API.Asset', function($scope, Asset) {
  $scope.assets = Asset.query({album: 'abcqsrlx', perPage: 3});
}]);
