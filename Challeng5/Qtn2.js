/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const result = [];
    if (root === null) {
        return result;
    }
    
    const stack = [];
    const outputStack = [];
    stack.push(root);
    
    while (stack.length > 0) {
        const node = stack.pop();
        outputStack.push(node);
        
        if (node.left !== null) {
            stack.push(node.left);
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
    }
    
    while (outputStack.length > 0) {
        const node = outputStack.pop();
        result.push(node.val);
    }
    
    return result;
};

// Example usage:
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(postorderTraversal(root)); // Output: [3, 2, 1]
