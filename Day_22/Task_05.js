// Group Anagrams
// Write a function that tkes an array of string and groups anagrams together
// log the grouped anagrams for a few test cases


function groupAnagrams(strs){
    const anagramMap = new Map();

    for(const str of strs){
         const sortedStr = str.split('').sort().join('');
         if(!anagramMap.has(sortedStr)){
            anagramMap.set(sortedStr,[]);
         }
         anagramMap.get(sortedStr).push(str);
    }
    return Array.from(anagramMap.values());
}

// Test cases
const testCases = [
    ["eat", "tea", "tan", "ate", "nat", "bat"],
    ["listen", "silent", "enlist"],
    ["rat", "tar", "art"],
    ["", "b", "a", "ab", "ba"],
    ["a"],
];

testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}:`, groupAnagrams(testCase));
});