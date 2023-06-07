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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    
    if(root == null) return false;

    let output = false;

    function dfs(node, progress){
       
        if(node.left == null && node.right == null){
            progress += node.val;
            if(progress == targetSum){
                output = true;
            }
            return;
        }

        
        if(node.left)dfs(node.left, progress + node.val);
        if(node.right)dfs(node.right, progress + node.val);
    

    }

    dfs(root, 0);
    return output;
};

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.