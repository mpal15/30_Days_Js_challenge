// Valid Parentheses
//  write a function that takes a string containing just the chacters'(',')','{','},'[',']', and determine if the input string is valid
// A string is valid if open brackets are  closed in the correct order.
// log the result for a few test cases.

function isValid(s) {
    // Create a stack to store opening brackets
    const stack = [];
  
    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      // If the character is an opening bracket, push it onto the stack
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else {
        // If the character is a closing bracket
        if (stack.length === 0) {
          // If the stack is empty, it means there's no matching opening bracket
          return false;
        }
  
        // Get the last opening bracket from the stack
        const lastOpeningBracket = stack.pop();
  
        // Check if the closing bracket matches the last opening bracket
        if (
          (char === ')' && lastOpeningBracket !== '(') ||
          (char === ']' && lastOpeningBracket !== '[') ||
          (char === '}' && lastOpeningBracket !== '{')
        ) {
          return false;
        }
      }
    }
  
    // If the stack is empty, it means all brackets are matched
    return stack.length === 0;
  }

  console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
console.log(isValid('{[]}')); // true
console.log(isValid('([)]')); // false
console.log(isValid(']')); // false