var routeObjects = [];

$(function(){
// =======================================
	// Request data (ajax or localStorage)
// =======================================
	if (localStorage.getItem("routes") === null){		// if data does not exist in localStorage..
		console.log('ajax request sent!');
		
		$.ajax({
			type: 'POST',
			url: 'http://flash-cast-hrd.appspot.com/api/sonar/sync', 
			data: {
				source: 5,
				auth: 'JXEIUOVNQLKJDDHA2J'
			}, 
			success: createRouteObjects
		});
		
	} else {
		console.log('Fetched data from local strorage!');
		
		var routes = localStorage['routes'];
		routes = JSON.parse(routes);
		routeObjects = routes;
		
		// loop over each formatted route object	
		$.each(routes, function(index, route){
			addToSidebar(route);
		});
		
		// listen for clicks to routes
		$('.headline').on('click', function(e){
			e.preventDefault(); 
			$(this).toggleClass('selected');
		});
		
		$loading_block.addClass('hidden');
	
		// create scrollbar
		var view_height = window.innerHeight - 145 - 10; 	// subtracts height of ul sidebar-nav and 10 more pixels
		$viewport.css('height', view_height);
		$feedHolder.tinyscrollbar();
		
		makeMap();
		drawRoutes();
	}
});

// ==================================
	// Functions
// ==================================
function createRouteObjects(data){
	var dataObj = $.parseJSON(data),
		routes = dataObj.routes;
	
	// loop over each raw route object	
	$.each(routes, function(index, route){
		
		// find waypoints
		var waypoints = match_stages(route.stage_ids, dataObj);
		console.log(waypoints);
		
		var routeObj = {
			'name': route.name,
			'description': route.descriptor,
			'color': route.color,
			'waypoints': waypoints
		};
		
		// add to sidebar
		addToSidebar(routeObj);
		
		// add to array
		routeObjects.push(routeObj);
	});

	// add data to html5 local storage
	localStorage['routes'] = JSON.stringify(routeObjects);
	
	makeMap();
	drawRoutes();
}


function addToSidebar(route){
	var output = Mustache.render(
		'<li>'
		+ '<input type="checkbox" name="route" value="{{name}}">'
		+ '<a class="headline">'
		+ '{{name}} <span>{{description}}</span>'
		+ '</a>'
		+ '</li>', route);
		
	$('#routes').after(output);
}
