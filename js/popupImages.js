$(document).ready(function () {
	var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
    	if (isScrolling == false) {
        	window.requestAnimationFrame(function() {
          		scrolling(e);
         		isScrolling = false;
        	});
      	}
      	isScrolling = true;
    }

    document.addEventListener("DOMContentLoaded", scrolling, false);

    var listItems = document.querySelectorAll(".pop");

    function scrolling(e) {
    	for (var i = 0; i < listItems.length; i++) {
        	var listItem = listItems[i];
 
        	if (isPartiallyVisible(listItem)) {
          		listItem.classList.add("active");
          		
        	} else {
          		listItem.classList.remove("active");
        	}
        	
      		$(listItem).css({'transition':'0.2s'});

      	}
      	
    }
 
    function isPartiallyVisible(el) {
      	var elementBoundary = el.getBoundingClientRect();

 
      	var top = elementBoundary.top;
      	var bottom = elementBoundary.bottom  + 100;
      	var height = elementBoundary.height ;
 
      	return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      	var elementBoundary = el.getBoundingClientRect();
 
      	var top = elementBoundary.top;
      	var bottom = elementBoundary.bottom;
 
      	return ((top >= 0) && (bottom <= window.innerHeight));
    }
});