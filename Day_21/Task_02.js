//  Reverse Integer

// Write a function that takes an integer and returns i with its digit reversed.
// Handle edge cases like negative numberss and numbers ending in zeroes
// log the reversed integer for a few test cases
function reverseInteger(num) {
    // Handle negative numbers
    const isNegative = num < 0;
    const absoluteNum = Math.abs(num); // Get the absolute value

    // Reverse the digits by converting to string, splitting, reversing, and joining
    const reversedStr = absoluteNum.toString().split('').reverse().join('');

    // Convert the reversed string back to an integer
    let reversedNum = parseInt(reversedStr, 10);

    // Restore the negative sign if the original number was negative
    if (isNegative) {
        reversedNum = -reversedNum;
    }

    // Handle overflow (32-bit signed integer)
    if (reversedNum < -Math.pow(2, 31) || reversedNum > Math.pow(2, 31) - 1) {
        return 0; // Return 0 if it overflows
    }

    return reversedNum;
}

// Test cases
const testCases = [
    123,        // Expected output: 321
    -123,       // Expected output: -321
    120,        // Expected output: 21
    0,          // Expected output: 0
    1534236469, // Expected output: 0 (overflow case)
];

testCases.forEach((testCase) => {
    const result = reverseInteger(testCase);
    console.log(`Reversed integer of ${testCase}:`, result);
});
