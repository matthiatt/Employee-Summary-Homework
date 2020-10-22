const Employee = require("./employee");
class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);}
        getOfficeNumber() {return this.officeNumber;}
        getOfficeNumber() {return this.officeNumber;}
        getRole() {return "Management";}
}
module.exports = Manager;

    // getRole() {

    // }

    // getOfficeNumber() {

    // }