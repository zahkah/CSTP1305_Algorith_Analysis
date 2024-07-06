
/**
 * Midterm Exam: CSTP1305
 * Zacharie Gatare
 * Date:2024/07/05
 * Github_Link:https://github.com/zahkah/CSTP1305_Algorith_Analysis/tree/main/Midterm_cstp1305
 * **/

// Question 1: Find the Missing Number in an Unsorted Array
// Solution 1: Sum Formula
// Time Complexity: O(n)

function findMissingNumber(array,n){
    let expectedSum = n*(n+1)/2;
    let actualSum = array.reduce((acc, cur)=> acc +cur ,0);
    return expectedSum-actualSum;
}

console.log(findMissingNumber([5, 4, 1, 2], 5));  
console.log(findMissingNumber([9, 5, 3, 2, 6, 1, 7, 8, 10], 10));  
console.log(findMissingNumber([2, 3, 1, 5], 5));  
console.log(findMissingNumber([1, 2, 3, 4, 5], 6));  

// Question 2: Two Sum Problem
// Solution: Hash Map
// Time Complexity: O(n)
function twoSum(nums,target){
    const map ={};
    for(let i=0; i<nums.length;i++){
        const complement = target - nums[i];
        if(map[complement] !==undefined){
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}

console.log(twoSum([1, 5, 2, 7], 8));
console.log(twoSum([20, 1, 5, 2, 11], 3));  
console.log(twoSum([3, 2, 4], 6));  

// Question 3: Generate All Permutations of a String
// Solution: Recursive Permutation Generation
// Time Complexity: O(n!)

function generatePermutation(str){
    if(str.length<2) 
        return[str];
    let permutations =[];
    for (let i= 0;i<str.length;i++){
        let char = str[i];
        if(str.indexOf(char) !==i) continue;
        let remainingString = str.slice(0,i)+str.slice(i+1,str.length);
        for (let subPermutation of generatePermutation(remainingString)){
            permutations.push(char+subPermutation);
        }

    }
    return permutations;
}

console.log(generatePermutation("AB")); 
console.log(generatePermutation("A"));  
console.log(generatePermutation("ABC"));  

// Question 4: Detecting a Cycle in a Linked List
// Time Complexity: O(n)

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Function to add nodes to a linked list
function addNode(head, value) {
    let current = head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = new ListNode(value);
    return head;
}

// Creating a linked list without a cycle
let head1 = new ListNode('A');
addNode(head1, 'B');
addNode(head1, 'C');

// Creating a linked list with a cycle (C -> A)
let head2 = new ListNode('A');
let nodeB = addNode(head2, 'B');
let nodeC = addNode(nodeB, 'C');
nodeC.next = head2; // Creating the cycle

function checkIfCycleExists(head) {
    let slow = head, fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}
// Testing the function with console.log
console.log("Test 1 (No cycle):", checkIfCycleExists(head1));
console.log("Test 2 (With cycle):", checkIfCycleExists(head2));


// Question 5: Valid Parentheses
// Solution: Stack
// Time Complexity: O(n)
function checkIfValidParenthesis(str) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str.trim()) {
        if (!map[char]) {
            stack.push(char);
        } else if (!stack.length || stack.pop() !== map[char]) {
            return false;
        }
    }

    return stack.length === 0;
}

console.log(checkIfValidParenthesis("()"));  
console.log(checkIfValidParenthesis("(){}[]"));  
console.log(checkIfValidParenthesis("([})"));  
console.log(checkIfValidParenthesis("[({})]"));  
