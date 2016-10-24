'use strict';

angular.module('serverStatus')
  .factory('ServerStatus', function($resource) {
    return $resource('/mock/apiDataGetServers.json', {  }, {
      query: { method: 'GET', isArray: true }
    });
  });
