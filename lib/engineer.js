const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, 'Engineer', email);
    this.gitHub = gitHub;
  }

  getGitHub(){
    console.log(`GitHub username is: ${this.gitHub}`);
    return this.gitHub;
  }

  getRole(){
    return Engineer;
  }
}

const engineer1 = new Engineer("keegawho"); //not working

engineer1.getGitHub();