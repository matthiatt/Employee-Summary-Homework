const Employee = require("./employee");
class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getofficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;
