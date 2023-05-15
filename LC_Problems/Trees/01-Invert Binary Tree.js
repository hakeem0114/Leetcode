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
 * @return {TreeNode}
 */
//T: O(n)
//S: O(h)
var invertTree = function(root) {
    if(root){
        //If root exits, invert tree
        [root.left, root.right] =[ invertTree(root.right), invertTree(root.left)]
    }return root //If root is empty or null
};