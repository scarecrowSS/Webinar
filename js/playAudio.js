$(document).ready(function () {
	let statusTrack = false;
	let a = document.getElementsByTagName("audio");

	$(".sound-slider__btn").on('click', function() {

		let currentTrack = $(this).next(".sound-slider__audio"),
			currentTicker = $(this).prev(".sound-slider__ticker"),
			currentButton = $(this);

		if ($(currentTrack).hasClass("current") === false) {
			$(currentTrack).addClass("current");
			all_pause();
			$(".sound-slider__ticker").removeClass("active");
			$(currentTicker).addClass("active");
			$(currentTrack).get(0).play();
			$(".sound-slider__btn").removeClass("play");
			$(currentButton).addClass("play");
			
			statusTrack = true;
		}
		else if ($(currentTrack).hasClass("current") === true) {
			$(currentTrack).get(0).pause();
			$(".sound-slider__ticker").removeClass("active");
			$(currentTrack).removeClass("current");
			$(".sound-slider__btn").removeClass("play");
			statusTrack = false;
		}
	});

	function all_pause(){
	    for(i=0; i<a.length; i++){
	        a[i].pause();
	    }
	}
});