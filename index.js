// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { listenerCount } = require('process');

// TODO: Create an array of questions for user input
const questions = [

{
    type: 'input',
    name: 'title',
    message: "what is the title of your project"
},
{
    type:'input',
    name: 'description',
    message: "Enter the description of your project"
},
{
    type: 'input',
    name: 'installation',
    message: "What are the installation instructions?"
}, 
{
    type: 'input',
    name: 'usage_info',
    message:" Enter the usage info here"
},
{
    type: 'input',
    name: 'contribution_guidelines',
    message: "Enter your contribution guidelines"
},
{
    type: 'input',
    name: 'test_instructions',
    message: "Enter your test instructions here"
},

{ 
    type: 'list',
    name: 'license',
    message: 'What type of license would you like?',
    choices: ["MIT","Apache 2.0","BSD 3","none"]
}


// Add questions for github, email, and list of licenses
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    ).then((data) => {
        console.log(data)

        fs.writeFileSync("userREADME.md", generateMarkdown({...data}))

    })
}

// Function call to initialize app
init()

// inquirer.prompt(
//     [
//         {
//             type: 'input',
//             name: 'color',
//             message: "What's your favorite color?"
//         },
//         {
//             type: 'list',
//             name: 'weather',
//             message: "What is the weather like?",
//             choices: ['sunny', 'rainy', 'cloudy']
//         }
//     ]
// ).then(function(answers) {
//     console.log(answers.weather)
// })