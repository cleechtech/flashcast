var map;
function makeMap(){
	var nairobi = new google.maps.LatLng(-1.288553,36.821682);
	
	// create map canvas
	var mapOptions = {
		zoom: 13,
		center: nairobi
	};
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}
