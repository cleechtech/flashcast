'use strict';

app.factory('Route', function($http){
	var Route = {
		all: function(callback){
			$http({
				method: 'GET',
				url:'data/routes.json'
			}).success(callback)
		},
	};
	

	return Route;
})