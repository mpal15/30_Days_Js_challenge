//  Median of Two sorted Arrays
// Write a function that takes two sorted arrays of integer and return the median of the two sorted arrays
// log the median for a few test cases, including edge cases


function findMedianSortedArrays(arr1,arr2){
     const merged =[];
     let i=0,j=0;
     while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++;
        }
     }
     while(i<arr1.length){
        merged.push(arr1[i]);
        i++;
     }
     while(j<arr2.length){
        merged.push(arr2[j]);
        j++;
     }
     const totalLength = merged.length;
     const mid = Math.floor(totalLength/2);
     if (totalLength % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }

}

// Test cases
const testCases = [
    [[1, 3], [2]],                  // Median is 2
    [[1, 2], [3, 4]],               // Median is (2 + 3) / 2 = 2.5
    [[0, 0], [0, 0]],               // Median is 0
    [[], [1]],                      // Median is 1
    [[2], []],                      // Median is 2
    [[1, 2, 3], [4, 5, 6]],         // Median is (3 + 4) / 2 = 3.5
    [[1, 2, 3, 4], [5, 6]],         // Median is (3 + 4) / 2 = 3.5
    [[1, 3, 8], [7, 9, 10, 11]],    // Median is 8
];

testCases.forEach((testCase, index) => {
    const median = findMedianSortedArrays(testCase[0], testCase[1]);
    console.log(`Test Case ${index + 1}: Median = ${median}`);
});