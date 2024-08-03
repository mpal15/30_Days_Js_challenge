//  write  recursive function to reverse a string .log the result for a few test cases

function reverseString(str){
    if(str.length==0){
        return str;
    }
    return  reverseString(str.substr(1)) + str.charAt(0);
}
const testCases = ["hello", "world", "JavaScript", "recursion", "", "a", "ab", "abcd"];

testCases.forEach(test => {
    const result = reverseString(test);
    console.log(`Original: '${test}' | Reversed: '${result}'`);
});