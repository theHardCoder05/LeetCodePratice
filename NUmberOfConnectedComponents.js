/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let result = 0;
    let adj = new Map();
    let visited = new Set();

    for(let i = 0; i < n; i++){
        adj.set(i, []);
    }

    for(let edge of edges){
        adj.get(edge[0]).push(edge[1]);
        adj.get(edge[1]).push(edge[0]);
    }

    for(let i = 0; i < n; i++){
        if(!visited.has(i)){
            dfs(i, adj, visited);
            result += 1;
        }
    }

    return result;
};

function dfs(node, adj, visited){
    visited.add(node);
    for (let neighbour of adj.get(node)){
        if(!visited.has(neighbour)){
            dfs(neighbour, adj, visited);
        }
    }
}


// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.


// Input: n = 5, edges = [[0,1],[1,2],[3,4]]
// Output: 2
