// Files required
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/employee");
const render = require("./lib/htmlRenderer");

// Modules required
const inquirer = require("inquirer");
const jest = require("jest");
const path = require("path");
const fs = require("fs");

// Global Variables
let primaryKey = 0;
var teamMembers = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const { rejects } = require("assert");
// const { resolve } = require("path");
// const { createPromptModule } = require("inquirer");

// function allTeamMmbers() {
//   managerDetails();
//   internDetails();
// }
function quizContents() {
  questions();
}
quizContents();

function questions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What type of team-member would you like to add?",
        choices: ["Engineer", "Intern", "Managment", "Exit"],
      },
    ])
    .then((user) => {
      switch (user.choice) {
        case "Engineer":
          engineerDetails();
          break;
        case "Intern":
          internDetails();
          break;
        case "Managment":
          managerDetails();
          break;
        default:
          teamBuild(); // Need to create this method.
          break;
      }
    });
  // .then((engrRes) => {
  //   var nxtEngineer = new Engineer(
  //     engrRes.email,
  //     engrRes.name,
  //     engrRes.github
  //   );
  //   primaryKey++;
  //   teamMembers.push(nxtEngineer);
  // });
  // .then((internResponse) => {
  //   var nxtIntern = new Intern(
  //     primaryKey,
  //     internResponse.email,
  //     internResponse.name,
  //     internResponse.college
  //   );
  //   primaryKey++;
  //   teamMembers.push(nxtIntern);
  // });
  // .then((managmentResponse) => {
  //   var nxtManager = new Manager(
  //     managmentResponse.email,
  //     managmentResponse.name,
  //     managmentResponse.officeNumber
  //   );
  //   primaryKey++;
  //   teamMembers.push(nxtManager);
  // });
  teamBuild();

  function managerDetails() {
    console.log("ndjwsndjsnfjkf");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?",
        },
        {
          type: "input",
          name: "room",
          message: "What is the office number?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your e-mail?",
        },
      ])
      .then((managmentResponse) => {
        var nxtManager = new Manager(
          managmentResponse.email,
          managmentResponse.name,
          managmentResponse.officeNumber
        );
        primaryKey++;
        teamMembers.push(nxtManager);
        questions();
      });
    // .then((answer) => {
    //   var manager = new Manager(
    //     answer.managerName,
    //     answer.managerId,
    //     answer.email,
    //     answer.officeNumber,
    //     teamMembers.push(manager)
    //   );
    // });
    // allTeamMmbers();
  }
  //   managerDetails();

  function internDetails() {
    // console.log("njkenfjdnfj");
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },
        {
          type: "input",
          message: "What school are you currently attending?",
          name: "college",
        },
        {
          type: "input",
          message: "What is your e-mail?",
          name: "email",
        },
      ])
      .then((internResponse) => {
        var nxtIntern = new Intern(
          primaryKey,
          internResponse.email,
          internResponse.name,
          internResponse.college
        );
        primaryKey++;
        teamMembers.push(nxtIntern);
        questions();
      });
  }
  // allTeamMmbers();

  // questions();

  // managerDetails();

  function engineerDetails() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the manager's name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is your Github account name?",
          name: "github",
        },
        {
          type: "input",
          message: "What is your e-mail?",
          name: "email",
        },
      ])
      .then((engrRes) => {
        var nxtEngineer = new Engineer(
          engrRes.email,
          engrRes.name,
          engrRes.github
        );
        primaryKey++;
        teamMembers.push(nxtEngineer);
        questions();
      });
    // allTeamMmbers();
  }

  function addEmployee() {
    inquirer
      .prompt({
        message: "do you wish to add Employees and/or users?",
        type: "confirm",
        name: "createMembers",
      })
      .then(function ({ createMembers }) {
        if (createMembers) {
        }
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFile(outputPath, render(teamMembers), "utf8");
      })
      .catch((err) => {
        throw err;
      });
  }
  // addEmployee();
}
quizContents();

// function employeeDetails() {
//     inquirer.prompt(
//         [{
//             type: "input",
//             message: "What is your name?",
//             name: "name",
//             validate: function name() {
//                 if(name === "") {return false;}
//                 return "Please enter in a valid answer to the question.";
//             }
//         },
//         {
//             type: "input",
//             message: "What is your role here?",
//             name: "role",
//             validate: function role() {
//                 if(role === "") {return false;}
//                 return "Please enter in a valid answer to the question.";
//             }
//         },
//         {
//             type: "input",
//             message: "What is your e-mail?",
//             name: "email",
//             validate: function email() {
//                 if(email === "") {return false;}
//                 return "Please enter in a valid answer to the question.";
//             }
//         },
//         {
//             type: "input",
//             message: "What is your student I.D number?",
//             name: "id",
//             validate: function id() {
//                 if(id === "") {return false;}
//                 return "Please enter in a valid answer to the question.";
//             }
//         }
//         ]);
// }}
// employeeDetails();
