

function firstMissingPossitive(nums){


let missingNumber = 0;

let numsSet = new Set();

if(nums.length == 1 && nums[0] < 0 ) return 1;
if(nums.length == 1 && nums[0] == 1 ) return nums[nums.length -1] + 1;
nums.sort((a,b) => a - b);
for(let num of nums){
    numsSet.add(num);
}
for(let i = 1; i < nums.length + 1;i++){
    if(numsSet.has(i)) continue;
    missingNumber = i;
    return missingNumber;
}




return nums[nums.length -1] + 1
}

nums =[100,95,97,12,93,6,92,90,58,86,67,64,85,82,80,62,75,79,78,31,65,14,59,19,71,70,52,13,33,35,10,44,40,9,2,39,50,28,22,46,48,45,54,53,49,20,51,60,4,41,32,83,24,57,38,42,17,29,23,34,66,43,55,21,30,26,11,27,5,61,68,84,63,72,25,36,73,56,76,1,3,47,16,81,7,37,15,74,77,87,89,8,18,88,69,91,96,94,98,99]


console.log(firstMissingPossitive(nums));