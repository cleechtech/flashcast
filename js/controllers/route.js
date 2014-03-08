'use strict';

app.controller('RouteCtrl', function($scope, Route){
	Route.all(function(data){
		$scope.routes = data
	});

	
});
