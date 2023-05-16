function courseSchedule(){
    let output = true;
    let visited = new Set();
    let adjList = new Object();
    
// getChilds function
    function getChilds(node){

        let childs = [];
        for(let key of Object.keys(adjList)){
            if(adjList[key].has(node)) childs.push(key);
            
        }
        return childs;

    }
// bfs or dfs will work in this case. I choose bfs
    function bfs(key){
        let queue = [];
        queue.push(key);
        while(queue.length > 0){
            let currentKey =  queue.shift();
            visited.add(`${currentKey}`);
            for (let child of getChilds(currentKey)){
                adjList[child].delete(currentKey);
                if(adjList[child].size == 0) queue.push(child);
            }
        }
    }


    //We need adjacency list
    for(let i = 0; i < numCourses; i++){
        adjList[i] = new Set();
    }

    for(let [key,preq] of prerequisites){
        adjList[key].add(`${preq}`);
    }
    //start iterating the adjList
    for(let key of Object.keys(adjList)){
        if(adjList[key].size == 0) bfs(key);
    }

    if(visited.size != numCourses) output = false;
    console.log(visited);
    console.log(numCourses);
return output;
}


numCourses = 2, prerequisites = [[1,0]]

console.log(courseSchedule(numCourses, prerequisites));