// Write a program to calculate a factorial of a number using do while loop

let fact =1;
let number = 25;
do {
    fact = fact*number;
    number--;
} while (number>0);

console.log(`factorial of number is ${fact}`);