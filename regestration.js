const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeatPassword").value;

  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const repeatPasswordError = document.getElementById("repeatPasswordError");

  // === validations ===
  if (!validateName(firstName)) {
    firstNameError.textContent =
      "First name must be at least 2 letters and contain only letters.";
    return;
  } else firstNameError.textContent = "";

  if (!validateName(lastName)) {
    lastNameError.textContent =
      "Last name must be at least 2 letters and contain only letters.";
    return;
  } else lastNameError.textContent = "";

  if (!validatePassword(password)) {
    passwordError.textContent =
      "Password must be at least 6 chars, include uppercase, lowercase, number, special char.";
    return;
  } else passwordError.textContent = "";

  if (password !== repeatPassword) {
    repeatPasswordError.textContent = "Passwords do not match!";
    return;
  } else repeatPasswordError.textContent = "";

  const users = get_item("Users");

  if (isEmailExists(email, users)) {
    emailError.textContent = "Sorry, this email already exists!";
    return;
  } else emailError.textContent = "";

  // === create user with Class ===
  let newUser;
  try {
    newUser = new User(firstName, lastName, email, password, "user");
  } catch (err) {
    message.textContent = err.message;
    message.style.color = "red";
    return;
  }

  users.push(newUser);
  set_Item("Users", users);
  setUser(newUser);

  message.innerHTML =
    '<div class="alert alert-success">Registration successful!</div>';

  setTimeout(() => {
    window.location.href = "Login.html";
  }, 2000);

  form.reset();
});
