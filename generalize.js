
function get_item(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}
function set_Item(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function setUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}
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

// function createUser(firstName, lastName, email, password, role = "user") {
//   return {
//     id: Date.now(),
//     firstName,
//     lastName,
//     email,
//     password,
//     role,
//   };
// }
