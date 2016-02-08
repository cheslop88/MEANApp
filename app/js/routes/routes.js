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
	  .when('/sale', {
	    templateUrl: 'partials/sale/index.html',
	    controller: 'carCtrl'
	  })
	  .when('/sold', {
	    templateUrl: 'partials/sold/index.html',
	    controller: 'carCtrl'
	  })
	  .when('/history', {
	    templateUrl: 'partials/history/index.html'
	  })
	  .when('/service', {
	    templateUrl: 'partials/service/index.html'
	  })
	  .when('/sell', {
	    templateUrl: 'partials/sell/index.html'
	  })
	  .when('/enquire/:id', {
	    templateUrl: 'partials/enquire/index.html',
	    controller: 'singleCarCtrl'
	  })
	  .when('/contact', {
	    templateUrl: 'partials/contact/index.html'
	  })
	  .otherwise({redirectTo: '/home'});
	}]);