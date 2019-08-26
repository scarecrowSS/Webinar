$(document).ready(function() {

	$(".slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true
	});

	// Gallery Slider

	$(".gallery").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.gallery-nav'
	});

	$(".gallery-nav").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		focusOnSelect: true,
		asNavFor: '.gallery'
	});

	// Video Slider

	$(".video-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	// Audio Slider

	$(".sound-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	// Social Slider

	$(".soc-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

});
