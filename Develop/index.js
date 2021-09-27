// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of your project?',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter the name of your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter the description!');
      return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: 'What did you build this project with? (Check all that apply)',
    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  },
  {
    type: 'input',
    name: 'install',
    message: 'What is the process to install your project?',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter the installation process for yout project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter the steps to use your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do you test your project?',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter the steps to test your project!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'License',
    message: "What is your project's license? (Choose from the provided list)",
    choices: ['Apache 2.0', 'GNU GPLv3', 'GNU GPLv2', 'ISC', 'MPL 2.0', 'MIT', 'Other']
  },
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  
}

// Function call to initialize app
init();
