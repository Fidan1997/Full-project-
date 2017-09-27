$(document).ready(function($) {
	
	$('.submenu').on('mouseover', function(event) {
		$(this).find('.list').css('display', 'block');
	});

	$('.submenu').on('mouseleave', function(event) {
		$(this).find('.list').css('display', 'none');
	});

});