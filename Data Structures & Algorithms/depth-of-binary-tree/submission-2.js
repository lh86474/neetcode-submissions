/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if (root == null) {
            return 0;
        }
        // I will definitly have to use dfs here
        let stack = [];
        // in case we don't get to the longest path on the first run
        let max = 0;
        stack.push([root, 1]);
        while (stack.length > 0) {
            let [currentNode, currentDepth]= stack.pop();
            if (currentNode.right !== null) {
                stack.push([currentNode.right, currentDepth + 1]);
            }
            if (currentNode.left !== null) {
                stack.push([currentNode.left, currentDepth + 1]);
            }
            if (currentDepth > max) {
                max = currentDepth;
            }
        }
        return max;    
    }
}
