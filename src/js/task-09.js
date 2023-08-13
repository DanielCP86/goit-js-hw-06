function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");
changeColorButton.addEventListener("click", handleClick);
function handleClick(e) {
  const bodyElement = document.querySelector("body");
  const backColor = getRandomHexColor();
  bodyElement.style.backgroundColor = backColor;
  colorSpan.innerHTML = backColor;
}
