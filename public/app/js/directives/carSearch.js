//directive for car search form
angular.module('myApp').directive('carSearch', function() {
    return {
        templateUrl: 'partials/carSearch/index.html',
        restrict: 'E',
        replace: true,
        controller: 'carCtrl'
    };
});