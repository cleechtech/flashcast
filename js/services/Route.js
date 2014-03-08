'use strict';

app.factory('Route', function($http){
	var Route = {
		routes: function(callback){
			$http({
				method: 'GET',
				url:'data/routes.json'
			}).success(callback)
		},
		matches: function(callback){
			$http({
				method: 'GET',
				url:'data/match.json'
			}).success(callback)
		},
		shapes: function(callback){
			$http({
				method: 'GET',
				url:'data/shapes.json'
			}).success(callback)
		}
	};
	

	return Route;
});