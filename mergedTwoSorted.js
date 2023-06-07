/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let prevhead = new ListNode(-1, null);
    let prev = prevhead;
    
    while (list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            prev.next = list1;
            list1 = list1.next;
        }
        else{
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    if (list1 !== null){
        prev.next = list1;
    }else{
        prev.next = list2;
    }

    return prevhead.next;
};

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
