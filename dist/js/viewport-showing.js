$(document).ready(function(){
	var view = document.createElement("div");
	$(view).addClass("viewport");
	$(view).css({
		"background" : "red",
		"padding" : "5px 20px",
		"position" : "fixed",
		"right" : "20px",
		"top" : "50px",
		"text-align" : "center",
		"opacity" : ".5"
	});
	$("body").prepend(view);

	setInterval(function() {
		view.innerHTML = document.documentElement.clientWidth + " px";
	}, 100);
});