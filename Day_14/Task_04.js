// Override rhe greetig method in the Student class to include the student ID in the message. Log the override greeting message
// Define the Person class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
  // Define the Student class that extends Person
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age); // Call the parent class constructor
      this.studentId = studentId;
    }
  
    getStudentId() {
      return this.studentId;
    }
    greet() {
        console.log(`Hello, my ID is ${this.studentId}.`);
      }
  }
  
  // Create an instance of the Student class
  const student = new Student("John Doe", 20, "S001");
  
  // Log the student ID
  console.log(`Student ID: ${student.greet()}`);