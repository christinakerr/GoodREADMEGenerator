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

// function to write README file
function writeToFile(fileName, data) {
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
    ]).then(response => {
        console.log(response);
    })

}

// function call to initialize program
init();
