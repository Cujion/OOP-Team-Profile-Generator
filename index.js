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
