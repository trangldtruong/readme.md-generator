// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const {makeBadge, ValidationError} = require('badge-maker')
function renderLicenseBadge(license) {
  if (license === "") return ""
  const badgeFormat = {
    label: 'License',
    message: license,
    color: 'green',
  }
  return makeBadge(badgeFormat)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = data.license;
  if license === MIT 
  return "url"

  } else if (data.license === "Unlicense" )
  return licenseLink = "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license === "Unlicense" )

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents:
    1. Description
    2. Usage
    3. Contribution
    4. Installation Instruction 
    5. Testing
    6. License

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Installation Instruction
  ${data.installation}

  ## Testing
  ${data.tests}

  ## License
  ${renderLicenseBadge(data.license)}
  ${data.license}

`;
}

module.exports = generateMarkdown;
