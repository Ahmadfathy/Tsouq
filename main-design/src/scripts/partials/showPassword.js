module.exports = () => {
	$('.show-password').each(function (index,item) {
		$(item).on('click', function () {
			// cach input.
			var $input = $(item).siblings('input');

			// chech if type password.
			if ($input.attr('type') === 'password') {
				$input.attr('type', 'text');
				$(item).find('.fas.fa-eye').removeClass('fa-eye').addClass('fa-eye-slash');
			}

			// chech if type text.
			else if ($input.attr('type') === 'text') {
				$input.attr('type', 'password');
				$(item).find('.fas.fa-eye-slash').removeClass('fa-eye-slash').addClass('fa-eye');
			}

			// return false if type not equal password or text.
			else { return false; }
		})
	});
};