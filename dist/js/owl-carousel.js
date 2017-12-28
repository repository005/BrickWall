$(document).ready(function() {
 	$(".carousel_box").owlCarousel({
  	items: 1,
  	loop: true,
  	nav: true,
  	dots: false,
  	navText: ["<i class='carousel_prev'>prev</i>", "<i class='carousel_next'>next</i>"],
  	items: 1,
  	animateOut: "fadeOut",
  	animateIn: "fadIn"
  });
});

