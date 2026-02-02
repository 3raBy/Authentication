const box = {
  Users: "users",
  CurrentUser: "currentUser",
};
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

function createUser(firstName, lastName, email, password, role = "user") {
  return {
    id: Date.now(), 
    firstName,
    lastName,
    email,
    password,
    role, 
  };
}
