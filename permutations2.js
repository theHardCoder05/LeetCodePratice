
function permuteUnique(nums) {
    let output = [];
    let progress = [];
    let deDup = new Set();
 
     function dfs(bucket){
        
 
         if(progress.length == nums.length){
             let progressCopy = [...progress];
             
             
           
             if(!deDup.has(progressCopy.join(","))){
                output.push([...progress]);
             }
             deDup.add(progressCopy.join(","));
             return;
         }
 
         for(let i = 0; i < bucket.length;i++){
             progress.push(bucket[i]);
             let newBucket = [...bucket.slice(0, i), ...bucket.slice(i + 1)];
             dfs(newBucket);
             progress.pop();
         }
 
     }
 
     dfs(nums);
     
 
    return output;
 };


console.log(permuteUnique([1,1,2]));