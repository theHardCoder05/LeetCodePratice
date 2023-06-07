# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def sumNumbers(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
       
        sum = [0]
        self.findMaxPath(root, [], sum)
        return sum[0]


    def findMaxPath(self, node, temp, sum):
     
        if node.left is None and node.right is None:
            sum[0] += int("".join(map(str, temp + [node.val])))
            return
        
        temp.append(node.val)
        if node.left:
            self.findMaxPath(node.left, temp, sum)
        if node.right:
            self.findMaxPath(node.right, temp, sum)
        
        temp.pop()

        return sum[0]