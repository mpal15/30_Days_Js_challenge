// Merge k Sorted Lists
// Write a function that takes an array of k linked list, each linked list is sorted in ascending order, and merges all the linked lists inot one sorted linked list
// create a few test cases with linked list and log the merged list

class ListNode {
    constructor(val =0 ,next = null){
        this.val =val;
        this.next = next;
    }
}
function mergeKLists(lists) {
    const minHeap = new MinHeap();
    
    // Initialize the heap with the head of each list
    for (const list of lists) {
        if (list) {
            minHeap.insert(list);
        }
    }

    const dummy = new ListNode(0);
    let current = dummy;

    // While there are elements in the heap
    while (!minHeap.isEmpty()) {
        const smallestNode = minHeap.extractMin();
        current.next = smallestNode;
        current = current.next;

        // If there's a next node, add it to the heap
        if (smallestNode.next) {
            minHeap.insert(smallestNode.next);
        }
    }

    return dummy.next; // Return the merged list
}

// MinHeap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const minNode = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return minNode;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].val >= this.heap[parentIndex].val) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex].val < this.heap[smallestIndex].val) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex].val < this.heap[smallestIndex].val) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print the linked list
function printLinkedList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}

// Test cases
const lists = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6])
];

const mergedList = mergeKLists(lists);
console.log("Merged List:");
printLinkedList(mergedList);

// Additional test case with empty lists
const emptyLists = [
    createLinkedList([]),
    createLinkedList([1, 2]),
    createLinkedList([])
];

const mergedEmptyList = mergeKLists(emptyLists);
console.log("Merged Empty List:");
printLinkedList(mergedEmptyList);