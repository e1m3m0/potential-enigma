// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
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
    name: 'github',
    message: 'What is your github?',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter the name of your github!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'project',
    message: 'What is the name of your repository?',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log("Please enter the name of your project's repository!");
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
  // {
  //   type: 'checkbox',
  //   name: 'languages',
  //   message: 'What did you build this project with? (Check all that apply)',
  //   choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
  // },
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
    name: 'license',
    message: "What is your project's license? (Choose from the provided list)",
    choices: ['Apache 2.0', 'GNU GPLv3', 'ISC', 'MPL 2.0', 'MIT', 'not licensed']
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your contact email?',
    validate: projectInput => {
      if (projectInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  },
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(data => {
  console.log(data);
  return generateMarkdown(data);
})
.then(markdown => {
  return writeToFile('./dist/README.md', markdown);
})
.then(writeToFileResponse => {
  console.log(writeToFileResponse);
})
.catch(err => {
  console.log(err);
});
