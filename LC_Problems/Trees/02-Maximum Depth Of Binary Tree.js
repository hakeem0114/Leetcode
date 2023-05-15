/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 //T: O(n)
 //S:O(n)

 //Recursive solution
 var maxDepth = function(root) {
    if(!root) return 0

    // 1 for the existing root
    // if left & right exits, add 1 for next iteration
    return 1 + Math.max( maxDepth(root.left), maxDepth(root.right) )
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 //T: O(n)
 //S:O(n)
var maxDepth = function(root) {
    
    //BFS

    //Edge Case 1
    if(!root) return 0

    //Depth counters
    let depth =0

    //Create queue
    let bfsQueue = []

    //Enqueue root to tail of bfsQueue
    bfsQueue.push(root)

    //Iterate through subtrees while nodes are in queue
    while(bfsQueue.length){
        
        //Loop through each breadth level
        for(let i=0; i< bfsQueue.length; i++){
            
            //Store head of queue in bfsQueue
            let currNode = bfsQueue.shift()

            //If current node has leaf node, push into queue
            if(currNode.left){
                bfsQueue.push(currNode.left)
            }
            if(currNode.right){
                bfsQueue.push(currNode.right)
            }
        }
        depth++

    }
    return depth

};