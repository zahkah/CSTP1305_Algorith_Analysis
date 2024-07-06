
/**
 * Midterm Exam:
 * Zacharie Gatare
 * Date:2024/07/05
 * **/

// Question 1: Find the Missing Number in an Unsorted Array
// Solution 1: Sum Formula
// Time Complexity: O(n)
function findMissingNumber(array, n) {
    let expectedSum = n * (n + 1) / 2;
    let actualSum = array.reduce((acc, cur) => acc + cur, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([5, 4, 1, 2], 5));  // Expected output: 3
console.log(findMissingNumber([9, 5, 3, 2, 6, 1, 7, 8, 10], 10));  // Expected output: 4
console.log(findMissingNumber([2, 3, 1, 5], 5));  // Expected output: 4
console.log(findMissingNumber([1, 2, 3, 4, 5], 6));  // Expected output: 6

// Question 2: Two Sum Problem
// Time Complexity: O(n)
function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
}

console.log(twoSum([1, 5, 2, 7], 8));  // Expected output: [1, 3]
console.log(twoSum([20, 1, 5, 2, 11], 3));  // Expected output: [1, 3]
console.log(twoSum([3, 2, 4], 6));  // Expected output: [1, 2]

// Question 3: Generate All Permutations of a String
// Time Complexity: O(n!)
function generatePermutation(str) {
    if (str.length < 2) return [str];

    let permutations = [];
    for (let i = 0; i < str.length; i++) { 
        let char = str[i];

        if (str.indexOf(char) !== i) continue;  // Avoid duplicating permutations

        let remainingString = str.slice(0, i) + str.slice(i + 1, str.length);
        for (let subPermutation of generatePermutation(remainingString)) {
            permutations.push(char + subPermutation);
        }
    }
    return permutations;
}

console.log(generatePermutation("AB"));  // Expected Output: ["AB", "BA"]
console.log(generatePermutation("A"));  // Expected Output: ["A"]
console.log(generatePermutation("ABC"));  // Expected Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]

// Question 4: Detecting a Cycle in a Linked List
// Time Complexity: O(n)
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

// Question 5: Valid Parentheses
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

console.log(checkIfValidParenthesis("()"));  // Expected Output: true
console.log(checkIfValidParenthesis("(){}[]"));  // Expected Output: true
console.log(checkIfValidParenthesis("([})"));  // Expected Output: false
console.log(checkIfValidParenthesis("[({})]"));  // Expected Output: true
