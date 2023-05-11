// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your title?",
        name: "title",
    },
    {
     type: "input",
     message: "Instructions to use the applications",
     name: "applicationInstructions",
    },
    {
        type: "input", 
        message: "Names of members involved in the project?",
        name: "credits",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Successfully created README'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.question(questions)
    .then(function (responsesArr) {
        writeToFile("README.md", generateMarkdown (responsesArr)) 
    })

};

// Function call to initialize app
init();
