const box = {
  Users: "users",
  CurrentUser: "currentUser",
};
(function createDefaultAdmin() {
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
})();
