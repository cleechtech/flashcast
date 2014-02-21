
function drawRoutes(data){
	
	$('input:checkbox').on('change', function(){
		var routesToDraw = [];
		
		// gets all checked html input fields
		var checked = $('input[name=route]:checked');

		$.each(checked, function(index, route){
			var routeName = $(route).attr('value');
			routesToDraw.push(routeName);
		});
		
		var routePolylines = [];
	
		// loop for each box checked
		$.each(routesToDraw, function(index, name){
			$.each(data, function(index, route){
				if( route['name'] === name ){
					
					// draw route polyline
					var polyline = L.polyline(route.waypoints, {
						color: route.color
					});
					
					map.addLayer(polyline);

					return false;
				}
			});
		});

	});
}
