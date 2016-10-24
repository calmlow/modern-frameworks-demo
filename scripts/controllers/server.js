'use strict';

angular.module('serverStatus')
  .controller('ServerCtrl', function($scope, ServerStatus) {

    $scope.servers = [];

    $scope.fieldtoOrderBy = "status";
    $scope.searchValue = "";
    $scope.reverse = false;

    $scope.refresh = function() {
      ServerStatus.query(function(data) {
        $scope.servers = data;
      });
    }

    $scope.orderBy = function(fieldtoOrderBy) {
      if ($scope.fieldtoOrderBy === fieldtoOrderBy) {
          $scope.reverse = !$scope.reverse;
      } else {
        $scope.fieldtoOrderBy = fieldtoOrderBy;
      }
  };

    $scope.refresh();

});
