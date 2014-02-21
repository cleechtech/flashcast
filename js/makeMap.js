var map;
var cloudMadeUrl;
var baseLayer;

function makeMap(){
	
	cloudMadeUrl = 'http://{s}.tile.cloudmade.com/' + API_KEY + '/997/256/{z}/{x}/{y}.png';
	
	baseLayer = L.tileLayer(cloudMadeUrl, {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
	});
	
	map = L.map('map-canvas', {
		center: new L.LatLng(-1.288553, 36.821682),
		zoom: 15,
		layers: [baseLayer]
	});
}
