//  Write a recursive function to count the occurrences of a target element in an array. log the result for a few test cases

function countTarget(arr, target, index = 0){
 
    if(arr.length==index){
        return 0;
    }
    const currentCount = arr[index]===target ? 1:0;

    return currentCount + countTarget(arr, target,index+1);
    
}
const sortedArray = [1, 3, 5,3, 7, 9, 11,5, 13, 15, 17, 19];
const testCases = [5,3,1];

testCases.forEach(target => {
    const count = countTarget(sortedArray, target);
    console.log(`Target: ${target} | occurence: ${count}`);
});