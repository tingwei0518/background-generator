var body = document.querySelector("body");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var css = document.querySelector("h3");
var randomButton = document.querySelector("#random");

function setGradient(){	
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function setRandomGradient(){
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	color1.value = "#" + randomColor1;
	color2.value = "#" + randomColor2;
	setGradient();
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
randomButton.addEventListener("click",setRandomGradient);

// Display the initial CSS linear gradient property
// Add a random button
