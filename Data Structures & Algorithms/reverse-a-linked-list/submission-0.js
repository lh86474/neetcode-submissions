 // Definition for singly-linked list.
 /*
  class ListNode {
      constructor(val = 0, next = null) {
          this.val = val;
         this.next = next;
      }
  }
*/

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (head === null) {
            return null;
        }
        let current = head;
        let elements = [];
        let index = 0;
        // in the future, for loop to reverse element to some i - 1
        while (current.next !== null) {
            elements[index] = current;
            current = current.next;
            index++;
        }
        // make sure last one is stored
        elements[index++] = current;
        // elements should have all nodes now
        // perform reverse
        for (let i = elements.length - 1; i > 0; i--) {
            elements[i].next = elements[i-1];
        }
        // last node 
        elements[0].next = null;
        return elements[elements.length - 1]; 
    }
}
