// Implement the binary Serach algo to find a target value in a soretd array. Log the index of the target value;

function BinarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;

    while(left<=right){
        const mid = Math.floor((left+right)/2);

        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            left = mid+1;
        }else{
            right = mid -1;
        }
    }
    return -1;
}

// Example usage
const sortedNumbers = [11, 12, 22, 25, 34, 64, 90];
const targetValue = 25;

console.log("Sorted array:", sortedNumbers);
const index = BinarySearch(sortedNumbers, targetValue);

if (index !== -1) {
  console.log(`Target value ${targetValue} found at index: ${index}`);
} else {
  console.log(`Target value ${targetValue} not found in the array.`);
}