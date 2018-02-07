$(document).ready(function() {

//Active page
var nav = $(".nav")[0];
var navLinks = $(".nav_link");

$(nav).on("click", ".nav_link", function(e) {
	var target = e.target;
	$(navLinks).each(function(i) {
		navLinks[i].classList.remove("nav_link__active");
	});
	$(target).addClass("nav_link__active");
});

//Welcome-show
$(".welcome_title").on("click", function() {
		$(this).closest(".welcome_box").find(".welcome_text").slideDown(200);
});

//mobile-navigation 
var navStatus = false;

$(".toggler").on("click", function() {
	$(".nav_list").slideToggle(200);
	navStatus = !navStatus;
	$(".toggler_hamburger").toggleClass("toggler_hamburger__open");
	$(".toggler_cross").toggleClass("toggler_cross__open");
});

//Like-button
var likeObj = {
	"bicycle" : false,
	"cafe" : false,
	"coffee" : false
}

var likeActive = false; 

$(".news_like-btn").on("click", function(e) {
	e.preventDefault();
	var item = $(this).closest(".carousel_item");
	var itemType = item.data("type");
	var heart = $(this).find(".news_heart");
	var quantity = item.find(".news_like-quantity");
	var quantityNumber = parseInt(quantity.html());

	heart.toggleClass("news_heart__active");
	quantity.toggleClass("news_like-quantity__active");

	if (!likeObj[itemType]) {
		quantity.html(quantityNumber + 1);
		likeUp(item);
		likeObj[itemType] = !likeObj[itemType];
	} else {
		quantity.html(quantityNumber - 1);
		likeObj[itemType] = !likeObj[itemType];
	}
})

function likeUp(item) {
	var heartUp = $(item).find(".news_heart").clone();
	$(heartUp).addClass('likeUp');
	$(heartUp).css("position", "absolute");
	$(item).find(".news_like-btn").append(heartUp);

	setTimeout(function() {
		$(".likeUp").remove();
	}, 400);
}

//Message limit
var message = $(".form_message");

message.on("input", function() {
	if (message.val().length > 150) {
		message.val(message.val().slice(0,150));
		alert("Сообщение слишком длинное! Вам надо уложиться в 150 символов.");	
	}
});

//Quote active button
var quote = $(".quote")[0];
var quoteButtons = $(".quote_button");
var firstToggler = $("#first_toggler"),
		secondToggler = $("#second_toggler"),
		thirdToggler = $("#third_toggler");

$(quote).on("click", ".quote_button", function(e) {
	var target = e.target;
	$(quoteButtons).each(function(i) {
		quoteButtons[i].classList.remove("quote_button__active");
	});
	$(target).addClass("quote_button__active");

	if (firstToggler.hasClass("quote_button__active")) {
		$(quote).css("background-image", "url(../../img/quote_full.jpg)");
	}
	if (secondToggler.hasClass("quote_button__active")) {
		$(quote).css("background-image", "url(../../img/quote_2.jpg)");
	}
	if (thirdToggler.hasClass("quote_button__active")) {
		$(quote).css("background-image", "url(../../img/quote_3.jpg)");
	}
});




//Button to the top of the page
var upButton = document.createElement("div");  
upButton.innerHTML = "Вверх";
upButton.classList = "upButton"
$("body").append(upButton);

$(window).bind("scroll", function () {
	showUp();
});

var t; //timer for button opacity

function showUp() {
	if (pageYOffset > 700) {
		upButton.style.opacity = "1";
		upButton.style.top = "0";

		if (t) clearTimeout(t);
		t = setTimeout(function() {
			upButton.style.top = "-37px";
		}, 1000);
	} else {
		upButton.style.opacity = "0";
	};
};

$(upButton).bind("mouseover", function() {
	upButton.style.top = "0";
	if (t) clearTimeout(t);
});

$(upButton).bind("mouseout", function() {
	t = setTimeout(function() {
		upButton.style.top = '-37px';
	}, 1000);
});

function up() {
 	var timer;
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
   window.scrollBy(0,((top+100)/-10));
   timer = setTimeout(up, 4);
  } else {
  	clearTimeout(timer);
  };
  return false;
 }

$(upButton).on("click", up);
});