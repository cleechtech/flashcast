
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
					
					draw(route)
					return false;
				}
			});
		});
	});
}

function draw(route){
	// {"name":"33","description":"Commercial-Mombasa Rd-Tajmall-Pipeline","color":"#ff0000","waypoints":[]}
	
	var coordinates = route.waypoints;
	
	// https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
	//~ var flightPlanCoordinates = [
		//~ new google.maps.LatLng(37.772323, -122.214897),
		//~ new google.maps.LatLng(21.291982, -157.821856),
		//~ new google.maps.LatLng(-18.142599, 178.431),
		//~ new google.maps.LatLng(-27.46758, 153.027892)
  //~ ];
  //~ var flightPath = new google.maps.Polyline({
    //~ path: flightPlanCoordinates,
    //~ geodesic: true,
    //~ strokeColor: '#FF0000',
    //~ strokeOpacity: 1.0,
    //~ strokeWeight: 2
  //~ });
//~ 
  //~ flightPath.setMap(map);
	
	drawWithDirections(route);
	
	
	console.log('just drew ' + route.name + ' on coordinates ' + route.waypoints);
}
