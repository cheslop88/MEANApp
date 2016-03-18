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
    // Delete record function - accessible on delete button click
    $scope.delete = function (carID) {
        if (confirm("Are you sure you want to delete?")) {
            // Delete service
            porsche.delete(carID).success(function (data, status, headers) {
                 // variable to indicate if action was successful
                $scope.deleted = true;
                // redirect on success
                $location.url('/admin/delete/deleted');
            }).error(function (data, status, header, config) {
                 // variable to indicate if action was not successful
                $scope.deleted = false;
            });
        }
    };
    // On click of add button, run the following function to post and save new record
    $scope.save = function() {
        // Variable declaration, convert string content if required
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
            // add the current date and time to the new record
            added = Date.now(),
            
            // convert json into an object
            carInfo = '{"model":' + model + ', "mileage":' + mileage + ', "owners":' + owners + ', "year":' + year + ', "transmission":' + transmission + ', "engine":' + engine + ', "image":' + image + ', "price":' + price + ', "sold":' + sold + ', "fuel":' + fuel + ', "colour":' + colour + ', "location":' + location + ', "interior":' + interior + ', "added":' + added + '}',
            /* As previous creation was a string, convert it to object valid for the post method */
            jsonObj = JSON.parse(carInfo);
        // call the POST service to update
        porsche.create(jsonObj).success(function (data, status) {
            // variable to indicate if action was successful
            $scope.added = true;
            // redirect on success
            $location.url('/admin/added');
        }).error(function (data, status) {
            // variable to indicate if action was not successful
            $scope.added = false;
        });
    };
}]);
