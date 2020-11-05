const body = document.querySelector("body");
const button = document.querySelector(".button");
const colors = ["red", "green", "blue", "yellow", "pink", "azure"];

body.style.backgroundColor = `${colors[4]}`;
button.addEventListener("click", myFunc);
function myFunc() {
  let red = setTimeout(() => {
    let indexOfColors = parseInt(Math.random() * colors.length -1);

    body.style.backgroundColor = colors[indexOfColors];
    button.innerHTML = `<h1>The color is now ${colors[indexOfColors]} .</h1>`;
  }, 20);
  return red;
}
