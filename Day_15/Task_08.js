//  create a memoized version of a function that calculates the factorial of  a number;


function memoize (fn){
    const cache = {};

    return function (...args){
        const key = JSON.stringify(args);

        if(cache[key]){
            console.log(`Fetching from cache for argument: ${args}`);
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;

        console.log(`Calculating result for argument:${args}`);
        return result;
    }
}

// Example function to memoize
function factorial(num) {
    if(num == 0 || num == 1){
        return 1;
    }
    return num * factorial(num-1);
}

// Create a memoized version of the add function
const memoizedfact = memoize(factorial);

// Example usage
console.log(memoizedfact(3)); // Calculating result for arguments: 2,3
console.log(memoizedfact(2)); // Fetching from cache for arguments: 2,3
console.log(memoizedfact(10)); // Calculating result for arguments: 5,10
console.log(memoizedfact(2)); // Fetching from cache for arguments: 2,3
