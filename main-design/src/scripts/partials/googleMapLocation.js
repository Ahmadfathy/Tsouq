module.exports = () => {
	var $location_input = $('.location-search');
	$location_input.each(function (index, item) {

		//
		// ─── 1- OPTIONS ────────────────────────────────────────────────────────────────────
		//
		var autocomplete_options = {
			types: [],
			componentRestrictions: {
				country: [] // you can add countries up to 5 places.
			}
		};


		//
		// ─── 2- AUTOCOMPLETE ───────────────────────────────────────────────────────────────
		//
		var autocomplete = new google.maps.places.Autocomplete($(item)[0], autocomplete_options);



		//
		// ─── 3- EVENTS BINDING ─────────────────────────────────────────────────────────────
		//
		$(item).keydown(function (e) {
			if (e.which == 13 && $('.pac-container:visible').length) return false;
		});

		google.maps.event.addListener(autocomplete, 'place_changed', function () {
			var place = autocomplete.getPlace();
			if (!place.geometry) {
				window.alert("Autocomplete's returned place contains no geometry");
				return;
			}
		});
	});

}