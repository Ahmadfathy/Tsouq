module.exports = function () {
	$('.stars-readOnly').each(function (index, item) {
		var $singleRating = $(item).barrating({
			theme: 'fontawesome-stars-o',
			initialRating: (($(item).is('[data-init]') && $(item).attr('data-init') !== '0') ? Number($(item).attr('data-init')) : 'null'),
			readonly: true,
			showSelectedRating: true,
			hoverState: false,
			silent: true
		});
	});
	$('.stars-input').each(function (index, item) {
		var $singleRating = $(item).barrating({
			theme: 'fontawesome-stars-o',
			initialRating: (($(item).is('[data-init]') && $(item).attr('data-init') !== '0') ? Number($(item).attr('data-init')) : 'null'),
			readonly: false,
			showSelectedRating: true,
			hoverState: true,
			silent: false
		});
	});
}