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
var maxDepth = function(root) {
    
    let depth = 0;

    function isLeaf(node){
        
        if(node.left === null && node.right === null){
            return true;
        }
        return false;
    }

    function dfs(node, progress) {
     //base cases
     if(node === null) return;
     
     if(isLeaf(node)) {
        if(progress > depth) depth = progress;
        return;
     }

    dfs(node.left, progress + 1);
    dfs(node.right, progress + 1);

    }

    dfs(root, 1);
    return depth;
};

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3