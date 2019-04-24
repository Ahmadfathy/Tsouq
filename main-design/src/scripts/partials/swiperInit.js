'use strict';

var Swiper = require('swiper');
module.exports = function () {


	//
	// ─── HOME MAIN SEC SLIDER ───────────────────────────────────────────────────────
	//
	if($('#home-main') && $('#home-main').length) {
		let my_swiper = new Swiper('#home-main .swiper-container', {
			init: true,
			direction: 'horizontal',
			speed: 1000,
			loop: true,
			parallax: true,
			grabCursor: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				dynamicBullets: true
			}
		});
		my_swiper.init();
	}
	if($('.services-tab-slider') && $('.services-tab-slider').length) {
		$('.services-tab-slider').each(function (index, item) {
			let my_swiper = new Swiper($(item), {
				init: true,
				direction: 'horizontal',
				speed: 1000,
				loop: true,
				parallax: true,
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 5,
				spaceBetween: 20,
				/*
					xs: 0,
					sm: 576 px,
					md: 768 px,
					lg: 992 px,
					xl: 1200 px
				*/
				breakpoints: {
					// when window width is <= 576px
					576: {
						slidesPerView: 1,
						spaceBetween: 10
					},
					// when window width is <= 768px
					768: {
						slidesPerView: 2,
						spaceBetween: 10
					},
					// when window width is <= 992px
					992: {
						slidesPerView: 3,
						spaceBetween: 15
					},
					// when window width is <= 1200px
					1200: {
						slidesPerView: 4,
						spaceBetween: 20
					}
				},
				keyboard: {
					enabled: true,
					onlyInViewport: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
			})
			my_swiper.init();

			$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
				var paneTarget = $(e.target).attr('href');
				var $thePane = $('.tab-pane' + paneTarget);
				var paneIndex = $thePane.index();
				if ($thePane.find('.swiper-container').length > 0 && 0 === $thePane.find('.swiper-slide-active').length) {
					my_swiper.update();
				}
			});
		});
	}


};
