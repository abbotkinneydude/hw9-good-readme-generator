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
* [Test](#Test)
* [Questions](#Questions)
* [Licence](#Licence)
\n
## Installation\n${data.installation}
\n
## Usage\n${data.rules}
\n
## Contributions\n${data.contributions}
\n
## Test\n${data.test}
\n
## Questions
##### Git UserName: https://github.com/${data.username}  ![GitHub Follower]\n
##### Email: ${data.email}
\n
## Licence\n${data.licence}
`
};

module.exports = generateMarkdown;