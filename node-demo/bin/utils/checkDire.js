// utils/checkDire.js
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

module.exports = function (dir, name) {
    let ifExists = fs.existsSync(dir)
    if (ifExists) {
        console.log(chalk.red(`The ${name} project already exists in  directory. Please try to use another projectName`))
    }
    process.exit(1)
}