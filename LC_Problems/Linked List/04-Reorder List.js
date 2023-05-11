/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

 //O(n)
 var reorderList = function(head) {

    /*
        1. Find the middle of LL using Tortoise & Hare
        2. Reverse right LL 
        3. Combine both LL 
        4. No return is needed since LL is ordered in place     

    */

    //Inputs
    let fast = head
    let slow = head
    let midpoint

    //Search for midpoint: Tortoise & Hare
        while(fast.next && fast.next.next){ 

            //Update pointers
            fast = fast.next.next
            slow = slow.next
        }//Exits once the middle is found


    //Break apart LL into (2) at middle
        let curr = slow.next
        slow.next = null


    //Reverse 2nd LL
        let prev = null //Remember that since u broke apart the LL, the prev value of the 1st 
                        //node of the 2nd LL  = null 
        while(curr){
            let next = curr.next //Update next pointer per iteration

            curr.next = prev
            prev = curr
            curr = next
        }
    
    //Combine LL
        let h1 = head //head of 1st LL
        let h2 = prev //head of 2nd LL

        while(h2){
           let next = h1.next //Start from head1

           h1.next = h2      
           h1 = h2 
           h2 = next //Points to next node of h1
        }
    
};