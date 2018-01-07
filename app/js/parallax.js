$(window).scroll(function() {
	parallax();
})

function parallax() {

	var wScroll = $(window).scrollTop();
	var quoteScroll = document.querySelector(".quote").getBoundingClientRect().top + wScroll;

	$(".header").css("background-position", "center -" + wScroll/2.4 + "%");

	$(".quote").css("background-position", "center " + (wScroll + document.documentElement.clientHeight - quoteScroll)/12 + "%");
}