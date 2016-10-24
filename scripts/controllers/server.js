'use strict';

angular.module('serverStatus')
  .controller('ServerCtrl', function($scope, $interval, ServerStatus) {

    $scope.theValue = "Hello World";
    $scope.count = 99;

    $scope.servers = ServerStatus.query();

    $interval( function() { $scope.count = $scope.count +1 ; }, 1000);

});
