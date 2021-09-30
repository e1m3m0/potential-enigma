// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return`
  ![${license}](https://img.shields.io/badge/license-${license}-brightgreen)
  `
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseList = [
    {
      name: "Apache 2.0",
      link: "apache-2.0",      
    },
    {
      name: "GNU GPLv3",
      link: "gpl-3.0",
    },
    {
      name: "ISC",
      link: "isc",      
    },
    {
      name: "MPL 2.0",
      link: "mpl-2.0",      
    },
    {
      name: "MIT",
      link: "mit",      
    },
  ];
  if (license !== "not licensed"){
  const input =  licenseList.filter(selected => licenseList.name === license);
  return`
  https://choosealicense.com/licenses/${input.link}
  `
  }
  return`https://choosealicense.com/licenses/`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return` 
  ${renderLicenseBadge(license)}

  Copyright (c) ${new Date().getFullYear()} by ${input.name}. Licensed under the ![${licence}](${renderLicenseLink(license)})`
}
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { license, languages, ...input } = data;
  return `# [${input.title}](https://github.com/${input.github}/${input.project})

  ## Description
  --------------
    
    ${input.description}
   
  ## Table of Content
  -------------------

    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Test](#test)
    * [Question](#questions)
  
  ## Installation
  ---------------

    ${input.installation}

  ## Usage
  --------

    ${input.usage}

  ## License
  ---------- 
    
    ${renderLicenseSection(license)}
  
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
  
  ${input.test}

  ## Questions

    Reach me at:
      ### ${input.name}
      
      * [GitHub](https://github/${input.github})
      * [Email](mailto:${input.email})
`;
}

module.exports = generateMarkdown;
