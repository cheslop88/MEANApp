angular.module('myApp').controller('carCtrl',['$scope','$http',function($scope,$http){
	$scope.clearFilter = function() {
     	$scope.Query = undefined;
    };
      $http.get('data/data.json').success(function(data){
        $scope.cars=data
      })
    }]);