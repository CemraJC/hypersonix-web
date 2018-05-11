var scroll_arrow;

document.addEventListener("DOMContentLoaded", function() {

	/*
		Scroll bound animation handler
	*/
	var controller = new ScrollMagic.Controller();


	/*
		Scroll arrow positioner and animations
	*/
	scroll_arrow = document.getElementById("scroll-arrow");
	var total_height = window.innerHeight;
	var reference_height = document.querySelector("div.jumbotron").offsetTop;
	var desired_position = Math.min(String((total_height - 100) - reference_height), 500);

	if (desired_position > 250 && desired_position < 320) {
		desired_position = 250; // Clamp before runs over text
	}

	// Set position to reference
	scroll_arrow.style.top = desired_position + "px";
	// Set opacity to reference
	scroll_arrow.style.opacity = 1;

	// Scroll arrow fade out
	var scene = new ScrollMagic.Scene({triggerElement: "#scroll-arrow"})
					.setVelocity("#scroll-arrow", {opacity: 0}, {duration: 400})
					.addTo(controller);

	// Paragraph fade ins
	var scene = new ScrollMagic.Scene({triggerElement: ".image-block", offset: -200})
					.setVelocity(".image-block", {opacity: 1, translateY: -20}, {duration: 400})
					.addTo(controller);
});