// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'  
}
  else if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if ( license === 'GPL 3.0'){ 
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
  }
  else if ( license === 'BSD 3'){
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data,) {
  let licenseBadge = renderLicenseBadge(data.license)
  return `# ${data.title}

 ## Table of Contents 
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Test](#test)
* [Contact](#contact)

## Description
${data.description}

## License 
${licenseBadge}


## Installation 
\`\`\`
${data.installation}
\`\`\`
## Test 
To run test, run the follwing command:
\`\`\`
${data.test}
\`\`\`
## contact
email ${data.email}
github ${data.github}

`;
}

module.exports = generateMarkdown;
