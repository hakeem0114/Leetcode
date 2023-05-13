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
    //Dummy pointing to head
    let dummy = new ListNode(0) //Before 1st node in LL
    dummy.next = head

    //Use 2 pointers: 
    let left = dummy
    let right = head

    //Move right pointer "n" nodes away
    while(right && n>0){

        //Move right pointer per iteration
        right = right.next

        //Decrement n per iteration
        n--
    }//Exits once right pointer is at the node before the nth node

    //Move both left & right pointer till right =null
    while(right){

        //Increment both per iteration
        left = left.next
        right = right.next
    }//Left is prev node to nth node & right is null

    //Skip nth node & connect prev to nth node to next.next node
    left.next = left.next.next //For next iteration, prev node will point to left.next.next


    //Output
    return dummy.next
};