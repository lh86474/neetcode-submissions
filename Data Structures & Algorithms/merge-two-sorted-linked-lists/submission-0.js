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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let pointer1 = list1;
        let pointer2 = list2;
        // let me merge list1 nodes before list2
        // make dummy node for finalpointer
        let dummyNode = new ListNode(-1, null);
        let finalPointer = dummyNode
        while (pointer1 !== null && pointer2 !== null) {
            if (pointer1.val <= pointer2.val) {
                finalPointer.next = pointer1;
                pointer1 = pointer1.next;
                finalPointer = finalPointer.next;
            } else {
                finalPointer.next = pointer2;
                pointer2 = pointer2.next;
                finalPointer = finalPointer.next;
            }
        }
        // if still some remaining nodes
        if (pointer1 !== null) {
            while (pointer1 !== null) {
                finalPointer.next = pointer1;
                pointer1 = pointer1.next;
                finalPointer = finalPointer.next;
            }
        }
        if (pointer2 !== null) {
            while (pointer2 !== null) {
                finalPointer.next = pointer2;
                pointer2 = pointer2.next;
                finalPointer = finalPointer.next;
            }
        }
        return dummyNode.next;
    }
    
}
