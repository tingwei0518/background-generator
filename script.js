const body = document.querySelector("body");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const css = document.querySelector("h3");
const randomButton = document.querySelector("#random");

function setGradient(){	
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = `${body.style.background};`;
}

function setRandomGradient(){
	const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	color1.value = `#${randomColor1}`;
	color2.value = `#${randomColor2}`;
	setGradient();
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
randomButton.addEventListener("click",setRandomGradient);

// Display the initial CSS linear gradient property
// Add a random button
