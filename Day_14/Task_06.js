//  Add a static property to a student class to keepp track of the number of students created,Increment this property in the constuctor and log the total number of student
class Student{
   static count =0;
    constructor(name){
        this.name = name;
        Student.count++;
        console.log(`total student is:${Student.count}`);
    }
   
}

const student1 = new Student("Alice");
const student2 = new Student("Bob");
const student3 = new Student("Charlie");
