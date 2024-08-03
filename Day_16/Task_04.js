//  Write a recursive function to find the maximum element in an array. Log the result for a few test cases.


function MaximumElement(arr){
    if(arr.length == 1){
        return arr[0];
    }
    const maxOfRest = MaximumElement(arr.slice(1));
    return Math.max(arr[0],maxOfRest);
}
const testArray1 = [1, 2, 3, 4, 5];
const testArray2 = [10, -2, 3, 5];
const testArray3 = [-1, -5, -3, -4];
const testArray4 = [7, 14, 21, 28, 14, 21];

console.log(`Maximum of ${testArray1}:`, MaximumElement(testArray1)); // Output: 5
console.log(`Maximum of ${testArray2}:`,  MaximumElement(testArray2)); // Output: 10
console.log(`Maximum of ${testArray3}:`, MaximumElement(testArray3)); // Output: -1
console.log(`Maximum of ${testArray4}:`,  MaximumElement(testArray4)); // Output: 28