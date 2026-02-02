const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser || currentUser.role !== "admin") {
  window.location.href = "Login.html";
}

const addAdminForm = document.getElementById("addAdminForm");
const adminMessage = document.getElementById("adminMessage");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateName(name) {
  return /^[A-Za-z]{2,}$/.test(name);
}

function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
    password,
  );
}

addAdminForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!firstName || !lastName || !email || !password) {
    adminMessage.textContent = "All fields are required";
    adminMessage.style.color = "red";
    return;
  }

  if (!validateName(firstName) || !validateName(lastName)) {
    adminMessage.textContent =
      "Names must be at least 2 letters and contain only letters";
    adminMessage.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    adminMessage.textContent = "Invalid email format";
    adminMessage.style.color = "red";
    return;
  }

  if (!validatePassword(password)) {
    adminMessage.textContent =
      "Password must be at least 6 chars, include uppercase, lowercase, number and special char";
    adminMessage.style.color = "red";
    return;
  }

  const allUsers = get_item(box.Users) || [];

  const emailExists = allUsers.some(
    (u) => u.email.toLowerCase() === email.toLowerCase(),
  );

  if (emailExists) {
    adminMessage.textContent = "Email already exists";
    adminMessage.style.color = "red";
    return;
  }

  const newAdmin = createUser(firstName, lastName, email, password, "admin");
  allUsers.push(newAdmin);

  set_Item(box.Users, allUsers);

  adminMessage.textContent = "Admin added successfully!";
  adminMessage.style.color = "green";

  addAdminForm.reset();
});
