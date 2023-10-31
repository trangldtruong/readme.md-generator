// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  if (data.license === "Unlicense")
  return badge = "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = data.license;
  if () {

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
  ${data.license}

`;
}

module.exports = generateMarkdown;
