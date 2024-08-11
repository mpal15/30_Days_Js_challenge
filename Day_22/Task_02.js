// Longest substring without reapeating characters
//  Write a function that tajes a string and returns the length of longest substring without repeating chacters.
// log the length for a few test cases, including edge cases

function lengthOfLongestSubstring(str){
    let charIndexMap = new Map();
    let maxlength = 0;
    let start = 0;

    for(let i=0;i<str.length;i++){
         if(charIndexMap.has(str[i]) && charIndexMap.get(str[i])>=start){
            start = charIndexMap.get(str[i])+1;
         }
         charIndexMap.set(str[i],i);
         maxlength = Math.max(maxlength,i-start+1);
    }
    return maxlength;
}

// Test Case 1: Normal case
let test1 = "abcabcbb";
console.log("Test Case 1 Result:", lengthOfLongestSubstring(test1)); // Expected: 3 (abc)

// Test Case 2: All characters are unique
let test2 = "abcd";
console.log("Test Case 2 Result:", lengthOfLongestSubstring(test2)); // Expected: 4 (abcd)

// Test Case 3: All characters are the same
let test3 = "aaaa";
console.log("Test Case 3 Result:", lengthOfLongestSubstring(test3)); // Expected: 1 (a)

// Test Case 4: Empty string
let test4 = "";
console.log("Test Case 4 Result:", lengthOfLongestSubstring(test4)); // Expected: 0

// Test Case 5: String with special characters
let test5 = "pwwkew";
console.log("Test Case 5 Result:", lengthOfLongestSubstring(test5)); // Expected: 3 (wke)

// Test Case 6: Long string with repeating patterns
let test6 = "dvdf";
console.log("Test Case 6 Result:", lengthOfLongestSubstring(test6)); // Expected: 3 (vdf)

// Test Case 7: String with spaces
let test7 = "abc def ghi";
console.log("Test Case 7 Result:", lengthOfLongestSubstring(test7)); // Expected: 11 (abc def ghi)