'use strict';

app.controller('RouteCtrl', function($scope, Route){

	// routes.json file
	Route.routes(function(data){
		$scope.routes = data;
	});

	// match.json file
	Route.matches(function(data){
		$scope.matches = data
	});

	// shapes.json file
	Route.shapes(function(data){
		$scope.shapes = data
	});

});

