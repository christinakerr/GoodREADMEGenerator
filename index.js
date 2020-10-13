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
    ]).then(response => {
        console.log(response);
        writeToFile("README.md", response)
    })

}

// function call to initialize program
init();
