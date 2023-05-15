function backtracking(array){


    function dfs(index, tempArray, result){
        if(index == array.length){
            result.push([...tempArray]);
            return;
        }
        for(let i = index; i < array.length;i++){
            tempArray.push(array[i]);
            dfs(i, tempArray, result)
        }
        tempArray.pop();
        dfs(i + 1, tempArray, result)
    }
    let result = [];
    dfs(0, [], result);

    return result;

}


let array = [1,2,3]
backtracking(array);