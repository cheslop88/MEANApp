//Single Car Controller
angular.module('myApp').controller('singleCarCtrl', function($scope, $http, $routeParams){
	//grab data
    $http.get('data/data.json').success(function(data){
        $scope.cars=data
        $scope.car=$scope.cars[$routeParams.id]
    })
    //code required for angular toggle of hidden content to slide down
    $scope.hiddenDiv = false;
    $scope.showDiv = function () {
    	$scope.hiddenDiv = !$scope.hiddenDiv;
    };
 });