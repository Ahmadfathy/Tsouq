window.$ = window.jQuery = require('jquery');
require('popper.js');
require('bootstrap');
require('jquery-bar-rating');
require("flatpickr"); // requireing flatpickr plugin to activate calender input.
var WOW                 = require('wowjs').WOW;
var sideNav             = require('./partials/sideNav');
var swiperInit          = require('./partials/swiperInit');
var animateCssInit      = require('./partials/animateCssInit');
var navbarScrolling     = require('./partials/navbarScrolling');
var jarallaxInit        = require('./partials/jarallaxInit');
var jqueryBarRatingInit = require('./partials/jqueryBarRatingInit');
var showPassword        = require('./partials/showPassword');
var googleMapLocation   = require('./partials/googleMapLocation');
var flatPickrInit       = require('./partials/flatPickrInit');
var inputBadges         = require('./partials/inputBadges');
var avatarFileUpload    = require('./partials/avatarFileUpload');


(function ($) {
	$(window).on('load', () => {
		animateCssInit();
		$('.preloader').animateCss('fadeOut faster', function () {
			$('.preloader').removeClass('d-flex').addClass('d-none');
			$('body').removeClass('preloader-shown');
		})
		new WOW({live:false}).init();
	});
	$(document).ready(() => {
		$('body').addClass('preloader-shown');
		sideNav({speed: 'faster', animation: 'fade', enternce_direction: 'right', exit_direction: 'right'});
		navbarScrolling();
		swiperInit();
		jarallaxInit();
		jqueryBarRatingInit();
		showPassword();
		flatPickrInit();
		googleMapLocation();
		inputBadges();
		avatarFileUpload();
	});
})(jQuery);
