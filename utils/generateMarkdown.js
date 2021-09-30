// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return`![${license}](https://img.shields.io/badge/license-${license.split(' ').join('_')}-brightgreen)`
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return`https://choosealicense.com/licenses/${license.split(' ').join('-').toLowerCase()}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {
  return` 
  ${renderLicenseBadge(license)}

  Copyright (c) ${new Date().getFullYear()} by ${name}. Licensed under the [${license}](${renderLicenseLink(license)})`
}
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ------------------------

  [GitHub Repo](https://github.com/${data.github}/${data.project})

  ## Description
  --------------
    
  ${data.description}
   
  ## Table of Content
  -------------------

  1.   [Description](#description)
  2.   [Installation](#installation)
  3.   [Usage](#usage)
  4.   [License](#license)
  5.   [Contributing](#contributing)
  6.   [Test](#test)
  7.   [Question](#questions)
  
  ## Installation
  ---------------

  ${data.install}

  ## Usage
  --------

  ${data.usage}

  ## License
  ---------- 
    
  ${renderLicenseSection(data.license, data.name)}
  
  ## Contributing
  ---------------
    
  Please refer to each project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

  1. **Fork** the repo on GitHub
  2. **Clone** the project to your own machine
  3. **Commit** changes to your own branch
  4. **Push** your work back up to your fork
  5. Submit a **Pull request** so that we can review your changes

  NOTE: Be sure to merge the latest from "upstream" before making a pull request!

  ## Test
  -------
  
  ${data.test}

  ## Questions

  ### ${data.name}
  *   [GitHub](https://github.com/${data.github})
  *   [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
