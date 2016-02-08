//Car Filter Query Controller
angular.module('myApp').controller('carCtrl',['$scope','$http',function($scope,$http){
	// Reset the search filter
	$scope.clearFilter = function() {
     	$scope.Query = undefined;
    };
    // grab json data on success
    $http.get('data/data.json').success(function(data){
        $scope.cars=data
      })
    }]);