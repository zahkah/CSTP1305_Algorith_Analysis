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
var preorderTraversal = function(root) {
    const result = [];
    if (root === null) {
        return result;
    }
    
    const stack = [];
    stack.push(root);
    
    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);
        
        // Push right child first so that left child is processed first
        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }
    
    return result;
};

// Example usage:
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(preorderTraversal(root)); // Output: [1, 2, 3]
