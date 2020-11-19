const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

var teamMembers = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/employee");
// const { rejects } = require("assert");
// const { resolve } = require("path");
// const { createPromptModule } = require("inquirer");

// function allTeamMmbers() {
//   managerDetails();
//   internDetails();
// }

function questions() {
  function managerDetails() {
    console.log("ndjwsndjsnfjkf");
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is the manager's name?",

          validate: function name(answer) {
            if (name === answer) {
              return false;
            }
            return "Please enter in a valid answer to the question.";
          },
        },
        {
          type: "input",
          name: "room",
          message: "What is the office number?",

          validate: function room(answer) {
            if (room === answer) {
              return false;
            }
            return "Please enter in a valid answer to the question.";
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is your e-mail?",

          validate: function email(answer) {
            if (email === answer) {
              return false;
            }
            return "Please enter in a valid answer to the question.";
          },
        },
      ])
      .then((answer) => {
        var manager = new Manager(
          answer.managerName,
          answer.managerId,
          answer.email,
          answer.officeNumber,
          teamMembers.push(manager)
        );
      });
    allTeamMmbers();
  }
  //   managerDetails();

  function internDetails() {
    console.log("njkenfjdnfj");
    inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
        validate: function name() {
          if (name === "") {
            return false;
          }
          return "Please enter in a valid answer to the question.";
        },
      },
      {
        type: "input",
        message: "What school are you currently attending?",
        name: "college",
        validate: function college() {
          if (college === "") {
            return false;
          }
          return "Please enter in a valid answer to the question.";
        },
      },
      {
        type: "input",
        message: "What is your e-mail?",
        name: "email",
        validate: function email() {
          if (email === "") {
            return false;
          }
          return "Please enter in a valid answer to the question.";
        },
      },
    ]);
  }
  allTeamMmbers();

  questions();
  function allTeamMmbers() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "What type of team-member would you like to add?",
          choices: ["engineer", "intern", "no-more"],
        },
      ])
      .then((user) => {
        switch (user.choice) {
          case "engineer":
            engineerDetails();
            break;
          case "intern":
            internDetails();
            break;
          default:
            teamBuild(); // Need to create this method.
            break;
        }
      });
    teamBuild();
  }
  managerDetails();

  function engineerDetails() {
    inquirer.prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
        validate: function name() {
          if (name === "") {
            return false;
          }
          return "Please enter in a valid answer to the question.";
        },
      },
      {
        type: "input",
        message: "What is your Github account name?",
        name: "github",
        validate: function github() {
          if (github === "") {
            return false;
          }
          return "Please enter in a valid answer to the question.";
        },
      },
      {
        type: "input",
        message: "What is your e-mail?",
        name: "email",
        validate: function email() {
          if (email === "") {
            return false;
          }
          return "Please enter in a valid answer to the question.";
        },
      },
    ]);
    allTeamMmbers();
  }
}
questions();

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
