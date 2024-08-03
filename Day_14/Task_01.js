// Define a class Person with properties name and age, and  a method to return a greeting message .Create an instance of the class ang log the greeting message

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return ` hi all i am ${this.name} and age is ${this.age}`;
    }
}

myPerson = new Person("mohit",23);
console.log(myPerson.greeting());