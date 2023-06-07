/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let output = [];
    let adjList = new Set();

   
    function getPreq(node){
        let preqs = [];
        for(let key of Object.keys(adjList)){
            if(adjList[key].has(node)){
                preqs.push(key);
            }
        }
        return preqs;
    }

    function bfs(node){

        let queue = [node];
        while(queue.length > 0){
            let currentNode = queue.shift();
            if(!output.includes(currentNode)) output.push(currentNode);
            for(let decendent of getPreq(currentNode)){
                adjList[decendent].delete(currentNode);
                if(adjList[decendent].size == 0){
                    queue.push(decendent);
                }
            }
            
        }

    }
   
    for (let i = 0; i < numCourses; i++){
        adjList[i] = new Set();
    }

    for (let [key, preq] of prerequisites){
        adjList[key].add(`${preq}`);
    } 

    for (let key of Object.keys(adjList)){
        if (adjList[key].size == 0){
            bfs(key);
        }
    }

    for (let key of Object.keys(adjList)){
        if(adjList[key].size != 0) return [];
    }


    console.log(adjList);
    return output;
};


// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

