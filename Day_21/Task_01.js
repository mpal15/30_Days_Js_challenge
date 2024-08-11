// Two Sum
//  Write a function that takes an array of numbers and target number, and return the indicies of the two numbers that add-up to the target.
// log the indicies for a few test cases


function twoSum(nums, target){
    const numIndices = {};
    for(let i=0;i<nums.length;i++){
        const complement = target -nums[i];
        if(complement in numIndices){
            return [numIndices[complement],i];
        }
        numIndices[nums[i]] = i;
    }
    return null;
}

// Test cases
const testCases = [
    { nums: [2, 7, 11, 15], target: 9 }, // Expected output: [0, 1]
    { nums: [3, 2, 4], target: 6 },      // Expected output: [1, 2]
    { nums: [3, 3], target: 6 },         // Expected output: [0, 1]
];

testCases.forEach(({ nums, target }) => {
    const result = twoSum(nums, target);
    console.log(`Indices of numbers that add up to ${target} in [${nums}]:`, result);
});