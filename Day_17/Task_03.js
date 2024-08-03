//  Implement a stack class with methods push(add element),pop(remove element), and peek(view the top element)

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