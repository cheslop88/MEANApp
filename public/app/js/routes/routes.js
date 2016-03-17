angular.module('myApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home/index.html'
        })
        .when('/cars/:id', {
            templateUrl: 'partials/cars/index.html',
            controller: 'singleCarCtrl'
        })
        .when('/stock', {
            templateUrl: 'partials/stock/index.html',
            controller: 'carCtrl'
        })
        .when('/admin', {
            templateUrl: 'partials/admin/index.html',
            controller: 'carCtrl'
        })
        .when('/admin/sold', {
            templateUrl: 'partials/admin/sold/index.html',
            controller: 'carCtrl'
        })
        .when('/admin/delete/deleted', {
            templateUrl: 'partials/admin/delete/deleted/index.html',
            controller: 'carCtrl'
        })
        .when('/admin/update/:id', {
            templateUrl: 'partials/admin/update/index.html',
            controller: 'singleCarCtrl'
        })
        .when('/admin/updated', {
            templateUrl: 'partials/admin/update/updated/index.html',
            controller: 'singleCarCtrl'
        })
        .when('/admin/add', {
            templateUrl: 'partials/admin/add/index.html',
            controller: 'carCtrl'
        })
        .when('/admin/added', {
            templateUrl: 'partials/admin/add/added/index.html',
            controller: 'carCtrl'
        })
        .when('/about', {
            templateUrl: 'partials/about/index.html'
        })
        .otherwise({redirectTo: '/home'});
}]);