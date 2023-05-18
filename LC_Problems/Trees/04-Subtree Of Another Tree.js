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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

 //T: O(m*n) , n = # of nodes in root checks if it matched "m". # of nodes in subtree
 //S: O(m+k), 
 var isSubtree = function(root, subRoot) {

    //Function to check if its the same root
   function isSame(root1, root2){
       if(!root1 && !root2)return true

        //Question mentions same structure & VALUES
       if(!root1 || !root2 || root1.val !== root2.val )return false

       return isSame(root1.left, root2.left) && isSame(root1.right, root2.right)
    }

    //Check each node in root with 2nd root DFS(root, subRoot)
   function dfs(node){

       //Edge Case if falsy
        if(!node)return false //If root is empty, its not the same with subroot

        //Edge Case is truthy
        if(isSame(node, subRoot)){ //If node in "root" passes isSame(root1,root2)
            return true
        }

        //If the edge cases fail,
        //Traverse down each side of the "root" tree to check again if the node !(isSame)as subRoot
        return dfs(node.left) || dfs(node.right)       

    }

    return dfs(root)
};