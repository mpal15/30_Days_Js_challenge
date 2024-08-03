//  Implement a Queue class with methods enqueue(add element), dequeue(remove element), and front(view thw first element)

class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty. No element to dequeue");
            return undefined;
        }
        return this.items.shift();
    }
    front(){
        if(this.isEmpty()){
            console.log("Queue is empty. No element at the front");
            return undefined;
        };
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    size(){
        return this.items.length;
    }
    display(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        console.log("Queue element:"+this.items.join(","));
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Current Queue:");
queue.display();  // Output: Queue elements: 10, 20, 30

console.log("Front element:", queue.front());  // Output: Front element: 10

console.log("Dequeued element:", queue.dequeue());  // Output: Dequeued element: 10
console.log("Queue after dequeuing an element:");
queue.display();  // Output: Queue elements: 20, 30

console.log("Is the queue empty?", queue.isEmpty());  // Output: Is the queue empty? false

queue.dequeue();  // Remove 20
queue.dequeue();  // Remove 30
console.log("Queue after removing all elements:");
queue.display();  // Output: Queue is empty.