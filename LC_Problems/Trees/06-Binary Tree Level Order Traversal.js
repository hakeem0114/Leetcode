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
 * @return {number[][]}
 */

 //T: O(n) since 2nd while loop is only for each breadth
 //S: O(n) input node into queue per iteration
 var levelOrder = function(root) {

    //BFS with each breadth in its own array/ Bucket Sort
        /*
            root = 3  //Breadth 1
            root = 9 , 20 //Breadth 2
        */

    //Edge Case 1
     if(root == null) return []


    //bfs
    let result = []
    let queueBFS = []
    
    //Push 1st root into queueBFS //3
    queueBFS.push(root)

    //Traverse tree using level order (BFS)
    while(queueBFS.length){

        //Traverse each breadth to create breadth arrays
        let breadth = []
        let breadthSize = queueBFS.length
        while(breadthSize){
            let currNode = queueBFS.shift() //Dequeue its far left node

            //Check if that root node had a left/right child,
            //push into queueBFS so it can check if that leaf node also have a another child
            if(currNode.left){
                queueBFS.push(currNode.left)
            }
            if(currNode.right){
                queueBFS.push(currNode.right)
            } 

            //Push the current Node's value into the breadth array
            breadth.push(currNode.val)

            //Decrement breadthSize to exit loop
            breadthSize--

        }
            //After traversing each breadth
            result.push(breadth)

    }
    return result
};