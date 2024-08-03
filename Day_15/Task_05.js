//  write a loop that create an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const functionsArray = [];

// Create an array of functions using a loop
for (let i = 0; i < 5; i++) {
    functionsArray.push(function() {
        console.log(`Function index: ${i}`);
    });
}

// Example usage: Call each function in the array
functionsArray.forEach(func => func());