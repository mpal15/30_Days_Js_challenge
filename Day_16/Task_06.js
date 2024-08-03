// Write a recusive function to check if a string is palindrome. log the result for a few test case

function isPalindrome(str) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Base case: if the string is empty or has one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    // Check the first and last characters
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false;
    }
    // Recursive case: check the substring excluding the first and last characters
    return isPalindrome(str.substring(1, str.length - 1));
}

// Test cases
const testCases = [
    "A man, a plan, a canal, Panama",
    "racecar",
    "hello",
    "Was it a car or a cat I saw?",
    "No lemon, no melon",
    "not a palindrome",
    "12321",
    "12345"
];

// Logging results
testCases.forEach(test => {
    const result = isPalindrome(test);
    console.log(`Original: '${test}' | Is Palindrome: ${result}`);
});