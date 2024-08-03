//  Write a function that returns another function,where the inner function accesses a variable from the outer function scope.call the inner function and log the result

function outerfunction(){
   let name = "hi all ,Welcome to the coding world";
   return function innerfunction(){
        console.log(name);
    }
}
const result = outerfunction();
result();