var upButton = document.querySelector(".footer_up");
function up() {
 	var timer;
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
   window.scrollBy(0,((top+100)/-30));
   timer = setTimeout('up()',3);
  } else clearTimeout(t);
  return false;
 }

upButton.addEventListener("click", function() {
	up();
});

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





