$(document).ready(function(){

	$('a').on('mouseover', function(event) {
		
		var datas = $(this).attr('data-value');

		var datas_array = datas.split('/');

		$('#info .number').html('BİNA ' + datas_array[0]);
		$('#info .float').html(datas_array[1]);
		$('#info .info-house .one').html(datas_array[2]);
		$('#info .info-house .two').html(datas_array[3]);
		$('#info .info-house .three').html(datas_array[4]);

		if($(this).hasClass('left')){
			$('#info').css({
				left: '75%',
				display: 'block'
			});
		}
		if($(this).hasClass('right')){
			$('#info').css({
				left: '0%',
				display: 'block'
			});
		}

	});

	$('a').on('mouseleave', function(event) {
		$('#info').css('display', 'none');
	});

});



