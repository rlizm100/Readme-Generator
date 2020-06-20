const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//prompt the user to answer questions about the project the readme is for
function promptUser() {[
    {type: "input",
     name: "title",
     message: "What is the project's title?"
    },
    {type: "input",
     name: "description",
     message: "Enter a description of the project."
    },
    {type: "input",
     name: "installation",
     message: "What are the steps required to install the project?"
    },
    {type: "input",
     name: "usage",
     message: "How do you use the project?"
    },
    {type: "input",
     name: "license",
     message: "Please enter any license information."
    }

]};

//generate the readme based on the user responses
function generateReadme(answers) {
return`
# Title
${answers.title}
# Description
${answers.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
# Installation
${answers.installation}
# Usage
${answers.usage}
# License
${answers.license}
# Contributing
[Contributor Covenant](https://www.contributor-covenant.org/)
# Tests
# Questions

`
}

//initializing the prompts and generate functions
async function init() {
    console.log("Please enter responses to populate a Readme File")
    try {

        const answers = await promptUser();

        const readMe = generateReadme(answers);

        await writeFileAsync("Readme.md", readMe);

        console.log("Readme successfully created");
    } catch(err){
        console.log(err);
    }

}

init();
