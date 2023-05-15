// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`
if (!license === "none") {
  return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
} else {
  return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if (!license === "none") {
  //   return `![License](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  // } else {
  //   return '';
  // }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//description, installation, usage, contributing, tests

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Template String
  //console.log ("generateMarkDown", data) //consoling the answers
  return `# ${data.title} 
  ## Description 
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ${renderLicenseBadge(data.license)}
`;
};

function tableOfContents (data) {
  return `# Table of Contents
  `
}
tableOfContents()



module.exports = generateMarkdown;
