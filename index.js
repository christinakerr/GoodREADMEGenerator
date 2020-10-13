const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    "Enter project title: ",
    "Enter description: ",
    "Enter installation instructions: ",
    "Enter usage information: ",
    "Enter contribution guidelines: ",
    "Enter test instructions: "
];

// array of license options

const licenses = [
    "Academic Free License v3.0",
    "Apache license 2.0",
    "Artistic license 2.0",
    "Boost Software License 1.0",
    "BSD 2-clause \"Simplified\" license",
    "Creative Commons license family",
    "Do What The F*ck You Want To Public License",
    "Educational Community License v2.0",
    "Eclipse Public License 1.0",
    "European Union Public License 1.1",
    "GNU General Public License family",
    "ISC",
    "LaTeX Project Public License v1.3c",
    "Microsoft Public License",
    "MIT",
    "Mozilla Public License 2.0",
    "Open Software License 3.0",
    "PostgreSQL License",
    "SIL Open Font License 1.1",
    "University of Illinois/NCSA Open Source License",
    "The Unlicense",
    "zLib License"
]

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), function(err){
        if (err){
            console.log("Your README could not be created. Please try again.")
        } else {
            console.log("Success!")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "installation"
        },
        {
            type: "input",
            message: questions[3],
            name: "usage"
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution"
        },
        {
            type: "input",
            message: questions[5],
            name: "testing"
        },
        {
            type: "list",
            message: "Select a license: ",
            name: "license",
            choices: licenses
        },
        {
            type: "input",
            message: "GitHub username: ",
            name: "gitHub"
        },
        {
            type: "input",
            message: "Email address: ",
            name: "email"
        }
    ]).then(response => {
        console.log(response);
        writeToFile("README.md", response)
    })

}

// function call to initialize program
init();
