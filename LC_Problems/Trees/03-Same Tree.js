/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

 //T: O(p+q)
 //S: O(1)
 var isSameTree = function(p, q) {
    if(p == null && q ==null)return true

    if(p == null || q ==null)return false

    if(p.val == q.val){

      //return truthy if both left & right leaf nodes are the same
       return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
       
    }return false
};