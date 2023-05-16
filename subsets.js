function subsets(){
let result = [];
let tempArray = [];

    function dfs(index){
        if(index == nums.length){
            result.push([...tempArray]);
            return;
        }
        tempArray.push(nums[index]);
        dfs(index + 1);
        tempArray.pop();
        dfs(index + 1);
    }
dfs(0);
return result;
}

nums = [1,2,3]

console.log(subsets(nums));