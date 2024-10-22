#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const commander = require('commander');
const inquirer = require('inquirer');
const { exec } = require('child_process');
const { version } = require("../package.json");
const checkDire = require('./utils/checkDire');
const { promptTypeList } = require('./config')
//version 版本号
commander.version(version, '-v,--version')
    .command('init <projectName>')
    .alias('i')
    .description("输入项目名称，初始化项目模版")
    .action(async (projectName, cmd) => {
        await checkDire(path.join(process.cwd(), projectName), projectName)
        inquirer.prompt(promptTypeList).then(result => {
            const { url, gitName, val } = result.type;
            console.log("您选择的模版类型信息如下：" + val);
            console.log('项目初始化拷贝获取中...');
            if (!url) {
                console.log(chalk.red(`${val} 该类型暂不支持...`));
                process.exit(1);
            }
            exec('git clone ' + url, function (error, stdout, stderr) {
                if (error !== null) {
                    console.log(chalk.red(`clone failed,${error}`))
                    return;
                }
                fs.rename(gitName, projectName, (err) => {
                    if (err) {
                        exec('rm -rf ' + gitName, function (err, out) { })
                        console.log(chalk.red(`the ${projectName} project template already exist`))
                    } else {
                        console.log(chalk.green(`the ${projectName} project template successful created`))
                    }
                })
            })
        })
    })
commander.parse(process.argv)
