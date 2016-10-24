'use strict';

angular.module('serverStatus')
  .controller('ServerCtrl', function($scope, $interval) {

    $scope.theValue = "Hello World";
    $scope.count = 99;

    $interval( function() { $scope.count = $scope.count +1 ; }, 1000);

});
