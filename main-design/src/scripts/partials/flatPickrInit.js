//
// ─── LOADING DEPENDENCIES ───────────────────────────────────────────────────────
//

const Arabic = require('flatpickr/dist/l10n/ar.js').default.ar;
const English = require('flatpickr/dist/l10n/default.js');


//
// ─── EXPORTING MODULE FUNCTION ──────────────────────────────────────────────────
//

module.exports = function () {


	$(".times-of-work").each(function (index, element) {
		$(element).flatpickr({
			enableTime: true,
			altInput: true,
			altFormat: "F j, Y H:i",
			dateFormat: "Y-m-d H:i",
			"locale": ($('html').attr('dir') === 'rtl') ? Arabic : English
		});
	});

}