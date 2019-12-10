const Employee = require("./employee");

class Engineer extends Employee {
  constructor(gitHub) {
    this.gitHub = gitHub;
    super();
  }

  getGitHub(){
    console.log(`GitHub username is: ${this.gitHub}`);
  }

  getRole(){
    return Engineer;
  }
}

const engineer1 = new Engineer("keegawho"); //not working

engineer1.getGitHub();