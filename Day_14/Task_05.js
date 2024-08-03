// Add a static method to the Person class that return a generic message .call this static method without creating an instance of the clas and log the message

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static getgenericMessage(){
        return "Hello This is a generic message fron the Person class."
    }
}

const message = Person.getgenericMessage();
console.log(message);