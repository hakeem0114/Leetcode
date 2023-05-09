/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 //O(n+k) = O(n) since k is only a certain number of nodes
 var hasCycle = function(head) {
    //Use the TORTOISE & HARE algorigthm
    //Fast pointer goes twice (head.next.next) as fast as slow pointer
        //If both the fast & slow pointer ever meet, there is a cycle

    let fast = head
    let slow = head

    if(!head) return false

    while(fast !== null){ //Loop through nodes

        //If fast pointer has not reached the end of the LL
        if(fast.next){
            fast = fast.next.next
            slow = slow.next
        }else{
            //End of LL and no cycle
            return false
        }

        //If at cycle is found: fast meets slow
        if(fast ===  slow) return true
    }
    return false
};