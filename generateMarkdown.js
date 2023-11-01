var licenseDescription = {
  Apache: "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  GNU: "Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.",
  MIT: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  Boost:"A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
  Mozilla: "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work."
  
}
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
  if (license === "Apache") {
    return "https://choosealicense.com/licenses/apache-2.0/"
  } else if (license === "GNU" ) {
    return "https://choosealicense.com/licenses/agpl-3.0/"
  } else if (license === "MIT") {
    return "https://choosealicense.com/licenses/mit/"
  } else if (license === "Boost") {
    return "https://choosealicense.com/licenses/bsl-1.0/"
  } else if (license === "Mozilla") {
    return "https://choosealicense.com/licenses/mpl-2.0/"
  } else if (license === "Unlicense") {
    return ""
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license === "Apache") {
    return licenseDescription.Apache
  } else if (license === "GNU" ) {
    return licenseDescription.GNU
  } else if (license === "MIT") {
    return licenseDescription.MIT
  } else if (license === "Boost") {
    return licenseDescription.Boost
  } else if (license === "Mozilla") {
    return licenseDescription.Mozilla
  } else if (license === "Unlicense") {
    return ""
  }

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
  [link to github profile](www.github.com/${data.username})

  ## Installation Instruction
  ${data.installation}

  ## Testing
  ${data.tests}

  ## License
  ${renderLicenseBadge(data.license)}
  ${data.license}
  [License link can be found here](${renderLicenseLink(data.license)})
  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
