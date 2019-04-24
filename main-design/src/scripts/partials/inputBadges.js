module.exports = () => {
	// caching dom
	var $badges_inputs = $('input.badges-input').not('input[readonly]');


	$badges_inputs.each(function (index, element) {
		var $badges_container = $(element).closest('.form-row').find('.badges-container');
		var $badges_add_more = $(element).closest('.form-row').find('.badges-add-more');

		var badges = [];

		$badges_add_more.on('click', function () {

			if ($(element).val() !== '') {


				if (badges.includes($(element).val())) {
					return false;
				} else {
					badges.push($(element).val());
					$(element).val('');

					// add badges to container
					$badges_container.append(`
						<span class="badge badge-primary">${badges[badges.length - 1]}</span>
						<input name="${$(element).attr('name')}" type="${$(element).attr('type')}" value="${badges[badges.length - 1]}" hidden></input>
					`);
				}
			}
		})
	});
};