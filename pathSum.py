# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):

    def hasPathSum(self, root, targetSum):
        if root is None:
            return False
        
        stack = [(root, 0)]

        while stack:
            node, curr_sum = stack.pop()

            if node.left is  None and node.right is None:
                if curr_sum + node.val == targetSum:
                    return True
            
            if node.left:
                stack.append((node.left, node.val + curr_sum))
            if node.right:
                stack.append((node.right, node.val + curr_sum))

        return False   
    
    
    
# Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

# A leaf is a node with no children.

# Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
# Output: true
# Explanation: The root-to-leaf path with the target sum is shown.
