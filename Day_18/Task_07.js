// Write a function to find the longest substring without repeating characters in a string. log the length of the substring;

function lengthOflongestSubstring(s){
    let maxLength = 0;
    let start = 0;
    let charMap = new Map();

    for(let i=0;i<s.length;i++){
        const char = s[i];
        if(charMap.has(char) && charMap.get(char) >= start){
            start = charMap.get(char)+1;

        }
        charMap.set(char,i);
        maxLength = Math.max(maxLength,i-start+1);
    }
    return maxLength;
}
const input = "abcabcbb";
const longestSubstringLength = lengthOflongestSubstring(input);
console.log(longestSubstringLength); // Output: 3