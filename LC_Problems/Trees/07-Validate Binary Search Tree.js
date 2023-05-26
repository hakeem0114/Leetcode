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
 * @return {boolean}
 */

 //T: O(n)
 //S: O(n)
 var isValidBST = function(root) {

    //Constraints 
        // leftLeaf < root & rightLeaf > root
        //-231 <= Node.val <= 231 - 1 = -infinity<node.val<+infinity
        // leftBoundary (left leaf)< node.val < rightBoundary (right leaf)

    function recursionValid(min, nodeRoot, max){
        //Edge Case 1:
        if(nodeRoot === null)return true;

        //Edge Case 2: Opposite of BST rule (if it fails right/left subtree traversal, it fails)
        if( nodeRoot.val > max || nodeRoot.val < min )return false;

        //Traverse BST & update left & right boundary per recursion
        //For left: root =max, everything else is less & the min gets closer to -infinity per recursion
        //Opposite for right side
       return recursionValid(min, nodeRoot.left, nodeRoot) && recursionValid(nodeRoot, nodeRoot.right,max)

    }

    //Contstraints
    let lowerBound = Math.pow(-2,31)
    let uppperBound = Math.pow(2,31)

    //Call function & return it as well since this is inside the isValidBST function & it needs to return something 
   return recursionValid(lowerBound, root,uppperBound)
    
};