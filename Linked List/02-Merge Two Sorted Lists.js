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

//O(n)
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0) //New instance of node with value of 0
    let head = dummy

    //Takes 1st value of list2 & sorts it with rest of list1
    while(list1 && list2){
        //Since both list are sorted, connect next node if its value is +1 more than the prev

        if(list1.val <= list2.val){
            dummy.next = list1
            list1 = list1.next //Move for next iteration
        }else{
            dummy.next = list2
            list2 = list2.next
        }

        //Update dummy value (move to next pointer)
        dummy= dummy.next
    }

    //Append rest of sorted list2 to combines list OR could be vice verca
    if(list1){
        dummy.next = list1
    }else{
        dummy.next = list2
    }

return head.next
};
