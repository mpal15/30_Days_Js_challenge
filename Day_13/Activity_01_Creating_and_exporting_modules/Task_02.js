// Create a module that exports an objects representation a person with properties and methods.import and use this modules in another script

const person = {
    name:"mohit pal",
    age:23,
    location:"pune",

    introduce:()=>{
        return `Hello my name is ${this.name} amd i am ${this.age} years old`
    },
}

module.exports = person;