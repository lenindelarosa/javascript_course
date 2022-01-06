var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function updateBodyGradient() {
    body.style = "background: linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.innerText = color1.value + ", " + color2.value;
}

console.log(css);

color1.addEventListener("input", updateBodyGradient);

color2.addEventListener("input", updateBodyGradient);