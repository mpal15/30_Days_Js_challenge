//  Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameters.

function product( num1, num2=1){
     return num1*num2;
}

let result_1 = product(5);

let result_2 = product(4,8);

console.log("result_1 : "+result_1);
console.log("result_2 : "+result_2);