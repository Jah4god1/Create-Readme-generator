// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let badgeURL = `https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>`

function renderLicenseBadge(license) {
  if(license !== "none"){

   
  return `![GitHub license](https://img.shields.io/badge/license-${license}-brightgreen.png)`



  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage Info](#usage-info)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instructions](#test-instructions)
* [Questions](#questions)

## Installation

${data.installation}

## Usage Info

${data.usage_info}

## Contribution Guidelines

${data.contribution_guidelines}

## Test Instructions

${data.test_instructions}

## Questions

If you have any questions you can email us at : ${data.Email_address}

You can also find us on Github at: ${data.Github}


`;
}

module.exports = generateMarkdown;
