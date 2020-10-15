// function to generate markdown for README
function generateMarkdown(data) {
  switch (data.license){
    case "MIT":
      const licenseCode = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
      break;
    case "GPLv3":
      const licenseCode = "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
      break;
    case "Creative Commons":
      const licenseCode = "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)";
      break;
    default:
      const licenseCode = "";
  };
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
