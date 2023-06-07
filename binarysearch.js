
// class Solution(object):
//     def search(self, nums, target):

//         return self.searchHelper(0, len(nums) - 1, target, nums)
    
//     def searchHelper(self, left, right, target, nums):
        
//         while left <= right:
//             midindex = (left + right)// 2
//             potentialMatch = nums[midindex]
//             if target == potentialMatch:
//                 return midindex
//             elif target < potentialMatch:
//                 right = midindex - 1
//             else:
//                 left = midindex + 1
//         return -1


// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.