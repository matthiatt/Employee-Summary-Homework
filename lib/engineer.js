const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, github, email, id) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  // getName() {
  //   return this.name;
  // }
  getGithub() {
    return this.github;
  }
  // getEmail() {
  //   return this.email;
  // }
  // getId() {
  //   return this.id;
  // }
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
