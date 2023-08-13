const fontSizeControlInput = document.querySelector("input#font-size-control");
const textSpan = document.querySelector("span#text");
fontSizeControlInput.addEventListener("input", (e) => {
  textSpan.style.fontSize = `${e.target.value}px`;
});
