$(document).ready(function() {
	// First Timer
	$('#hr-timer').timeTo({
	    timeTo: new Date(new Date('Thu Jul 23 2019 10:47:20 GMT+0300 (Moscow Standard Time)')),
	    fontFamily: "Open Sans",
	    fontSize: 36,
	    displayCaptions: true,
	    lang: 'ru',
	    callback: function () {
	    	document.location.href = "http://www.site.ru";
	    }
	});

	// Second Timer
	$('#s7-timer').timeTo({
	    timeTo: new Date(new Date('Thu Jul 20 2019 23:53:20 GMT+0300 (Moscow Standard Time)')),
	    fontFamily: "Open Sans",
	    fontSize: 36,
	    displayCaptions: true,
	    lang: 'ru'
	});

});