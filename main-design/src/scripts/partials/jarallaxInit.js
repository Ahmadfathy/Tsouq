require('jarallax/dist/jarallax.min.js');
module.exports = () => {
	$('.jarallax').each(function () {
		$(this).jarallax({
			speed: 0.5
		});
	});
}
