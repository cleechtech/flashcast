

function drawRoutes(){
	
	$('input:checkbox').on('change', function(){
		var routesToDraw = [];
		
		// gets all checked html input fields
		var routes = $('input[name=route]:checked');
	
		$.each(routes, function(index, route){
			routeName = $(route).attr('value');
			routesToDraw.push(routeName);
		});
		console.log('route names: ' + routesToDraw);
		
		$.each(routesToDraw, function(index, name){
			console.log('Name is: ' + name);
			var route = findRouteByName(name);
			
			// console.log('Drawing data for this route ' + route);
			// draw route
			
			
		});
	});
	
}

function findRouteByName(name){
	var routes = localStorage['routes'];
	routes = $.parseJSON(routes);
	
	console.log('routes is: ' + JSON.stringify(routes));
	
	$.each(routes, function(index, route){
		
		console.log('route is: ' + JSON.stringify(route));
		console.log('route["name"] is: ' + route["name"]);
		console.log('routes[index][name] is: ' + routes[index][name]);
		console.log('name is: ' + index);
		
		
		if (route['name'] === routes[index][name]){
			return route["name"];
		}
	});
	
	
}
