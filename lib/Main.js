const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const util = require('util');
const ejs = require('ejs');

const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Main {
    constructor() {
        this._teamArray = [];

    }

    

    run() {
        console.log('something');
        const { teamSize } = await inquirer.prompt([{
			type: 'input',
			name: 'teamSize',
			message: 'Please input your team size',
			default: 2,
		}]);
    }
}

module.exports = Main;


