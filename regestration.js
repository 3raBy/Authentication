const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

function validateName(name) {
  return /^[A-Za-z]{2,}$/.test(name);
}

function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
    password,
  );
}
function isEmailExists(email, users) {
  return users.some((user) => user.email.toLowerCase() === email.toLowerCase());
}

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

  if (!validateName(firstName)) {
    firstNameError.textContent =
      "First name must be at least 2 letters and contain only letters.";
    return;
  } else {
    firstNameError.textContent = "";
  }

  if (!validateName(lastName)) {
    lastNameError.textContent =
      "last name must be at least 2 letters and contain only letters.";
    return;
  } else {
    lastNameError.textContent = "";
  }

  if (!validatePassword(password)) {
    passwordError.textContent =
      "Password must be at least 6 characters, include Ar+@#ear+2022.";
    return;
  } else {
    passwordError.textContent = "";
  }
  if (password !== repeatPassword) {
    repeatPasswordError.textContent = "Passwords do not match!";
    return;
  } else {
    repeatPasswordError.textContent = "";
  }

  const users = get_item(box.Users);

  if (isEmailExists(email, users)) {
    emailError.textContent = "Sorry, this email already exists!";
    return;
  }

  const newUser = createUser(firstName, lastName, email, password, "user");

  users.push(newUser);
  set_Item(box.Users, users);
  setUser(newUser);

  message.innerHTML =
    '<div class="alert alert-success">Registration successful!</div>';
  setTimeout(() => {
    window.location.href = "Login.html";
  }, 2000);
  form.reset();
});
