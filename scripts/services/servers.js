angular.module('serverStatus').factory('OurService', function($resource) {
  return $resource('/mock/apiDataGetServers.json', {  }, {
    query: { method: 'GET', isArray: true }
  });
});
