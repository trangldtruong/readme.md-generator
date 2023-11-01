// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')
var questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your application?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide instructions on how to install your application'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information of your application'
    },
    {
        type: 'input',
        name: 'contribution',
        massge: 'Provide some guidelines on how to contribute to your application'
    },
    {
        type: 'input',
        name: 'tests',
        message: ''
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache', 'GNU', 'MIT', 'Boost', 'Mozilla', 'Unlicense'],
        message: 'What is the license of your project?'
    
    }, 
    {
        type: 'input'
        name: 'username'
        message: 'What is your username'
    }
]
// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Sucessfully created README.md'));
};

// TODO: Create a function to initialize app
function init() {
    var markDown = "";
    inquirer.prompt(questions)
    .then((data) => {
        markDown = generateMarkdown(data)
        writeToFile('readme.md', markDown)
    })
};

// Function call to initialize app
init() 
