// Add Two Numbers
//  Wtite a function takes two non-empty linked list representing two non-negative integers. The digit are stored in reverse order, and each node contains asingle digit,
// Add the two numbers and return the sum as a linked list.
// Create a few test cases with linked list and log the sum as a linked list

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.value : 0;
        let val2 = l2 ? l2.value : 0;

        let total = val1 + val2 + carry;
        carry = Math.floor(total / 10);
        current.next = new ListNode(total % 10);
        current = current.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next; // Return the next of dummy head to skip the initial dummy node
}
  function createLinkedList(numbers) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let number of numbers) {
        current.next = new ListNode(number);
        current = current.next;
    }
    return dummyHead.next; // Skip the dummy head
}

function printLinkedList(node) {
    let result = '';
    while (node) {
        result += node.value + ' -> ';
        node = node.next;
    }
    result += 'null';
    console.log(result);
}


// Test Case 1: (2 -> 4 -> 3) + (5 -> 6 -> 4)
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let result = addTwoNumbers(l1, l2);
console.log("Test Case 1 Result:");
printLinkedList(result);  // Expected: 7 -> 0 -> 8 -> null

// Test Case 2: (0) + (0)
l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
result = addTwoNumbers(l1, l2);
console.log("Test Case 2 Result:");
printLinkedList(result);  // Expected: 0 -> null

// Test Case 3: (9 -> 9 -> 9) + (1)
l1 = createLinkedList([9, 9, 9]);
l2 = createLinkedList([1]);
result = addTwoNumbers(l1, l2);
console.log("Test Case 3 Result:");
printLinkedList(result);  // Expected: 0 -> 0 -> 0 -> 1 -> null

// Test Case 4: (1 -> 8) + (0)
l1 = createLinkedList([1, 8]);
l2 = createLinkedList([0]);
result = addTwoNumbers(l1, l2);
console.log("Test Case 4 Result:");
printLinkedList(result);  // Expected: 1 -> 8 -> null