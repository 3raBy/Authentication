const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailRaw = document.getElementById("email")?.value;
  const passwordRaw = document.getElementById("password")?.value;

  const emailInput =
    typeof emailRaw === "string" ? emailRaw.trim().toLowerCase() : "";
  const passwordInput =
    typeof passwordRaw === "string" ? passwordRaw.trim() : "";

  if (!emailInput || !passwordInput) {
    message.textContent = "All fields are required";
    message.style.color = "red";
    return;
  }

  const allUsers = get_item("Users") || [];

  const existUser = allUsers.find(
    (u) => u && u.email && u.email.toLowerCase() === emailInput,
  );

  if (
    !existUser ||
    !existUser.password ||
    existUser.password.trim() !== passwordInput
  ) {
    message.textContent = "Invalid Email or Password!";
    message.style.color = "red";
    return;
  }

  setUser(existUser);

  if (existUser.role === "admin") {
    message.textContent = "Admin login successful! Redirecting...";
    message.style.color = "green";
    setTimeout(() => {
      window.location.href = "../../pages/adminPages/admin.html";
    }, 2000);
  } else {
    message.textContent = "User login successful! Redirecting...";
    message.style.color = "green";
    setTimeout(() => {
      window.location.href = "../../pages/productPages/product.html";
    }, 2000);
  }
});
