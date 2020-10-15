// function to generate markdown for README
function generateMarkdown(data) {
  let licenseCode;
  switch (data.license){
    case "MIT":
      licenseCode = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
      break;
    case "GPLv3":
      licenseCode = "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
      break;
    case "Creative Commons":
      licenseCode = "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)";
      break;
    default:
      licenseCode = "";
  };
  return `# ${data.title}

${licenseCode}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

This project is covered under the ${data.license} license.

## Contributing

${data.contribution}

## Tests

${data.testing}

## Questions

[GitHub](https://www.github.com/${data.gitHub})

Contact me: ${data.email}
`;
}

module.exports = generateMarkdown;