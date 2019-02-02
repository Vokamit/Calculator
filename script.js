var screen = document.querySelector(".calc-screen input");
var zero = document.querySelector(".zero");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");

var clear = document.querySelector(".clear");

var point = document.querySelector(".point");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var multiplication = document.querySelector(".multiplication");
var division = document.querySelector(".division");

var equally = document.querySelector(".equally");
















clear.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="";
});

zero.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="0";
});

one.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="1";
});

two.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="2";
});

three.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="3";
});

four.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="4";
});

five.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="5";
});

six.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="6";
});

seven.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="7";
});

eight.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="8";
});

nine.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="9";
});

point.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value=".";
});

plus.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="+";
});

minus.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="-";
});

multiplication.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="*";
});

division.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="/";
});

equally.addEventListener("click", function(evt) {
  evt.preventDefault();
  screen.value="=";
});


