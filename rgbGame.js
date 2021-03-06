	
var colors = generateRandomColors(6);




var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
for (var i = 0; i < squares.length; i++) {
	if (colors[i]) {
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
	}
}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}

});


resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked colors
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors";

})
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){

	//Adds initial colors to squares
	squares[i].style.background = colors[i];

	//Adds click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of picked square
		
		var clickedColor = this.style.background;
		//compare to pickedColor
	if (clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.background = clickedColor;
	}
	else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again"
	}
	});
}
function changeColors(color){
	//Loop through all squares
	for (var i = 0; i < squares.length; i++){
		//change colors
		squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make array
	var arr = []
	//add num random colors to array
	for (var i = 0; i < num; i++){
		//get random color and push to array
		arr.push(randomColor())
		//return that array
		}
		return arr;
}
function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}