// Directive for carousel feature
angular.module('myApp').directive('carouselContent', function () {
    return {
        templateUrl: 'partials/carousel/index.html',
        restrict: 'E',  
        replace: true,
        // Provided by Owl Carousel
        link: function (scope, element, attrs) {  
            var options = scope.$eval($(element).attr('data-options'));
            $(element).owlCarousel(options);
        }
    };
});
