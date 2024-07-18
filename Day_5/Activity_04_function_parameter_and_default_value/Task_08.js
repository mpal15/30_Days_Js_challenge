// Write a function take persone name , age and return the greeting message , take default value of age


function greeting(name,age = 34){
    return `hi ${name} and your age is ${age}`;

}
let result = greeting("mohit",34);
console.log(result);