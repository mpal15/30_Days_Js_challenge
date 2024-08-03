//  Write a function that memoizes the result of another function, Use a closure to store the result of previous computations.

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
function add(a, b) {
    return a + b;
}

// Create a memoized version of the add function
const memoizedAdd = memoize(add);

// Example usage
console.log(memoizedAdd(2, 3)); // Calculating result for arguments: 2,3
console.log(memoizedAdd(2, 3)); // Fetching from cache for arguments: 2,3
console.log(memoizedAdd(5, 10)); // Calculating result for arguments: 5,10
console.log(memoizedAdd(2, 3)); // Fetching from cache for arguments: 2,3
