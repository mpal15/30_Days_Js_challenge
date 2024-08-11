//  Implement the quickSort algo to sort an array of numbers in ascendiing order. log the sorted array.

function QuickSort(arr){
   if(arr.length < 2){
    return arr;
   }

   const pivot  = arr[arr.length - 1];
   const left = [];
   const right= [];

   for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        left.push(arr[i]);
    }else{
        right.push(arr[i]);
    }
   }
  return [...QuickSort(left),pivot,...QuickSort(right)];
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);

const sortedNumbers = QuickSort(numbers);
console.log("Sorted array:", sortedNumbers);
