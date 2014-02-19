$document = $(document);

$document.ready(function(){
// ==================================
	// sidebar scroller
// ==================================
	$scrollbar = $('.scrollbar');
	$feedHolder = $('#feedHolder');
	$viewport = $('.viewport');
	
	$scrollbar.hide();

	// fade in
	$feedHolder.mouseenter(function(e){
		$scrollbar.fadeIn('fast');
	});
	
	// fade out
	$feedHolder.mouseleave(function(){
		$scrollbar.fadeOut();
	});
	
	// update size
	$(window).resize(function(){
		view_height = window.innerHeight - 145 - 10; 	// recalculate scrollbar height
		$viewport.css('height', view_height);
		$feedHolder.tinyscrollbar()
	});
	
// ==================================
	// menu toggling
// ==================================
	$('#menu-toggle').on('click', function(e){
		e.preventDefault();
		$('#wrapper').toggleClass('active');
	});
	
// ==================================
	// AJAX request or localStorage
// ==================================
	$loading_block = $('#loading_block');
	
	$document.on('ajaxStart', function(){
		$loading_block.removeClass('hidden');
	});
		
	$document.on('ajaxComplete', function(){
		$loading_block.addClass('hidden');
		
		// create scrollbar
		var view_height = window.innerHeight - 145 - 10; 	// subtracts height of ul sidebar-nav and 10 more pixels
		$viewport.css('height', view_height);
		$feedHolder.tinyscrollbar();
	});
	
	
});
