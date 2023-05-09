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
    let dummy = new ListNode(0) //dummy node with val of 0 (use ListNode in Leetcode instead of new Node(0)
    let head = dummy //Updates dummy to use head.next as return statement

    while(list1 && list2){ //!= null, keep looping

        if(list1.val < list2.val){
            //Start merging from list1
            dummy.next = list1
            list1 = list1.next
        }else{
            dummy.next = list2
            list2 = list2.next
        }

        //Increment dummy to next node
        dummy = dummy.next
    }

   //Account for the list1 or list2 are not of equal size so the while loop will leave some extra nodes
   //Appends to end of list
    if(list1){ //if(list1!= null)
        dummy.next = list1
    }else{
        dummy.next = list2
    } 

   return head.next //Return globally update head.next
};