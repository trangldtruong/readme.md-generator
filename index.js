// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown')
// TODO: Create an array of questions for user input
inquirer
.prompt([
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
        choices: ['MIT',  'Unlicensed'],
        message: 'What is the license of your project?'
    }
]);

// TODO: Create a function to write README file
.then((data) => {
    console.log(data)}
    function writeToFile(fileName, data) {
        const fileName = `${data.name.toLowerCase().split(' ').join('')}.json`;
})

// TODO: Create a function to initialize app
function init() {
fileName.writeToFile();


} catch (err) {
    console.log(err);
}

// Function call to initialize app
init();
