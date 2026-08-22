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
     * @return {boolean}
     */
    /*
     * Same pattern with finding the depth
     * Have to check each node, 
     * recursion probably best, have left and right subtree
     * depth and then we can have return case if diff between
     * left and right > 1
     */
    isBalanced(root) {
        if (root == null) {
            return true;
        }
        let isBal = true;
        const depthHelper = (node) => {
            if (node == null) {
                return 0;
            }
            let leftSubtreeLength = depthHelper(node.left);
            let rightSubtreeLength = depthHelper(node.right);

            if (Math.abs(leftSubtreeLength - rightSubtreeLength) > 1) {
                isBal = false;
            }

            return 1 + Math.max(leftSubtreeLength, rightSubtreeLength);
        }

        depthHelper(root);
        // if recursion goes unscathed, return true
        return isBal;
    }
}
