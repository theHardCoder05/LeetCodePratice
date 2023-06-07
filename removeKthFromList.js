/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    if(head.next == null) return null;

    let counter = 0
    let nodePointer = head;

    while(nodePointer != null){
        nodePointer = nodePointer.next;
        counter += 1
    }

    let removePos = counter - n;


    if(removePos == 0) return head.next;
    nodePointer = head;
    for(let index = 0; index < removePos - 1; index++){
        nodePointer = nodePointer.next;
    }
    
    
    nodePointer.next = nodePointer.next.next;
   
    return head;
};