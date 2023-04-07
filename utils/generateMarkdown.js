// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){

   
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`



  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

var color = "blue"

var animal = 'dog'

var favorites = "Bob's favorite color is " + color + " and his favorite animal is a " + animal + ".";

var tempLit = `Bob's fav color is a ${color} and his fav animal is a ${animal}.`

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents

## Installation

${data.installation}

## Usage Info

${data.usage_info}



## Questions

*** Use email and github here(if you have questions...)

`;
}

module.exports = generateMarkdown;
