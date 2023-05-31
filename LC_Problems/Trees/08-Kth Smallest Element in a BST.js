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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    //Inorder Traversal array to hold: left, right, root
    //array to hold ordered values
    let arr = [];

    //dfs to get ordered arr of values
    dfsInorder(root, arr);

    getKthVal(arr, k);
    
};

//Inorder Traversal array to hold: left, right, root
//array to hold ordered values
function dfsInorder(root, arr){
    
    //Edge Case 1: Undefined root => end of BST
    if(!root)return root;

    //Check left subtree & add it to the arr
    dfsInorder(root.left, arr);
    arr.push(root.val);

    //Check right subtree
    dfsInorder(root.right);
    arr.push(root.val) ;
}

//Loop through dfsInorder arr to get k number
function getKthVal(arr, k){
    //Loop through array & pick the kth element 
    
    let kSmallest = 0;
    //starting from 0 so kth is index before k-index
    for(let i=0; i<k; i++){
        kSmallest = arr[i];
    }
    return kSmallest;
}
