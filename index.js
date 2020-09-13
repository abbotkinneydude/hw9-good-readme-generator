// Constants required for Application Execution
const fs = require('fs');
// const axios = require('axios');
const inquirer = require('inquirer');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown');

// The function below is running inquirer and prompting the user to specify the necessary information to populate the upcoming read me markdown.

// Note: Instead of using a CONST array for the questions, I am buddling the inquirer prompt inside the markdownQuestions() function so that, when I initialize, all the function initialization() has to do is to gather data from the markdownQuestions() function instead. The other option would have been to store the inquirer.prompt inside the initialization function, I went for efficiency instead.

function markdownQuestions() {
  return inquirer.prompt([
    {type: "input", name: "username", message: "Enter your GitHub username",
    validate: answer => { if ( !answer.length ) {return "Cannot accept an empty input field."} return true;} },
    {type: 'input', name: 'email', message: 'What is your email?', 
    validate: answer => { if ( !answer.length ) {return "Cannot accept an empty input field."} return true;} },
    {type: "input", name: "title", message: "Enter your project Title",
    validate: answer => { if ( !answer.length ) {return "Cannot accept an empty input field."} return true;} },
    {type: "input", name: "description", message: "Enter your Project Description",
    validate: answer => { if ( !answer.length ) {return "Cannot accept an empty input field."} return true;} },
    {type: "list", name: "licence", message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      filter: (val) =>{ switch(val) {
            case 'MIT': return [val, 'https://choosealicense.com/licenses/mit/'];
            case "Apache": return [val, 'https://choosealicense.com/licenses/apache-2.0/'];
            case 'GPL': return [val, 'https://choosealicense.com/licenses/gpl-3.0/'];
            default: return [val, '#license']; } },
    },
    {type: "input", name: "installation", message: "What command should be run to install dependencies?", default: "npm install",
    validate: answer => { if ( !answer.length ) {return "Cannot accept an empty input field."} return true;} },
    {type: "input", name: "test", message: "What command should be run to run tests?", default: "npm test",
    validate: answer => { if ( !answer.length ) {return "Cannot accept an empty input field."} return true;} },
    {type: "input", name: "rules", message: "What does the user need to know about using the repo?", default: "do not write to master, use branches.",
    validate: answer => { if ( !answer.length ) {return "Cannot accept an empty input field."} return true;} },
    {type: "input", name: "contributions", message: "What are the contributing guidelines for added code?",
    validate: answer => { if ( !answer.length ) {return "Cannot accept an empty input field."} return true;} },
  ])
};

// This axios function (not required for this homework) is there to submit the username to Github to assess its existence.
// function getUser(username) {
//   axios
//     .get(url)
//     .then( response => { console.log(response.data) } )
//     .catch( error => { console.log("User not found: " + response.data) } );
//       process.exit(1);
//     };

// writeToFile function to generate a README
function writeToFile(fileName, data) {
  const goodREADME= generateMarkdown(data);
  writeFileAsync(fileName, goodREADME);
}

// The Initialization function initializes, displays questions in Terminal then sends the info to the writeToFile() function.
function initialization() {
  console.log("Your README markdown is being created.")
  markdownQuestions()
      .then( data => { return writeToFile("README — " + data.title + ".md", data) } ) // Exports READ ME file w/ Project Title
      .then( () => console.log("Your README markdown has been successfully created.") ) // Console Message
      .catch( error => { console.log(error) } ) // Console Error Message if Erroneous Process
};

// This runs the initialization() which gathers data from markdownQuestions and sends the data to writeToFile() so that the Read Me can be generated.
initialization();