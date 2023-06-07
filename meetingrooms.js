// class Solution(object):
//     def canAttendMeetings(self, intervals):
//         """
//         :type intervals: List[List[int]]
//         :rtype: bool
//         """

//         sortedInterval= sorted(intervals, key= lambda x: x[0])
//         for x in range(1, len(sortedInterval)):
//             previousStart, previousEnd = sortedInterval[x - 1]
//             currentStart, currentEnd = sortedInterval[x]
//             if previousEnd > currentStart:
//                 return False
//         return True
        
// Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: false