//  Implement the bubble sort algo to sort an Array of numbers in ascending order.Lo the sorted array.

function bubbleSort(arr){
    const n  = arr.length;

    for(let i= 0;i< n;i++){
        for( let j = 0;j<n-i-1;j++){
            if(arr[j]> arr[j+1]){
                [arr[j],arr[j+1]] = [arr[[j+1]],arr[j]];
            }
        }
    }
    return arr;
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);

const sortedNumbers = bubbleSort(numbers);
console.log("Sorted array:", sortedNumbers);