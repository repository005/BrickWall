//Лайк
var like = document.querySelector(".news_like-btn");
var heart = document.querySelector(".news_heart");
var quantity = document.querySelector(".news_like-quantity");
var quantityNumber = parseInt(quantity.innerHTML);

like.addEventListener("click", function() {
	event.preventDefault();
	heart.classList.toggle("news_heart__active");
	quantity.classList.toggle("news_like-quantity__active");
	if (quantityNumber == 140) {
		quantityNumber++;
		quantity.innerHTML = quantityNumber;
	} else {
		quantityNumber--;
		quantity.innerHTML = quantityNumber;
	}
});

var message = document.querySelector(".form_message");

message.addEventListener("input", function() {
	if (message.value.length > 150) {
		message.value = message.value.slice(0,150);
		alert("Сообщение слишком длинное! Вам надо уложиться в 150 символов.");	
	}
});

//Вспомогательный код для вьюпорта
var view = document.querySelector("#viewport span");

	setInterval(function() {
		view.innerHTML = document.documentElement.clientWidth + " px";
	}, 100);

//кнопка вверх
var upButton = document.createElement("div");  
upButton.innerHTML = "Вверх";
upButton.classList = "upButton"
$("body").append(upButton);

$(window).bind("scroll", function () {
	showUp();
});

var t;

function showUp() {
	if (pageYOffset > 700) {
	upButton.style.opacity = "1";
	upButton.style.top = "0";

	if (t) clearTimeout(t);
	t = setTimeout(function() {
		upButton.style.top = "-37px";
	}, 3000);

} else {
	upButton.style.opacity = "0";
}

$(upButton).bind("mouseover", function() {
	upButton.style.top = "0";
	clearTimeout(t);

	$(upButton).bind("mouseout", function() {
		t = setTimeout(function() {
			upButton.style.top = '-37px';
		}, 3000);
	});
});
}

function up() {
 	var timer;
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
   window.scrollBy(0,((top+100)/-30));
   timer = setTimeout('up()',3);
  } else {
  	clearTimeout(timer);
  };
  return false;
 }

upButton.addEventListener("click", function() {
	up();
});





