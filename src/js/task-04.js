let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const IncrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");
const handleDecrementButtonClick = () => {
  counterValue--;
  valueSpan.innerHTML = counterValue;
};
const handleIncrementButtonClick = () => {
  counterValue++;
  valueSpan.innerHTML = counterValue;
};

decrementButton.addEventListener("click", handleDecrementButtonClick);
IncrementButton.addEventListener("click", handleIncrementButtonClick);
