// Implement a Linked list class with methods to add a node to the end, remove a node from end, and display all nodes


class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }

    addNode(value){
     const newNode = new Node(value);
     if(!this.head){
        this.head = newNode;
        return;
     }
     let lastNode = this.head;
     while(lastNode.next){
        lastNode = lastNode.next;
     }
     lastNode.next = newNode;
    }

    removeNode(){
        if(!this.head){
            console.log("List is empty, No node to remove.");
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let secondlastNode =  this.head;
        while(secondlastNode.next.next){
            secondlastNode = secondlastNode.next;
        }
        secondlastNode.next = null;
    }

    display(){
        let currentNode = this.head;
        if(!currentNode){
            console.log("List is empty.");
            return;
        }
        let result = '';
        while(currentNode){
            result+=currentNode.value + "->";
            currentNode  = currentNode.next;
        }
        result+="null";
        console.log(result);
    }
}

const linkedList = new LinkedList();
linkedList.addNode(10);
linkedList.addNode(20);
linkedList.addNode(30);

console.log("Current Linked List:");
linkedList.display();  // Output: 10 -> 20 -> 30 -> null

linkedList.removeNode();
console.log("Linked List after removing the last node:");
linkedList.display();  // Output: 10 -> 20 -> null

linkedList.removeNode();
linkedList.removeNode();
console.log("Linked List after removing all nodes:");
linkedList.display();  // Output: List is empty