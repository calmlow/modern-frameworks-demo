'use strict';

angular.module('serverStatus')
  .controller('ServerCtrl', function($scope, ServerStatus) {

    $scope.refresh = function() {
      ServerStatus.query(function(data) {
        $scope.servers = data;
      });
    }

    $scope.refresh();

});
