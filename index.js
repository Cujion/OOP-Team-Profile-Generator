const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const prompt = require('inquirer');
const fs = require('fs');
let team = [];


function managerQuestions() {
    prompt.prompt([
        {
                name: 'name',
                message: 'What is the managers name?',
        },
        {
            name: 'id',
            message: 'What is the managers id number?',
            validate: (answer) => {
                if (isNaN(answer)) {
                  return "please enter a number";
                }
                return true;
              },
        },
        {
            name: 'email',
            message: 'What is the managers email?',
        },
        {
            name: 'office',
            message: 'What is the managers office number?',
        },
    ]).then(answers => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        manager.special = `Office Number: ${manager.officeNumber}`;
        manager.icon = `"fas fa-glasses"`;
        team.push(manager);
        doNext();
    })
}

function engineerQuestions() {
    prompt.prompt([
        {
                name: 'name',
                message: 'What is the engineers name?',
        },
        {
            name: 'id',
            message: 'What is the engineer id number?',
            validate: (answer) => {
                if (isNaN(answer)) {
                  return "please enter a number";
                }
                return true;
              },
        },
        {
            name: 'email',
            message: 'What is the engineer email?',
        },
        {
            name: 'github',
            message: 'What is the engineers github?',
        },
    ]).then(answers => {
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        engineer.special = `GitHub: <a href="#github">${engineer.github}</a>`;
        engineer.icon = `"fas fa-mug-hot"`;
        team.push(engineer);
        doNext();
    })
}

function internQuestions() {
    prompt.prompt([
        {
                name: 'name',
                message: 'What is the interns name?',
        },
        {
            name: 'id',
            message: 'What is the intern id number?',
            validate: (answer) => {
                if (isNaN(answer)) {
                  return "please enter a number";
                }
                return true;
              },
        },
        {
            name: 'email',
            message: 'What is the intern email?',
        },
        {
            name: 'school',
            message: 'What is the interns school name?',
        },
    ]).then(answers => {
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        intern.special = `School: ${intern.school}`;
        intern.icon = `"fas fa-user-graduate"`;
        team.push(intern);
        doNext();
    })
}

function doNext() {
    prompt.prompt({
        name: 'next',
        message: 'what would you like to do next?',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Finish']
    }).then(answers => {
        if (answers.next == 'Add Engineer') {
            engineerQuestions();
        } else if (
            answers.next == 'Add Intern') {
                internQuestions();
            }
            else {
                buildTeam();
            }
    })
}

function buildTeam() {
    fs.writeFileSync('./dist/team.html', `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>MY TEAM</title>
    <!-- Minified version -->
    <style>
      @import "https://cdn.simplecss.org/simple.min.css";
  
      main {
        display: grid;
        grid-column: 1/-1;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 1rem;
        max-width: 1140px;
        margin: auto;
      }
  
      @media screen and (max-width: 1140px) {
        main {
          grid-template-columns: 1fr 1fr;
        }
      }
      @media screen and (max-width: 720px) {
        main {
          grid-template-columns: 1fr;
        }
      }
    </style>
</head>
<body>
<header>
<h1>My Team</h1>
</header>
<main>
    `)
    for(i = 0; i < team.length; i++) {
        fs.appendFileSync('./dist/team.html', `
        <article>
        <h2><i class=${team[i].icon}>  ${team[i].getRole()}</i></h2>
        <h2>${team[i].name}</h2>
          <ul>
            <li>ID: ${team[i].id}</li>
            <li>Email: <a href="mailto:${team[i].email}">${team[i].email}</a></li>
            <li>${team[i].special}</li>
          </ul>
        </article>
        `)
    }
    fs.appendFileSync('./dist/team.html', `
    </main>
    <footer>
    &copy; 2022-2023
  </footer>
    </body>
</html>
    `)
}

managerQuestions();