var map;
function makeMap(){
	
	map = L.map('map-canvas').setView([-1.288553,36.821682], 12);
	
	L.tileLayer('http://{s}.tile.cloudmade.com/' + API_KEY + '/997/256/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 18
	}).addTo(map);
}
