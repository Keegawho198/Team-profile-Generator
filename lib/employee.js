const inquirer = require("inquirer");
//const engineer = require("./engineer");
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);



class Employee {
  constructor(name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
  }

  getName() {
    console.log(`Name: ${this.name}`);
  }

  getId() {
    console.log(`ID: ${this.id}`);
  }

  getEmail() {
    console.log(`Email: ${this.email}`);
  }

  getRole() {
    return Employee;
  }

  start() {
    const response = await inquirer.prompt([
      {
        type: "input",
        message: "Write your name",
        name: "realName"
      },
      {
        type: "input",
        message: "Write your Email",
        name: "email"
      },
      {
        type: "list",
        message: "Chose employee type" ,
        name: "title",
        choices: ["Intern", "Manager", "Engineer"]
      }
    ]);
  
   // const realName = response.realName;

    const html = generateHTML(response);
    await writeFileAsync("index0.html", html);

    

  
  }

};

function generateHTML(response) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Developer Profile Generator</title>
  <style>

</style>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h3>${response.realName}</h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${response.title}</li>
    
    </ul>
  </div>
</div>
</body>
</html>`;
}
//const employee1 = new Employee("Keegan");

//employee1.getName(); 

module.exports = Employee;