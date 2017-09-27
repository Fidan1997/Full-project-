$(document).ready(function($) {
	
	var width = $('#bg-svg').width();
	var height = $('#bg-svg').height();

	var windowHeight=$(window).height();

	$('#bg-svg').width('100%');
	$('#bg-svg').height(windowHeight);

	$('#svg-section .building').on('mouseover', function(event) {

		var path = $(this).find('.building-path').attr('d');
		var path_array = path.split(' ');

		var reverse_path = "M 0 0 L 100 0 L 100 100 L " + path_array[1] + " 100 ";

		for(i in path_array){

			if(i!=0 && i%3!=0 ){

				if((i-1)%3==0){
					reverse_path = reverse_path + ' L ' + path_array[i];
				}

				else if((i+1)%3==0){
					reverse_path = reverse_path + ' ' + path_array[i];
				}

			}

		}

		reverse_path = reverse_path + " L " + path_array[1] + " " + path_array[2] + " L " + path_array[1] + " 100 L 0 100 L 0 0";

		$('.segment').attr('d', reverse_path);
		$('.segment').css('opacity', '1');

	});

	$('#svg-section .building').on('mouseleave', function(event) {
		$('.segment').css('opacity', '0');

	});

	console.log(width+' '+height);

});