// Write a recursive function to find the sum of all elements in array. log the result for a few test cases.

function sumArray(arr){
   
    if(arr.length == 0){
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [10, -2, 3, 5];
const testArray3 = [];
const testArray4 = [7, 14, 21, 28];

console.log(`Sum of ${testArray1}:`, sumArray(testArray1)); // Output: 15
console.log(`Sum of ${testArray2}:`, sumArray(testArray2)); // Output: 16
console.log(`Sum of ${testArray3}:`, sumArray(testArray3)); // Output: 0
console.log(`Sum of ${testArray4}:`, sumArray(testArray4)); // Output: 70