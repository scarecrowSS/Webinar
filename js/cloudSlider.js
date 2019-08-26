$(document).ready(function () {
	if ($(window).width() > 1199) {
		$('.card-container').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			speed: 400,
			edgeFriction: 0,
			autoplaySpeed: 5,
			centerMode: true,
			centerPadding: '0px'
		});

		document.addEventListener('mousemove', switchThis);

		window.setInterval(function() {

	        if ($(".card-container").hasClass("trigger-left") == true) {
	        	$(".card-container").slick('slickPrev');
	        }
	       
	   }, 5);
	}
});



function switchThis(e) {
	let centerCard;
	document.querySelectorAll(".slick-center.slick-current").forEach(function(element) {
		centerCard = element;
	});

	cursorPosition = e.clientX;



	if (cursorPosition < centerCard.getBoundingClientRect().left-80) {
		console.log("On Left");
		$('.card-container').removeClass('trigger-right').addClass("trigger-left");

		

		// $('.card-container').slick('slickPlay');

		

		
		


		
	}

	else if (cursorPosition > centerCard.getBoundingClientRect().right+80) {
		console.log("On Right");
		$('.card-container').removeClass('trigger-left').addClass("trigger-right");
		
		$('.card-container').slick('slickPlay');

		

	}

	else {
		$('.card-container').removeClass('trigger-left').removeClass('trigger-right');
		$('.card-container').slick('slickPause');
	}


	
	
}