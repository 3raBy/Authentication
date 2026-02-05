class User {
  constructor(firstName, lastName, email, password, role = "user") {
    // validations
    if (!validateName(firstName)) throw new Error("Invalid first name");
    if (!validateName(lastName)) throw new Error("Invalid last name");
    if (!validatePassword(password)) throw new Error("Invalid password");
    if (!email) throw new Error("Email is required");

    this.id = Date.now();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email.toLowerCase();
    this.password = password;
    this.role = role;
  }

  // getters
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
