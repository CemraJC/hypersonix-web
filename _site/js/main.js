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
	var desired_position = Math.min(String((total_height - 70) - reference_height), 500);
	console.log(desired_position);

	if (desired_position > 280 && desired_position < 360) {
		desired_position = 280; // Clamp before runs over text
	}

	// Set position to reference
	scroll_arrow.style.top = desired_position + "px";
	// Set opacity to reference
	scroll_arrow.style.opacity = 1;

	// Start animation position
	scrollArrowIn()

	// build scene
	var scene = new ScrollMagic.Scene({duration: 50, offset: desired_position / 2})
					.addTo(controller);

	// Fade in at start
	scene.on("start", function() {
		scrollArrowIn();
	})

	// Fade out on leave
	scene.on("end", function() {
		scrollArrowOut();
	})
});

function scrollArrowIn() {
	scroll_arrow.velocity({opacity: 1});
	scroll_arrow.velocity({opacity: 0.5}, {loop: true, reverse: true, duration: 2000, delay: 500});
}

function scrollArrowOut() {
	scroll_arrow.velocity("stop", true);
	scroll_arrow.velocity({opacity: 0});
}