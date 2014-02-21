// Inputs: 
// geo = route.geo attribute of route
// datObj = JSON object fetched via ajax

// Output: array of lat lng points
function createWaypoints(geo, dataObj){
	
	var geo = geo.replace(/'\'/g, "");	
	geo = $.parseJSON(geo);
		
	var waypoints = [];
	
	$.each(geo.coordinates, function(index, point){
		var Lpoint = new L.LatLng(point.coordinates[0], point.coordinates[1]);
		
		waypoints.push(Lpoint);
	});
	
	return waypoints;
}
