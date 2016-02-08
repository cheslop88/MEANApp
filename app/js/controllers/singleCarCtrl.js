angular.module('myApp').controller('singleCarCtrl', function($scope, $http, $routeParams){
    $http.get('data/data.json').success(function(data){
        $scope.cars=data
        $scope.car=$scope.cars[$routeParams.id]
     })
      	$scope.hiddenDiv = false;
    	$scope.showDiv = function () {
        $scope.hiddenDiv = !$scope.hiddenDiv;
    };
 });