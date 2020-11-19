const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.schoolName = school;
  }
  getRole() {
    return "intern";
  }
  //   getname() {
  //     return this.school;
  //   }
  //   getid() {
  //     return this.id;
  //   }
  //   getEmail() {
  //     return this.email;
  //   }
  //   getSchool() {
  //     return this.school;
  //   }
}
module.exports = Intern;
