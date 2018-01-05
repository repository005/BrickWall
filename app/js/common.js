$(document).ready(function() {

//Active page
var nav = $(".nav")[0];
var navLinks = $(".nav_link");

$(nav).bind("click", function(e) {
	var target = e.target;
	if (target.nodeName != "A") return;
	$(navLinks).each(function(i) {
		navLinks[i].classList.remove("nav_link__active");
	});
	target.classList.add("nav_link__active");
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
var message = document.querySelector(".form_message");

message.addEventListener("input", function() {
	if (message.value.length > 150) {
		message.value = message.value.slice(0,150);
		alert("Сообщение слишком длинное! Вам надо уложиться в 150 символов.");	
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

$(upButton).bind("click", up);
});