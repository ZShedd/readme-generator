// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function generateReadMe(answers) {
    return `# ${answers.title}
    ${generateLicenseBadge(answers.license)}
    ## Description
        
    ${answers.description}
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Questions](#questions)
    * [License](#license)
    ## Installation
    In order to run the applicaton, run this command in the integrated terminal:
        
        ${answers.installation}
    ## Usage
    ${answers.usage}
    ![alt text](${answers.screenShot})
    ## Contributing
    ${answers.contributing}
    ## Questions
    GitHub Url: https://github.com/${answers.gitHub}
    Please Contact me via email only.\n
    Email Address: ${answers.email}
    ## License
    NOTICE:
    This project is covered under an ${answers.license} License. Please refer to license section to review permissions.
    ${generateLicenseLink(answers.license)}
    `
    };
    
function generateLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
};

function generateLicenseLink(license) {
    if (license!== 'None') {
        return `\n* [License](#license)\n`;
    };
    return '';
}

function init() {
    inquirer.prompt(questions).then(answers => {
        console.log('Creating brand new README file...');
        fs.writeFile("README.md", generateReadMe(answers), (err) => {
            err ? console.log(err) : console.log('Complete!');
        })
    });
};

// Function call to initialize app
init();
