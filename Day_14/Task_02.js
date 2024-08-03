// Add a method to person to the Person class that updates the age property ang log the updated age
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return ` hi all i am ${this.name} and age is ${this.age}`;
    }
    updatedAge(age){
        this.age = age;
    }
    gettingAge(){
        return this.age;
    }
}

myPerson = new Person("mohit",23);
console.log(myPerson.greeting());
myPerson.updatedAge(18);
console.log(myPerson.gettingAge());
