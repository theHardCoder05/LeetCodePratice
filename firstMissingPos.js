/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let missingNumber = 1;
    let numsSet = new Set();

    if(nums.length == 1 && nums[0] < 0) return 1;

    nums.sort((a,b) => a - b);
    for (let num of nums){
        numsSet.add(num);
    }

    for(let i = 1; i < nums.length + 1;i++){
        if(numsSet.has(i)) continue;
        missingNumber = i;
        return missingNumber;
    }
 
    return nums[nums.length -1] + 1;
};


// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.