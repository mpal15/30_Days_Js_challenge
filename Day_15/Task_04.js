//  Create a closure that captures a user's name and returns a function that greets the user by name

function myName(name){
    return function greeting(){
        return `hi ${name}, welcome to the coding world`;
    };
}
const greet = myName("john");

console.log(greet());