const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

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
    "Apache license 2.0",
    "BSD 2-clause \"Simplified\" license",
    "GNU General Public License family",
    "ISC",
    "MIT",
]

const dir = "./output";

// function to write README file
function writeToFile(fileName, data) {
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    return fs.writeFile(fileName, data, function(err){
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

        writeToFile(path.join(dir, "README.md"), generateMarkdown({...response}));
    })

}

// function call to initialize program
init();
