
function drawRoutes(){
	
	$('input:checkbox').on('change', function(){
		
		var routesToDraw = [];
		
		// gets all checked html input fields
		var routes = $('input[name=route]:checked');
	
		$.each(routes, function(index, route){
			routeName = $(route).attr('value');
			routesToDraw.push(routeName);
		});
		
		// get data
		var routes = localStorage['routes'];
		routes = $.parseJSON(routes);
		
		// loop for each box checked
		$.each(routesToDraw, function(index, name){
			
			$.each(routes, function(index, route){
				if( route['name'] === name ){
					
					// draw route polyline
					L.polyline(route.waypoints, {
						color: route.color
					}).addTo(map);

					console.log('just drew ' + route.name + ' on coordinates ' + route.waypoints);
					return false;
				}
			});
		});
	});
}
