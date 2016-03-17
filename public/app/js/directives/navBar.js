//directive for nav bar include
angular.module('myApp').directive('navBar', function() {
    return {
        templateUrl: 'partials/nav/index.html',
        restrict: 'E',
        replace: true
    };
});