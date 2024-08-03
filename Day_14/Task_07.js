// Add a getter method to the Person class to return the full name .Create an instance and log the full name using the getter
class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getter(){
        return `my firstname is ${this.firstname} and lastname :${this.lastname}`;
    }
}
myPerson = new Person("mohit","pal");

console.log(myPerson.getter());