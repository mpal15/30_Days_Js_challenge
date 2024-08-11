// 3Sum
// write a function that takes an array of integer and finds all unique triplets in the array which give the sum of zero.
// log the triplest for a few tet cases, including edge caes.

function threeSum(nums){
   const result = [];
   nums.sort((a,b)=>a-b);

   for(let i=0;i<nums.length-2;i++){
    if(i>0 && nums[i]===nums[i-1]) continue;

    let left = i+1;
    let right = nums.length-1;
    while(left<right){
          const sum = nums[i]+nums[left]+nums[right];
          if(sum===0){
            result.push([nums[i],nums[left],nums[right]]);
            while(left <right && nums[left]=== nums[left+1]) left++;
            while(left <right && nums[right]===nums[right-1]) right--;
            left++;
            right--;
          }else if(sum<0){
            left++;
          }else{
            right--;
          }
    }
   }
   return result;
}

// Test Case 1: Normal case with multiple triplets
let test1 = [-1, 0, 1, 2, -1, -4];
console.log("Test Case 1 Result:", threeSum(test1)); 
// Expected: [[-1, -1, 2], [-1, 0, 1]]

// Test Case 2: No triplets that sum to zero
let test2 = [1, 2, 3, 4, 5];
console.log("Test Case 2 Result:", threeSum(test2)); 
// Expected: []

// Test Case 3: All elements are zero
let test3 = [0, 0, 0, 0];
console.log("Test Case 3 Result:", threeSum(test3)); 
// Expected: [[0, 0, 0]]

// Test Case 4: Edge case with fewer than three elements
let test4 = [1, -1];
console.log("Test Case 4 Result:", threeSum(test4)); 
// Expected: []

// Test Case 5: Mixed numbers with duplicates
let test5 = [-2, 0, 1, 1, 2];
console.log("Test Case 5 Result:", threeSum(test5)); 
// Expected: [[-2, 0, 2], [-1, 1, 0]]

// Test Case 6: Large numbers
let test6 = [1000000000, 1000000000, -2000000000];
console.log("Test Case 6 Result:", threeSum(test6)); 
// Expected: [[-2000000000, 1000000000, 1000000000]]