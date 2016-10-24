angular.module('serverStatus',[
	'ngResource',
	'ngRoute',
	'ui.bootstrap'
	])
	.config(function ($routeProvider) {
	 $routeProvider
		 .when('/', {
			 templateUrl: 'views/server.html',
			 controller: 'ServerCtrl',
			 controllerAs: 'server'
		 })
		 .otherwise({
			 redirectTo: '/'
		 });
 });
  ;
