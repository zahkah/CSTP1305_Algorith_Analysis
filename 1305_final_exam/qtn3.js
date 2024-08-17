/**
 * Question3: Delete Node in a Linked List (5 MARKS)
Write a function to delete a node (except the tail) in a singly
linked list, given only access to that node.
Test Case 1: Basic Deletion
● Input:
○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
○ Node to delete: 5
● Output:
○ Linked List: 4, where linked list should become 4 -> 1 -> 9
Test Case 2: Basic Deletion
● Input:
○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
○ Node to delete: 4
● Output:
○ Linked List: 5, where linked list should become 5 -> 1 -> 9
 * 
 * ***/

//deleting nodes in a linkedList in js at specific index.

class node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
function deleteNode(nodeToDelete) {
        // Check if the node to be deleted is the head node
if (nodeToDelete === head) {
    head = nodeToDelete.next;
    return;
}
            // Traverse the linked list to find the node before the node to be deleted
let currentNode = head;
while (currentNode.next !== nodeToDelete) {
    currentNode = currentNode.next;
}
currentNode.next = nodeToDelete.next;
return;
}
                
  // Test the function
  let head = new node(4);
  head.next = new node(5);
  head.next.next = new node(1);
  head.next.next.next = new node(9);
  deleteNode(head.next);
  console.log(head.data); 
  console.log(head.next.data);             

                
