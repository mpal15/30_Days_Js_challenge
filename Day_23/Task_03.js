// Trapping Rain Water
//  Write a function that  and array of non-negative integers representing an elevation map where the width of each bar 1, and computes how much water it can trap after raining.
// log the amount of trapped water for a few test cases

function trap(height){
    if(height.length<3) return 0;
    let left =0,right=height.length-1;
    let leftMax = 0,rightMax =0;
    let trappedWater = 0;

    while(left<right){
        if(height[left]<height[right]){
            if(height[left]>=leftMax){
                leftMax = height[left];
            }else{
                trappedWater += leftMax-height[left];
            }
            left++;
        }else{
            if(height[right]>=rightMax){
                rightMax = height[right];
            }else{
                trappedWater+=rightMax-height[right];
            }
            right--;
        }
    }
    return trappedWater;
}

// Test cases
const testCases = [
    [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
    [4, 2, 0, 3, 2, 5],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1],
];

testCases.forEach((testCase, index) => {
    const trappedWater = trap(testCase);
    console.log(`Test Case ${index + 1}: Trapped Water = ${trappedWater}`);
});