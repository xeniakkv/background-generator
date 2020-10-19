var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");



// Input is another event type for grabbing a value and in case a value gets changed it is being adjusted in the code as well

// This is how we start writing a code: 

// color1.addEventListener("input", function() {
//	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
// })

// color2.addEventListener("input", function() {
//	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
// })

// This code is repeating two times- we need to simplify it

// The final optimized version:

function setGradient() {

 body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 
  
  css.textContent = body.style.background + ";"; // this is another way for placing a content with textContent 
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);