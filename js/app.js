'use strict';

var app = angular.module('flashcast', [
	'ngCookies',
	'ngResource',
    'ngRoute',
]);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
		})
		.otherwise({
			redirectTo: '/'
		});
});
