const Employee = require("./employee");

class Intern extends Employee {
  constructor(school){
    this.school = school;
  }

  getSchool(){
    console.log(`Intern School is: ${this.school}`);
  }

  getRole(){
    return Intern;
  }
}