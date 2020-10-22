class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;}
        getRole() { return "Employee";}
        getName() {return this.name;}
        getId()  {return this.id;}
        getEmail() {return this.email;}
    }

module.exports = Employee;

// var ob = new Employee("Matt", 1, "mhiatt62@gmail.com");
// var ob2 = new Employee("Sean", 2, "lkhjk.edu");
// console.log(ob);
// console.log(ob, ob2);
// ob.getName();

    // getName() {
    //     return this.name;
    // }
    
    // getId() {
    //     return this.id;
    // }

    // getEmail() {
    //     return this.email;
    // }

    // getRole() {
    
    // }