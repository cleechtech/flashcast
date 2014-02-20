// makes a google map. takes a route object
// ===============================
/* route object looks like this:
{
	'descriptor': String,
	'name': String,
	'color': #ffffff,
	'waypoints': [
		{ 
			lat: -1.30344, 
			lon: 36.788989
		},
		{ 
			lat: -1.30344, 
			lon: 36.787879
		}
	],
	'start': null,
	'end': null
}
*/

function drawWithDirections(route){
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();
	
	$('input:checkbox').on('change', function(){
		directionsDisplay.set('directions', null);	// remove previous Directions
	});
	
	// set directions display to map
	directionsDisplay.setMap(map);
	
	var end = route.waypoints[route.waypoints.length - 1];
	
	var origin = route.waypoints[0].lat + ',' + route.waypoints[0].lon;
	var destination = end.lat + ',' + end.lon;
	
	// ============================
	// MAX NUMBER OF WAYPOINTS IS 8.............
	// ============================
	var waypoints = [];
	$.each(route.waypoints, function(index, waypoint){
		var location = waypoint.lat + ',' + waypoint.lon;
		waypoints.push({
			location: location,
			stopover: true
		});
	});
	
	// format request
	var request = {
		origin: origin,
		destination: destination,
		waypoints: waypoints,
		travelMode: google.maps.TravelMode.DRIVING
	};
	
	directionsService.route(request, function(response, status){
		if (status == google.maps.DirectionsStatus.OK){
			directionsDisplay.setDirections(response);
		} else {
			console.log('status: ' + status + ' response: ' + response);
		}
	});
}

// http://maps.googleapis.com/maps/api/directions/json?origin=40.64974840,-73.94998180&destination=40.65084299999999,-73.9495750&sensor=false&departure_time=1343605500&mode=transit













