

function findMaxPathSum(tree){
    let maxSum = -Infinity;

    function findMaxPathSum(node){
        if(node === null) return 0;

        const leftPathSum = Math.max(0, findMaxPathSum(node.left));
        const rightPathSum = Math.max(0, findMaxPathSum(node.right)); 

        maxSum = Math.max(maxSum, node.val + leftPathSum + rightPathSum);

        return node.val + Math.max(leftPathSum , rightPathSum);
    }

    findMaxPathSum(tree);
    return maxSum;
}
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
  
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);


//   const root = new TreeNode(-10);
// root.left = new TreeNode(9);
// root.right = new TreeNode(20);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);
  
// root = [1,2,3]

console.log(findMaxPathSum(root));