'use strict';
(function(){

	jQuery(function(){
	  window.onload = showMenuLabel();
	});

	function showMenuLabel(){
		// $('.has-dropdown').slideUp();
		
		// $('.dropdwon a').click(function(e){
		// 	window.location.href = $(this).attr('href');
		// });

		const btn = $('.btn-subsection');
		$('.dropdown').hide();
		btn.click(function(e){
			// e.preventDefault();
            if(!$(this).hasClass('open')){
                console.log('is open');
				$(this).addClass('open');
				$('.dropdown').slideDown();
            } else {
				$(this).removeClass('open');
				$('.dropdown').slideUp();
            }
			// if ($(this).parent().hasClass('has-children') !== true) {
			// 	window.location.href = $(this).attr('href');
			// } else if ($(this).parent().hasClass('first') && $(this).next($('.nav__level2')).hasClass('open')) {
			// 	window.location.href = $(this).attr('href');
			// } else if ($(this).next($('.nav__level2')).hasClass('open')) {
			// 	$('.nav__level2').slideUp().removeClass('open');
			// } else {
			// 	$('.nav__level2').slideUp().removeClass('open');
			// 	$(this).next().slideDown().addClass('open');
			// }
		});
	}

}());