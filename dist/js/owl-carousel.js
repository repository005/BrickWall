$(document).ready(function() {
 	$(".carousel_box").owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		responsive: {}
  });

// Custom Navigation Events
var owl = $('.carousel_box');
owl.owlCarousel();
// Go to the next item
$('.carousel_next').click(function() {
    owl.trigger('next.owl.carousel', [300]);
})
// Go to the previous item
$('.carousel_prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
//Cancel select in Safari
$('.carousel_next').mousedown(function(e) {
	return false;
})

});

