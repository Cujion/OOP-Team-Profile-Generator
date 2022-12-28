const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const prompt =require('inquirer').prompt();
const fs = require('fs');
let team = [];


function managerQuestions() {
    return prompt([
        {
                name: 'name',
                message: 'What is the managers name?',
        },
        {
            name: 'id',
            message: 'What is the managers id number?',
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
        team.push(manager);
        doNext();
    })
}

function engineerQuestions() {
    return prompt([
        {
                name: 'name',
                message: 'What is the engineers name?',
        },
        {
            name: 'id',
            message: 'What is the engineer id number?',
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
        team.push(engineer);
        doNext();
    })
}

function internQuestions() {
    return prompt([
        {
                name: 'name',
                message: 'What is the interns name?',
        },
        {
            name: 'id',
            message: 'What is the intern id number?',
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
        team.push(intern);
        doNext();
    })
}

function doNext() {
    return prompt({
        name: 'next',
        message: 'what would you like to do next?',
        type: 'list',
        choices: ['add Engineer', 'add Intern', 'Finish']
    }).then(answers => {
        if (answers.next == 'add Engineer') {
            engineerQuestions();
        } else if (
            answers.next == 'add Intern') {
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
</head>
<body>
    `)
    for(i = 0; i < team.length; i++) {
        fs.appendFileSync('./dist/team.html', `
        <header>
        <h1>My Team</h1>
      </header>
      <main>
        <article>
        <h2><i class="fas fa-mug-hot">  Manager</i></h2>
        <h2>${Manager.name}</h2>
          <ul>
            <li>ID: ${Manager.id}</li>
            <li>Email: ${Manager.email}</li>
            <li>Office Number: ${Manager.office}</li>
          </ul>
        </article>
        <article>
        <h2>${Engineer.name}</h2>
          <h2><i class="fas fa-glasses">  Engineer</i></h2>
          <ul>
            <li>ID: ${Engineer.id}</li>
            <li>Email: ${Engineer.email}</li>
            <li>GitHub: <a href="#github">${Engineer.github}</a></li>
          </ul>
        </article>
        <article>
        <h2>${Intern.name}</h2>
        <h2><i class="fas fa-glasses">  Intern</i></h2>
          <ul>
            <li>ID: ${Intern.id}</li>
            <li>Email: ${Intern.email}</li>
            <li>School: ${Intern.school}</li>
          </ul>
        </article>
      </main>
      <footer>
        &copy; 2022-2023
      </footer>
        `)
    }
    fs.appendFileSync('./dist/team.html', `
    </body>
</html>
    `)
}

managerQuestions();