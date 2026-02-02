const form = document.getElementById("loginForm");
const message = document.getElementById("message");

function createDefaultAdmin() {
  const allUsers = get_item(box.Users) || [];

  const existAdmin = allUsers.some((u) => u.role === "admin");

  if (!existAdmin) {
    const admin = createUser(
      "Eslam",
      "Araby",
      "eslamaraby@gmail.com",
      "eslam@123",
      "admin",
    );
    allUsers.push(admin);
    set_Item(box.Users, allUsers);
  }
}

createDefaultAdmin();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    message.textContent = "All fields are required";
    return;
  }

  const allUsers = get_item(box.Users) || [];

  const existUser = allUsers.find(
    (u) => u.email.toLowerCase() === email.toLowerCase(),
  );

  if (!existUser || existUser.password !== password) {
    message.textContent = "Invalid Email or Password!";
    return;
  }

  setUser(existUser);

  if (existUser.role === "admin") {
    message.textContent = "Admin login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "../../pages/adminPages/admin.html";
    }, 2000);
  } else {
    message.textContent = "User login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "../../pages/productPages/product.html";
    }, 2000);
  }
});
