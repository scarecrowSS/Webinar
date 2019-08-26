$(document).ready(function () {
	
	let caption = $('.s-7 figcaption:contains("дней")'),
		count = $(caption).prev('.first').find("li:last-child").text(),
		avalibleGifts = 3;

	$(caption).parent().addClass("hidden-figure");

	if (+count < 1) {
		$(".var-headline").html('Вам <span class="sec-headline_color_orange">доступен 1 из 3 бонусов</span>');
		avalibleGifts = 1;
		
	}
	else if (+count < 2) {
		$(".variable").text('доступны 2 из 3 бонуса');
		avalibleGifts = 2;
		
	}
	else if (+count >= 2) {
		$(".variable").text('доступны 3 из 3 бонуса');
		avalibleGifts = 3;
		
	}

	$(".presents__icon").on("click", function() {
		if ($(this).prev(".presents__check").prop('checked') === false) {
			--avalibleGifts;
			$(this).closest(".presents__item").addClass("checked");
			if(avalibleGifts == 0) {
				$('.presents__item').addClass("presents__item_status_lock");
			}
		}
		else if ($(this).prev(".presents__check").prop('checked') === true) {
			++avalibleGifts;
			$(this).closest(".presents__item").removeClass("checked");
			if(avalibleGifts > 0) {
				$('.presents__item').removeClass("presents__item_status_lock");
			}
		}
	})
});