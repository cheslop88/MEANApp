//directive for footer
angular.module('myApp').directive('siteFooter', function() {
     return {
        templateUrl: 'partials/footer/index.html',
        restrict: 'E',
        replace: true
    };
});