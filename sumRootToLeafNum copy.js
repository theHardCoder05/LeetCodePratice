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
var sumNumbers = function(root) {

    let concentenateNumbers = 0;
    let progress = [];
    function findPathSum(node){

        if (node.left == null && node.right == null) {
           
            concentenateNumbers+= parseInt([...progress, node.val].join(""));
            
            return;
        }
        
        progress.push(node.val);
       
        if(node.left) findPathSum(node.left);
       
        if(node.right) findPathSum(node.right);
        progress.pop();

    }   

  
    findPathSum(root);

    return concentenateNumbers;
};


// You are given the root of a binary tree containing digits from 0 to 9 only.

// Each root-to-leaf path in the tree represents a number.

// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

// A leaf node is a node with no children.

// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.