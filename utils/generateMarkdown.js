function generateMarkdown(data) {
  return `
# ${data.title}
![Project license](https://img.shields.io/badge/license-${data.licence}-brightgreen) 
\n
## Project Description
${data.description}
\n
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Test Guidelines](#Test)
* [Questions](#Questions)
* [Licence](#Licence)
\n
## Installation\n${data.installation}
\n
## Usage\n${data.rules}
\n
## Licence\n${data.licence}
\n
## Contribution Guidelines\n${data.contributions}
\n
## Test Guidelines\n${data.test}
\n
## Questions
##### Git UserName: https://github.com/${data.username}  ![GitHub Follower]\n
##### Email: ${data.email}
`
};

module.exports = generateMarkdown;