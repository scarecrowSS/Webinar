$(document).ready(function () {

	let openStatus = false;

	$(".action_var_gifts, .overflow__close").on('click', function() {
		if (openStatus === false) {
			$('.overflow').removeClass("overflow_status_hidden");
			openStatus = true;

		}
		else if (openStatus === true) {
			$('.overflow').addClass("overflow_status_hidden");
			openStatus = false;
		}
	});
});