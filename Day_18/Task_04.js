//  Implement the linear search algo to find a target value in an array. log the index of the target value

function LinearSearch(arr,target){
    const n = arr.length;
    for(let i=0;i<n;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
const targetValue = 22;

console.log("Array:", numbers);
const index = LinearSearch(numbers, targetValue);

if (index !== -1) {
  console.log(`Target value ${targetValue} found at index: ${index}`);
} else {
  console.log(`Target value ${targetValue} not found in the array.`);
}

