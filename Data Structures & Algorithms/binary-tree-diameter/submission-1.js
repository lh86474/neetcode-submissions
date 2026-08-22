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
    /**
     * Current idea is to add up subtree lengths
     * to find the non-DFTable paths 
     * [5, 3, 2, 4] is peculiar because there is no 
     * traditional way to find the path
     */
    diameterOfBinaryTree(root) {
        let maxDiameter = 0;

        const depthHelper = (node) => {

            if (node === null) {
                return 0;
            }
            
            let leftLength = depthHelper(node.left);
            let rightLength = depthHelper(node.right);

            maxDiameter = Math.max(maxDiameter, leftLength + rightLength);

            return 1 + Math.max(leftLength, rightLength);
        }

        depthHelper(root);
        
        return maxDiameter;
    }
}
