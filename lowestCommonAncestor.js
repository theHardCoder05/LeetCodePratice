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
var lowestCommonAncestor = function(root, p, q) {
    
    let output = 0;
    let progress = [];
    let pPath = [];
    let qPath = [];
  
    function dfs(node){
        
        if(node.val == p.val){
            pPath = [...progress, node.val];
        }
        if(node.val == q.val){
            qPath = [...progress, node.val];
        }

        if(node.left == null && node.right == null) {
            return;
        }

        progress.push(node.val);
        if(node.left)dfs(node.left);
        if(node.right)dfs(node.right);
        progress.pop();

    }

    dfs(root);
    
    for(let item of pPath){
        if(qPath.includes(item)){
            output = item;
        }
    }

    return new TreeNode(output);
};



// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.