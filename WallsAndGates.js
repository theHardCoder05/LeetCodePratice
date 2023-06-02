function wallsAndGates(){

    const INF = 2147483647;
    let visited = new Set();
    let output = [];
    let progress = [];
    let gates = [];

    // getChilds function
    function getChilds(node){
        let childs = [];
        for (let [dy, dx] of [[0,-1],[0,1],[1,0],[-1,0]]){
            let [newR, newC] = [[node[0] + dy, node[1] + dx]];
            if(newR < 0 || newR >=rooms.length || newC < 0 || newC >= rooms.length) continue;
            if(rooms[newR][newC] === -1) continue;
            if(visited.has(`${newR},${newC}`)) continue;
       
            childs.push([[newR],[newC]]);
        }
        return childs;
    }

    // BFS 

    function bfs(gates){
        let queue = gates;
        let count = 0;
        while(queue.length > 0){
            let size = gates.length;
           
            for (let i = 0; i < size; i++){
                let node = queue.shift();
                rooms[node[0],node[1]] = count;
                for(let child of getChilds(node)){
                    visited.add(`${child[0]},${child[1]}`);
                    queue.push(child);
                   
                }
            }
            count += 1
        }
    }
    // main driver

    for(let i = 0; i < rooms.length;i++){
        for(let j = 0 ; j < rooms[0].length; j++){
            let currentRoom = rooms[i][j];
            if(currentRoom === -1) continue;
            if(currentRoom === INF) continue;
            if(visited.has(`${currentRoom[0]},${currentRoom[1]}`)) continue;
            gates.push(currentRoom);
            bfs(gates);
        }
    }




    return output;
}


rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]

console.log(wallsAndGates(rooms));