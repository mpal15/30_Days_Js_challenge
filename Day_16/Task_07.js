//  Write a recursive function to perform a binary search on a sorted array.log the index of the target element for a few test cases.
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the left index exceeds the right index, the target is not found
    if (left > right) {
        return -1; // Target not found
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the target is at the middle index
    if (arr[mid] === target) {
        return mid; // Target found
    }
    
    // If the target is less than the middle element, search the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }
    
    // If the target is greater than the middle element, search the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Test cases
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const testCases = [5, 1, 19, 10, 13, 20];

testCases.forEach(target => {
    const index = binarySearch(sortedArray, target);
    console.log(`Target: ${target} | Index: ${index}`);
});