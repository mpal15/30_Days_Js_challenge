// Palindrome Number
// Write a function that takes an integer and return true if it is a palindrome, and false otherwise
// Log the result for a few test cases,including edge cases like negative numbers


function isPalindrome(num){
    if(num<0){
        return false;
    }
    const str = num.toString();

   for(let i=0;i<Math.floor(str.length/2);i++){
    if(str[i]!= str[str.length-1-i]){
        return false;
    }
   }
   return true;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(1001)); // true
console.log(isPalindrome(12321)); // true