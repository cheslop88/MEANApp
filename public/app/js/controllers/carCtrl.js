//Car Filter Query Controller
angular.module('myApp').controller('carCtrl', ['$scope', '$http', function ($scope, $http, $location, porsche){
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