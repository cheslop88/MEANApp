//self calling function, all directives, controllers and routes housed in other files
(function () {
    'use strict';
    // Declare app level module which depends on views, and components
    angular.module('myApp', ['ngRoute', 'angular.filter']);
})();

angular.module('myApp').factory("porsche", ['$http', function porscheFactory($http) {
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
}]);
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
//Car Filter Query Controller
angular.module('myApp').controller('carCtrl', ['$scope', '$http', '$location', 'porsche', function ($scope, $http, $location, porsche){
    // Reset the search filter
    $scope.clearFilter = function () {
        $scope.Query = undefined;
    };
    // grab json data on success
    porsche.all().success(function (data) {
        $scope.cars = data.stock;
    });
    $scope.delete = function (carID) {
        if (confirm("Are you sure you want to delete?")) {
            porsche.delete(carID).success(function (data, status, headers) {
                $scope.deleted = true;
                $location.url('/admin/delete/deleted');
            }).error(function (data, status, header, config) {
                $scope.deleted = false;
            });
        }
    };
    // On click of 'place bet' button, run the following function to post and save bet
    $scope.save = function() {
        var model = JSON.stringify($scope.model),
            mileage = $scope.mileage,
            owners = $scope.owners,
            year = $scope.year,
            transmission = JSON.stringify($scope.transmission),
            engine = $scope.engine,
            image = JSON.stringify($scope.image),
            price = $scope.price,
            sold = false,
            fuel = JSON.stringify($scope.fuel),
            colour = JSON.stringify($scope.colour),
            location = JSON.stringify($scope.location),
            interior = JSON.stringify($scope.interior),
            added = Date.now(),

            carInfo = '{"model":' + model + ', "mileage":' + mileage + ', "owners":' + owners + ', "year":' + year + ', "transmission":' + transmission + ', "engine":' + engine + ', "image":' + image + ', "price":' + price + ', "sold":' + sold + ', "fuel":' + fuel + ', "colour":' + colour + ', "location":' + location + ', "interior":' + interior + ', "added":' + added + '}',
            /* As previous creation was a string, convert it to object valid for the post method */
            jsonObj = JSON.parse(carInfo);
        porsche.create(jsonObj).success(function (data, status) {
            $scope.added = true;
            $location.url('/admin/added');
        }).error(function (data, status) {
            $scope.added = false;
        });
    };
}]);
//Single Car Controller
angular.module('myApp').controller('singleCarCtrl', ['$scope', '$http', '$routeParams', '$location', 'porsche', function ($scope, $http, $routeParams, $location, porsche) {
   //grab data
    var url_ID = $routeParams.id;
    porsche.single(url_ID).success(function (data) {
        $scope.car = data.stock;
    })
    //code required for angular toggle of hidden content to slide down
    $scope.hiddenDiv = false;
    $scope.showDiv = function () {
        $scope.hiddenDiv = !$scope.hiddenDiv;
    };
    // On click of 'place bet' button, run the following function to post and save bet
    $scope.update = function () {
        var id = JSON.stringify($scope.car._id),
            model = JSON.stringify($scope.car.model),
            mileage = $scope.car.mileage,
            owners = $scope.car.owners,
            year = $scope.car.year,
            transmission = JSON.stringify($scope.car.transmission),
            engine = $scope.car.engine,
            image = JSON.stringify($scope.car.image),
            price = $scope.car.price,
            sold = $scope.car.sold,
            fuel = JSON.stringify($scope.car.fuel),
            colour = JSON.stringify($scope.car.colour),
            location = JSON.stringify($scope.car.location),
            interior = JSON.stringify($scope.car.interior),

            carInfo = '{"_id":' + id + ', "model":' + model + ', "mileage":' + mileage + ', "owners":' + owners + ', "year":' + year + ', "transmission":' + transmission + ', "engine":' + engine + ', "image":' + image + ', "price":' + price + ', "sold":' + sold + ', "fuel":' + fuel + ', "colour":' + colour + ', "location":' + location + ', "interior":' + interior + '}',
            jsonObj = JSON.parse(carInfo);
        porsche.edit(url_ID, jsonObj).success(function (data, status) {
            $scope.ServerResponse = data;
            $scope.updated = true;
            $location.url('/admin/updated');
        }).error(function (data, status) {
            $scope.ServerResponse = data;
            $scope.updated = false;
        }); 
    }; 
}]);
//directive for car search form
angular.module('myApp').directive('carSearch', function() {
    return {
        templateUrl: 'partials/carSearch/index.html',
        restrict: 'E',
        replace: true,
        controller: 'carCtrl'
    };
});
angular.module('myApp').directive('carouselContent', function () {
    return {
        templateUrl: 'partials/carousel/index.html',
        restrict: 'E',  
        replace: true,
        link: function (scope, element, attrs) {  
            var options = scope.$eval($(element).attr('data-options'));
            $(element).owlCarousel(options);
        }
    };
});
//directive for footer
angular.module('myApp').directive('siteFooter', function() {
     return {
        templateUrl: 'partials/footer/index.html',
        restrict: 'E',
        replace: true
    };
});
//directive for nav bar include
angular.module('myApp').directive('navBar', function() {
    return {
        templateUrl: 'partials/nav/index.html',
        restrict: 'E',
        replace: true
    };
});
"use strict";

//application of an active class to clicked navigation menu item
$(document).on("click", ".nav-pills li a", function () {
    $(".nav-pills").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

/* Lightbox */
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);
//Capture the click event on a link to an image
$(document).on("click", "a.lightbox", function (event) {
    event.preventDefault();
    var srcVar = $(this).find("img").attr("ng-src");
    //Update overlay with the image linked in the link
    $image.attr("src", srcVar);
    $overlay.show();
    $("body").addClass("fixedBackground");
});

//When overlay is clicked
$overlay.click(function () {
    //Hide the overlay
    $overlay.hide();
    $("body").removeClass("fixedBackground");
});

$(document).ready(function() {
  $("#owl-demo").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items : 1, //1 item above 1000px browser width
    itemsDesktop : [1000,1], //1 item between 1000px and 901px
    itemsDesktopSmall : [900,1], // 1 between 900px and 601px
    itemsTablet: [600,1], //1 items between 600 and 0
    itemsMobile : [500, 1]
  });
});