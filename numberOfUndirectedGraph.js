
function getUndirectedGraph(n, edges){

    let visited = new Set();
    let adjList = {};
    let output = 0;

  

    function dfs(node, adj, visited){
        visited.add(node);
        for(let neighbour of adj[node]){
            if(visited.has(neighbour))continue;
            dfs(neighbour, adj, visited);
        }
    }

    // create a adjection list
    for(i = 0; i < n; i++){
        adjList[i] = new Set();
    }

    for(let [a, b] of edges){
        adjList[a].add(b);
        adjList[b].add(a);
    }

    for(let i = 0; i < n;i++){
        if(visited.has(i)) continue;
        dfs(i, adjList, visited);
        output += 1;
    }
    return output;
}



n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]

console.log(getUndirectedGraph(n, edges));