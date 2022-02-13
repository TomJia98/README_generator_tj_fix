// Includes packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");
// Creates an array of questions for user input
const questions = [  {
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'projectDesc',
    message: 'Please provide a description of your project',
  },
  {
    type: 'input',
    name: 'projectInstall',
    message: 'Please provide installation instructions',
  },
   {
    type: 'input',
    name: 'projectUsage',
    message: 'Please describe how to use your project',
  },
  {
    type: 'list',
    message: 'Which license are you using?',
    name: 'projectLicense',
    choices: [ "N/A", "Apache 2.0 License", '"Boost Software License 1.0"', "BSD 3-Clause License", "Eclipse Public License 1.0", "GNU GPL v3", "The Hippocratic License 2.1",
"IBM Public License Version 1.0", "ISC License (ISC)", "The MIT License", "Mozilla Public License 2.0", "Public Domain Dedication and License (PDDL)", 
"The Artistic License 2.0", "The Unlicense", "The Do What the F**k You Want to Public License"],// add license choices here
// The selected license will be used to find the hyperlink and badge in the GenerateMarkdown
},
{
    type: 'input',
    name: 'projectContribute',
    message: 'Please describe your contribution guidelines',
  },
  {
    type: 'input',
    name: 'projectTest',
    message: 'Please describe your test instructions',
  },
  {
    type: 'input',
    name: 'projectQuestionsEmail',
    message: 'Please enter your preferred email address',
  },
  {
    type: 'input',
    name: 'projectQuestionsGithub',
    message: 'Please enter your Github username',
  },
  ];


//run this on startup to prompt the user the questions
function init() {
    inquirer.prompt(questions)//promps the questions

    .then((data) => fs.writeFile('README.md', markdown.generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('README generated! please check the file and fill in the licence')
  //generates the readme file with all the data filled in
    ))
}

// Function call to initialize app

init();
