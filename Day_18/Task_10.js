// Write a function to solve the fibonacci squence using dynamic programming,log the fibnoacci number
function fibonacci(n) {
    // Handle base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;
  
    // Create an array to store Fibonacci numbers
    const fib = new Array(n + 1);
    fib[0] = 0; // F(0)
    fib[1] = 1; // F(1)
  
    // Fill the array using the dynamic programming approach
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    return fib[n];
  }
  
  // Example usage
  const n = 10; // Change this value to compute a different Fibonacci number
  const fibonacciNumber = fibonacci(n);
  console.log(`Fibonacci number F(${n}) is: ${fibonacciNumber}`); // Output: Fibonacci number F(10) is: 55