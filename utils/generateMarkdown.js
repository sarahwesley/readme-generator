// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseType = data.license;
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'Apache 2.0') {
    yourLicense = `![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  } else {
    data.license = "N/A"
  }
  return yourLicense;
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseLink = data.license;
  let yourLicense = ''
  if(licenseLink === 'MIT') {
    yourLicense = `(https://opensource.org/licenses/MIT)`
  } else if (licenseLink === 'GPLv3') {
    yourLicense = `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseLink === 'Apache 2.0') {
    yourLicense = `(https://opensource.org/licenses/Apache-2.0)`
  } else {
    data.license = "N/A"
  }
  return yourLicense;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data)} 
${renderLicenseLink(data)}


## Project Description
${data.description}

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data)}
${renderLicenseLink(data)}

This application is covered by the ${data.license} license. 

## Contributions
${data.contributing}

## Tests
${data.tests}

## Questions?
Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
✉️Email me with any questions: ${data.email}<br /><br />
`;
}

module.exports = generateMarkdown;
