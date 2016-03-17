//Single Car Controller
angular.module('myApp').controller('singleCarCtrl', function ($scope, $http, $routeParams, $location, porsche) {
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
});