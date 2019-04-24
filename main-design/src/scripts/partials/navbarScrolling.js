'use strict';

module.exports = () => {
	var $header = $('nav.navbar');
	var last_scroll_top = 0;
	var header_top = $header.height() / 2;


	$(window).on('scroll', function (e) {
		var w_scroll = $(this).scrollTop();
		if (w_scroll > header_top) {
			$header.addClass('scrolling');
		} else {
			if ($header.hasClass('scrolling')) {
				$header.removeClass('scrolling');
			}
		}
		last_scroll_top = w_scroll
	});


	$(window).trigger('scroll');
};