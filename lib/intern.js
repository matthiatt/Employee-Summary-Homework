const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, school, email, id) {
    super(name, email, id);
    this.schoolName = school;
  }
  getRole() {
    return "intern";
  }
  getName() {
    return this.name;
  }
  getSchool() {
    return this.school;
  }
  getEmail() {
    return this.email;
  }
  getId() {
    return this.id;
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
