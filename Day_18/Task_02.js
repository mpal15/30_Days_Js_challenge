//  Implement the selection sort algo to sort an array of numbers in ascending order.log the sorted array
 
function SelectionSort(arr){
    const n = arr.length;

    for(let i=0;i<n-1;i++){
        let minIndex = i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex!=i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]];

        }
    }
    return arr;
}


// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);

const sortedNumbers = SelectionSort(numbers);
console.log("Sorted array:", sortedNumbers);
