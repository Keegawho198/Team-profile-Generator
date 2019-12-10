class Employee {
  constructor(name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
  }

  getName(){
    console.log(`Name: ${this.name}`);
  }

  getId(){
    console.log(`ID: ${this.id}`);
  }

  getEmail(){
    console.log(`Email: ${this.email}`);
  }

  getRole(){
    return Employee;
  }

}
const employee1 = new Employee("Keegan");

employee1.getName();
