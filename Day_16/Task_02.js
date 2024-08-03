//  Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test case.

function Fibonacci(n){
    if(n ==1 || n ==2){
        return 1;
    }
    return  Fibonacci(n-1)+Fibonacci(n-2);
}

const fibonacciNumber = Fibonacci(3);
console.log(fibonacciNumber);