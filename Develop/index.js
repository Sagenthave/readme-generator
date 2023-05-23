// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//import inquirer from 'inquirer';
const fs = require('fs');
// import fs from 'fs';
const generateMarkdown = require('./utils/generateMarkdown')
// import generateMarkdown from "./utils/generateMarkdown"
//import generateMarkdown from "./utils/generateMarkdown.js";

//description, installation, usage, contributing, tests
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your title?",
        name: "title",
    },
    {
     type: "input",
     message: "Describe the functionality of your application.",
     name: "description",
    },
    {
        type: "input",
        message: "How do you install the application?",
        name: "installation",
    },
    {
        name: "input", 
        message: "What is this application used for?",
        name: "usage",
    },
    {
        type: "input", 
        message: "What did you contribute to the project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What tests need to be run?",
        name: "tests"
    },
    {
        type: "checkbox",
        message: "Which liscense would you like?",
        name: "license",
        choices: ["MIT", "Apache", "none"]
    },
    {
        type: "input",
        message: 'Enter your github username',
        name: "questions"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log ("write to file", data) //console logging what the function is receiving
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Successfully created README'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (responsesArr) {
        writeToFile("README.md", generateMarkdown(responsesArr)) 
    })

};

// Function call to initialize app
init();
