document.addEventListener("mousemove", doParallax);

function doParallax (event) {
	this.querySelectorAll(".parallax").forEach(layer => {
		let speed = layer.getAttribute('data-speed');

		layer.style.transform = `translate(-${event.clientX*speed/500}px, -${event.clientY*speed/500}px)`

	});

}