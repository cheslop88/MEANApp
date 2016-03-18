angular.module('myApp').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home/index.html'
        })
        /* Individual car page */
        .when('/cars/:id', {
            templateUrl: 'partials/cars/index.html',
            controller: 'singleCarCtrl'
        })
        /* All stock page */
        .when('/stock', {
            templateUrl: 'partials/stock/index.html',
            controller: 'carCtrl'
        })
        /* Admin page */
        .when('/admin', {
            templateUrl: 'partials/admin/index.html',
            controller: 'carCtrl'
        })
        /* Sold Items page */
        .when('/admin/sold', {
            templateUrl: 'partials/admin/sold/index.html',
            controller: 'carCtrl'
        })
        /* Deleted Confirmation page */
        .when('/admin/delete/deleted', {
            templateUrl: 'partials/admin/delete/deleted/index.html',
            controller: 'carCtrl'
        })
        /* Individual Update page */
        .when('/admin/update/:id', {
            templateUrl: 'partials/admin/update/index.html',
            controller: 'singleCarCtrl'
        })
        /* Update confirmation page */
        .when('/admin/updated', {
            templateUrl: 'partials/admin/update/updated/index.html',
            controller: 'singleCarCtrl'
        })
        /* Add Page */
        .when('/admin/add', {
            templateUrl: 'partials/admin/add/index.html',
            controller: 'carCtrl'
        })
        /* Add confirmation page */
        .when('/admin/added', {
            templateUrl: 'partials/admin/add/added/index.html',
            controller: 'carCtrl'
        })
        .when('/about', {
            templateUrl: 'partials/about/index.html'
        })
        /* Any other page link provided in url, link back to home */
        .otherwise({redirectTo: '/home'});
}]);
