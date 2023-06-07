/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let output = true;
    let visited = new Set();
    let adjList = new Object();

    function getChilds(node){
        let chidls = [];
        for(let key of Object.keys(adjList)){
            if(adjList[key].has(node)) chidls.push(key);
        }
        return chidls;
    }

    function bfs(key){
        let queue = [];
        queue.push(key);
        while (queue.length >0) {
            let currentKey = queue.shift();
            visited.add(`${currentKey}`);
            for (let child of getChilds(currentKey)){
              adjList[child].delete(currentKey);
              if(adjList[child].size == 0) queue.push(child);
            }
        }
    }

    // create the adjList list
    for(let i = 0; i < numCourses; i++){
        adjList[i] = new Set();
    }

    for(let [key,preq] of prerequisites){
        adjList[key].add(`${preq}`);
    }

    for (let key of Object.keys(adjList)){
        if(adjList[key].size == 0) bfs(key); 
    }   

    if (visited.size != numCourses) output = false;
    
    return output;
};

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.