const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
const handleInput = (e) => {
  nameOutput.textContent = e.target.value === "" ? "Anonymous" : e.target.value;
};
nameInput.addEventListener("input", handleInput);
