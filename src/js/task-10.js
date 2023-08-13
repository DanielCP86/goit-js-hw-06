function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector("#controls input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("div#boxes");
createButton.addEventListener("click", handleCreateButtonClick);
function handleCreateButtonClick() {
  for (let i = 0; i < numberInput.value; i++) {
    const divItem = document.createElement("div");
    divItem.classList.add("child");
    const backColor = getRandomHexColor();
    divItem.style.backgroundColor = backColor;
    const childItems = document.querySelectorAll("div.child").length;
    if (childItems === 0) {
      divItem.style.width = "30px";
      divItem.style.height = "30px";
    } else {
      const prevItem = document.querySelectorAll("div.child")[childItems - 1];
      divItem.style.width = `${
        Number(prevItem.style.width.slice(0, -2)) + 10
      }px`;
      divItem.style.height = `${
        Number(prevItem.style.height.slice(0, -2)) + 10
      }px`;
    }
    boxes.append(divItem);
  }
}
destroyButton.addEventListener("click", handleDestroyButtonClick);
function handleDestroyButtonClick() {
  boxes.innerHTML = "";
}
