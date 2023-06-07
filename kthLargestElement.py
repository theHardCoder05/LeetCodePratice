import heapq
class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """

        heap =[]

        for num in nums:

            if len(heap) < k:
                heapq.heappush(heap, num)

            elif num > heap[0]:
                heapq.heapreplace(heap, num)
        
        return sorted(heap, reverse=True)[-1]
        


# Given an integer array nums and an integer k, return the kth largest element in the array.

# Note that it is the kth largest element in the sorted order, not the kth distinct element.

# You must solve it in O(n) time complexity.

# Input: nums = [3,2,1,5,6,4], k = 2
# Output: 5