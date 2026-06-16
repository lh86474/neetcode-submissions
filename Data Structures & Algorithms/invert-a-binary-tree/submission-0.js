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
     * @return {TreeNode}
     */
    invertTree(root) {
        // I will definitely have to start at the root and keep swapping every time
        // going to the parent of root is difficult because there is no parent parameter
        // I will traverse in-order
        // start on the left
        if (root == null) {
            return null;
        }
        let queue = [];
        queue.push(root);
        let currentNode = null;
        let left = null;
        let right = null;
        let holder = null;
        while (queue.length > 0) {
            currentNode = queue.shift();
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
            right = currentNode.right;
            left = currentNode.left;
            holder = left;
            currentNode.left = right;
            currentNode.right = holder;
        }
        return root;
    }
}
