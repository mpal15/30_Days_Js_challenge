//  Write a recursive function to calculate the factorial of a number. Log the result for a few test cases;


function factorial(n){

    if(n<0){
        throw new Error("negive number is not allowed");

    }
    if(n == 0 || n == 1){
        return 1;
    }
    return n* factorial(n-1);
}

const result = factorial(5);
console.log(result);