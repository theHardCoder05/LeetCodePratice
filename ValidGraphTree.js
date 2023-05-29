

function IsValidTree(n, edges){
    let output = false;
    let visited = new Set();
    let adjList = new Object();

    function getChild(node){
        return adjList[node];
    }


    function dfs(node, parent){
        
        if(visited.has(node)) return;
        visited.add(node);
        for (let child of getChild(node)){
            if (child === parent)continue;
            if(visited.has(child)) output = true;
            dfs(child, node);
           
        }
    }
    
    
    for(let i =0; i < n; i++){
        adjList[`${i}`] = [];
    }

    for(let [a, b] of edges){
        adjList[a].push(`${b}`);
        adjList[b].push(`${a}`);
    }
  
    dfs("0","-1");

    return output;
}

 n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]

 console.log(IsValidTree(n, edges));