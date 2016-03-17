angular.module('myApp').factory("porsche", function porscheFactory($http) {
    return {
        all: function () {
            return $http({method: 'GET', url: '/api/stockList'});
        },
        single: function (id) {
            return $http({method: 'GET', url: '/api/stockList/'+id});
        },
        delete: function (carID) {
            return $http({method: 'DELETE', url: '/api/StockList/' + carID})
        },
        edit: function (url_ID, jsonObj) {
            return $http({method: 'PUT', url: '/api/stockList/'+url_ID, data: jsonObj})
        },
        create: function (jsonObj) {
        	return $http({method: 'POST', url: '/api/stockList', data: jsonObj})
        }
    }
});