// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your GitHub repo name?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid Github repo.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid project title.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a brief description of your project!",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid description");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Describe the installations required, if any: ",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines for others to contribute",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide instructions for any tests needed.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['MIT License', 'Boost Software License 1.0', 'The Unlicense', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0'],
        name: 'license'
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your Email?",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid email.");
            }
            return true;
        }
    }
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Your awesome README.md file has been created!")
    });
}


// function to initialize app
async function init() {
    try {
        // prompt questions
        const answers = await inquirer.prompt(questions);
        console.log("your answers:", answers);
        const generateAnswers = generateMarkdown(answers);

        // write readme file to dist folder
        await writeFileAsync('./dist/README.md', generateAnswers);
        console.log('Answers successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }

}

// Function call to initialize app
init();
