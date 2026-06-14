/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let myMap = new Map();
        let listPointer = head;
        if (listPointer == null) {
            return false;
        }
        while (listPointer.next !== null) {
            if (myMap.has(listPointer.val)) {
                return true;
            }
            myMap.set(listPointer.val, false);
            listPointer = listPointer.next;
        }
        // If terminates, will naturally mean that no cycle at all
        return false;
    }
}
