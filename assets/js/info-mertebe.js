$(document).ready(function(){

	$('a').on('mouseover', function(event) {
		
		var datas = $(this).attr('data-value');

		var datas_array = datas.split('/');

		$('#info .number').html('MƏRTƏBƏ ' + datas_array[0]);

		$('#info .info-house-1 .one').html(datas_array[1]);
		$('#info .info-house-1 .two').html(datas_array[2]);
		$('#info .info-house-1 .three').html(datas_array[3]);

		$('#info .info-house-2 .one').html(datas_array[1]);
		$('#info .info-house-2 .two').html(datas_array[2]);
		$('#info .info-house-2 .three').html(datas_array[3]);

		$('#info').css('display', 'block');

	});

	$('a').on('mouseleave', function(event) {
		$('#info').css('display', 'none');
	});

});



