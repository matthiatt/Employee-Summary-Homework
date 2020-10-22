const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/employee");
const { rejects } = require("assert");
const { resolve } = require("path");
const { createPromptModule } = require("inquirer");

function managerDetails() {
    inquirer.prompt(
        [{
            type: "input",
            message: "What is the manager's name?",
            name: "name",
            validate: function name() {
                if(name === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }
        },
        {
            type: "input",
            message: "What is the office number?",
            name: "room",
            validate: function room() {
                if(room === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }        
        },
        {
            type: "input",
            message: "What is your e-mail?",
            name: "email",
            validate: function email() {
                if(email === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }
         }]);
}
managerDetails();

function internDetails() {
    inquirer.prompt(
        [{
            type: "input",
            message: "What is your name?",
            name: "name",
            validate: function name() {
                if(name === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }
        },
        {
            type: "input",
            message: "What school are you currently attending?",
            name: "college",
            validate: function college() {
                if(college === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }        
        },
        {
            type: "input",
            message: "What is your e-mail?",
            name: "email",
            validate: function email() {
                if(email === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }
            }]);
internDetails();

function engineerDetails() {
    inquirer.prompt(
        [{
            type: "input",
            message: "What is the manager's name?",
            name: "name",
            validate: function name() {
                if(name === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }
        },
        {
            type: "input",
            message: "What is your Github account name?",
            name: "github",
            validate: function github() {
                if(github === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }        
        },
        {
            type: "input",
            message: "What is your e-mail?",
            name: "email",
            validate: function email() {
                if(email === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }
         }]);
}
engineerDetails();

function employeeDetails() {
    inquirer.prompt(
        [{
            type: "input",
            message: "What is your name?",
            name: "name",
            validate: function name() {
                if(name === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }
        },
        {
            type: "input",
            message: "What is your role here?",
            name: "role",
            validate: function role() {
                if(role === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }        
        },
        {
            type: "input",
            message: "What is your e-mail?",
            name: "email",
            validate: function email() {
                if(email === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }
        },
        {
            type: "input",
            message: "What is your student I.D number?",
            name: "id",
            validate: function id() {
                if(id === "") {return false;}
                return "Please enter in a valid answer to the question.";
            }
        }
         }]);
}
employeeDetails();

function writeFile(arr) {
    let html = render(arr);
    fs.writeFile("./teamplates/team.html");
    if(err) throw err;




//   .then(function(data) {
//       let q = data.name.toLowerCase().split(' ').join('') + ".json";
//       fs.writeFile(q, JSON.stringify(data, null, '\t'), function(err) {
//           if(err) {
//               return console.log(err);
//           }
//       });
//   });


// Step 2.) Call the 'render' function --------------------------------------//

// Step 3.) Create a return of a block HTML with divs for each employee -----//

// Step 4.) Create a file named, 'team.html' in the output folder and call the 'render' function there. Use the variable - outputPath. You need to create this, if it does not exist.
//-----------------------------------------------------------------------------























// Write code to use inquirer to gather information about the development team members, and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it does not.
    // HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.
    // HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work!