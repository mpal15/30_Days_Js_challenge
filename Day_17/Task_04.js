//  Use the Stack class to reverse a string by pushig all characters onto the stack and then popping them off


class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty. No element to pop.");
            return undefined;
        }
        return this.items.pop();
    }

    peek(){
         if(this.isEmpty()){
            console.log("Stack is empty. No element to peek");
            return undefined;
         }
         return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
    display(){
        if(this.isEmpty()){
            console.log("Stack is empty");
            return;
        }
        console.log("Stack elements:"+ this.items.join(" "));
    }
  
}

function reverseString(str){
    const stack = new Stack();
    for(let char of str){
        stack.push(char);
    }
    let reverseStr = '';
    while(!stack.isEmpty()){
        reverseStr+=stack.pop();
    }
    return reverseStr;
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Current Stack:");
stack.display();  // Output: Stack elements: 10, 20, 30

console.log("Top element (peek):", stack.peek());  // Output: Top element (peek): 30

console.log("Popped element:", stack.pop());  // Output: Popped element: 30
console.log("Stack after popping an element:");
stack.display();  // Output: Stack elements: 10, 20
console.log("Is the stack empty?", stack.isEmpty());  // Output: Is the stack empty? false

stack.pop();  // Remove 20
stack.pop();  // Remove 10
console.log("Stack after removing all elements:");
stack.display();  // Output: Stack is empty.


// Example usage
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Original String:", originalString);  // Output: Original String: Hello, World!
console.log("Reversed String:", reversedString);  // Output: Reversed String: !dlroW ,olleH