'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sampleApp
 */
angular.module('serverStatus').controller('ServersCtrl', function($scope, $http, $interval, OurService) {
  $scope.serverItems = [];
  $scope.fieldtoOrderBy = "status"; // default ordering
  $scope.searchValue = "";
  $scope.reverse = false;

  $scope.getServerItems = function() {
      $scope.serverItems = OurService.query(function() { console.log("...") });
      $scope.lastFetched = new Date().toLocaleString();
  };

  $scope.orderBy = function(fieldtoOrderBy) {
      $scope.reverse = ($scope.fieldtoOrderBy === fieldtoOrderBy) ? !$scope.reverse : false;
      $scope.fieldtoOrderBy = fieldtoOrderBy;
  };

  $scope.getServerItems();
  //$interval( $scope.getMatrix, (parseInt($scope.intervalRate)*1000)); // update every 2 min

});
