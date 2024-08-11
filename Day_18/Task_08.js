// Write a function to rotate n array by k position.log the rotated array.

function rotatedArray(arr,k){
    k = k% arr.length;

    reverseArray(arr,0,arr.length-1);
    reverseArray(arr,0,k-1);
    reverseArray(arr,k,arr.length-1);
    return arr;

}

function reverseArray(arr,start,end){
    while(start<end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;

    } 
}

const myArray = [1,2,3,4,5,6,7,8];
const rotateArray = rotatedArray(myArray,3);
console.log(rotateArray);
