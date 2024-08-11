// Write a function to merge two sorted arrays into one sorted array.log the merged array

function mergeArray(arr1,arr2){
   let arr = [];
   let i=0;
   let j=0;
   while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
        arr.push(arr1[i]);
        i++;
    }else{
        arr.push(arr2[j]);
        j++;
    }
   }
   while(j<arr2.length){
    arr.push(arr2[j]);
    j++;
   }
   while(i<arr1.length){
    arr.push(arr1[i]);
    i++;
   }
   return arr;
}


// Example usage
const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeArray(array1, array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]