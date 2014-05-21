"use strict";

angular.module('chuteAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

// Chicago Life       = ayg4tmuc/2514972
// Chicago Landmarks  = ayg5ofmi/2514973
// Chicago Food       = ayg6yqbu/2514974
// Other Chicago      = ayg7ydjb/2514975

angular.module('Test').controller('ChuteCtrl', ['$scope', 'Chute.API.Asset', function($scope, Asset) {
  $scope.assets = Asset.query({album: 'ayg5ofmi', perPage: 3});
}]);
