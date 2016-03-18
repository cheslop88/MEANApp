angular.module('myApp').factory("porsche", function porscheFactory($http) {
    return {
        /* GET service for all data */
        all: function () {
            return $http({method: 'GET', url: '/api/stockList'});
        },
        /* GET service for individual car data */
        single: function (id) {
            return $http({method: 'GET', url: '/api/stockList/'+id});
        },
        /* DELETE service */
        delete: function (carID) {
            return $http({method: 'DELETE', url: '/api/StockList/' + carID})
        },
        /* PUT service */
        edit: function (url_ID, jsonObj) {
            return $http({method: 'PUT', url: '/api/stockList/'+url_ID, data: jsonObj})
        },
        /* POST service */
        create: function (jsonObj) {
        	return $http({method: 'POST', url: '/api/stockList', data: jsonObj})
        }
    }
});
