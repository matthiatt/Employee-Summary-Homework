const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getgithub() {
    return this.github;
  }
}
module.exports = Engineer;

//class Engineer {
//constructor(name, id, email, githubUsername) {
// this.name = name;
// this.id = id;
// this.email = email;
//this.githubUsername = githubUsername;

// getRole() {

// }

// getGithub() {
//     return this.github;
// }
