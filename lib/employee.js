const inquirer = require("inquirer");



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
    const response =  inquirer.prompt([
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
  
    const realName = response.realName;
  
  }

};
//const employee1 = new Employee("Keegan");

//employee1.getName(); 

module.exports = Employee;