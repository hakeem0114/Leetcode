/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

 //T: O(n) traverse tree using stack DS
 //N: O(n) storing each value in stack
 var lowestCommonAncestor = function(root, p, q) {
    function dfs(node){
        
        if(!node)return null
        if(node == p || node ==q)  return node
 
        const left  = dfs(node.left)
        const right  = dfs(node.right)
 
         //If left & right node exists, return it ancestor
        if(left && right)return node
        if(!left) return right
        if(!right) return left
    }
 
    return dfs(root)
 };