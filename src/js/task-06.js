const validationInput = document.querySelector("#validation-input");
const length = validationInput.dataset.length;
validationInput.addEventListener("blur", () => {
  if (validationInput.value.length != length) {
    if (validationInput.classList.contains("valid")) {
      validationInput.classList.remove("valid");
    }
    if (!validationInput.classList.contains("invalid")) {
      validationInput.classList.add("invalid");
    }
  } else {
    if (validationInput.classList.contains("invalid")) {
      validationInput.classList.remove("invalid");
    }
    if (!validationInput.classList.contains("valid")) {
      validationInput.classList.add("valid");
    }
  }
});
