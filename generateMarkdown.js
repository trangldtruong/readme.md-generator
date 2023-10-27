// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = ""
  if (data.license ===)
  return badge = "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = ""
  if (data.license === "" )
  return licenseLink = "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ()

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.license}

`;
}

module.exports = generateMarkdown;
