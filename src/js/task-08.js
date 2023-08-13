const form = document.querySelector("form.login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Toate campurile trebuie completate!");
  }

  const obj = { email: email.value, password: password.value };
  console.log(`Email: ${email.value}; Password:${password.value};`);
  event.currentTarget.reset();
}
