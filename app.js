// Files required
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
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

function questions() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What type of team-member would you like to add?",
        choices: ["Engineer", "Intern", "Manager", "Exit"],
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
        case "Manager":
          managerDetails();
          break;
        default:
          teamBuild();
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
          message: "What is your name?",
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
          managmentResponse.name,
          primaryKey,
          managmentResponse.email,
          managmentResponse.room
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
          message: "What is your manager's name?",
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
          internResponse.name,
          internResponse.college,
          internResponse.email,
          primaryKey++
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
          message: "What is your name?",
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
          engrRes.name,
          engrRes.github,
          engrRes.email,
          primaryKey++
        );
        primaryKey++;
        teamMembers.push(nxtEngineer);
        questions();
      });

    // allTeamMmbers();
  }

  function teamBuild() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    console.log(teamMembers);
    fs.writeFileSync(outputPath, render(teamMembers), "utf8");
    console.log(teamMembers);
  }

  // function teamBuild() {
  //   inquirer
  //     .prompt({
  //       message: "do you wish to add Employees and/or users?",
  //       type: "confirm",
  //       name: "createMembers",
  //     })
  //     .then(function ({ createMembers }) {
  //       if (createMembers) {
  //       } else if (!fs.existsSync(OUTPUT_DIR)) {
  //         fs.mkdirSync(OUTPUT_DIR);
  //       }
  //       fs.writeFile(outputPath, render(teamMembers), "utf8");
  //     })
  // .catch((err) => {
  //   throw err;
  // });
  // }
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
