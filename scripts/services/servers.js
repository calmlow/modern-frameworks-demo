/**
 * Our Service
 */
angular.module('serverStatus').service("OurService", function( $http ) {

    this.getServers = function(){
        var url = "/mock/apiDataGetServers.json"

        //$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;

        return $http.get(url).then( function(resp) {
            return resp.data;
        });
    };
});
