
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
		var routeObjs = [];
		
		// loop for each box checked
		$.each(routesToDraw, function(index, name){
			
			$.each(routes, function(index, route){
				
				if( route['name'] === name ){
					routeObjs.push(route);
					return false;
				}
			});
		});
		
		routeObjs;	// array of route objects that need to be drawn
	});
}

function draw(routeObj){
	// {"name":"33","description":"Commercial-Mombasa Rd-Tajmall-Pipeline","color":"#ff0000","waypoints":[]}
	
}
