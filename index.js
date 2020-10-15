const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of license options

const licenses = [
    "MIT",
    "GPLv3",
    "Creative Commons"
]

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage information: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter contribution guidelines: ",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter test instructions: ",
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
];

const dir = "./output";

// function to write README file
function writeToFile(fileName, data) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    return fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log("Your README could not be created. Please try again.")
        } else {
            console.log("Success!")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(response => {
            console.log(response);
            writeToFile(path.join(dir, "README.md"), generateMarkdown({ ...response }));
        })

}

// function call to initialize program
init();
