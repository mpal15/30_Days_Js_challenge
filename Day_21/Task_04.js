// Merge Two Sorted Lists
// Write a function that takes two sorted linklists and returns a new sorted list by merging the,.
// Create a few test cases with linked lists and log the merged list

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function mergeTwoLists(list1, list2) {
    // Create a dummy node to start the merged list
    const dummy = new ListNode(0);
    let current = dummy;
  
    // Traverse both lists and append nodes to the merged list
    while (list1 !== null && list2 !== null) {
      if (list1.val <= list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    // Append any remaining nodes from the non-empty list
    if (list1 !== null) {
      current.next = list1;
    } else {
      current.next = list2;
    }
  
    // Return the head of the merged list (excluding the dummy node)
    return dummy.next;
  }

// Create the first linked list: 1 -> 2 -> 4
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));

// Create the second linked list: 1 -> 3 -> 4
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

// Merge the two lists
const mergedList = mergeTwoLists(list1, list2);

// Log the merged list
let current = mergedList;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}