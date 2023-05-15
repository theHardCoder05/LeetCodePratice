function combinationSum(candidates, target){

    let result = [];
     dfs(0, candidates, [], target,0, result);
    return result;
}

function dfs(index, candidates, tempArray, target, total,result){
    
    if(target === total){
        result.push([...tempArray]);
        return;
    }
    if(index >= candidates.length || total > target){
        return;
    }
    tempArray.push(candidates[index]);
    dfs(index, candidates, tempArray, target, total + candidates[index], result);
    tempArray.pop();
    dfs(index + 1, candidates, tempArray, target, total, result);
    return result;
}   


candidates = [2,3,6,7], target = 7

console.log(combinationSum(candidates, target));
