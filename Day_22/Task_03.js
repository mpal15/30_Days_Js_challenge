//  Containers with most water
//  Write a function that takes an array of non- negative integer where each integer represents the height of line drawn at each point. find two lines that together with the x-axis form a contaiers,such that the containers holds the most water
// log the maximum amount of water for a new test case

function maxArea(height){
    let maxWater =0;
    let left =0;
    let right = height.length-1;

    while(left<right){
        const area = Math.min(height[left],height[right])*(right-left);
        maxWater = Math.max(maxWater, area);

        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxWater;
}

// Test Case: [1, 8, 6, 2, 5, 4, 8, 3, 7]
let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Maximum amount of water:", maxArea(heights)); // Expected: 49