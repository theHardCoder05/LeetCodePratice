/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let visited = new Set()
    let result = 0

    // discovering children nodes
    function discoveringChildNodes(node){
        let childs = [];
        for (let [dy, dx] of [[1, 0], [-1,0], [0,1], [0,-1]]){
            let [newR, newC] = [node[0] + dy, node[1] + dx];
            if (newR < 0 || newC < 0 || newR >= grid.length || newC >= grid[0].length)continue;
            if(grid[newR][newC] === 0) continue;
            if(visited.has(`${newR},${newC}`)) continue;
            childs.push([newR, newC])
            visited.add(`${newR},${newC}`);
        }
        return childs;
    }

    //bfs
    function bfs(row, col){
        let queue  = [];
        queue.push([row, col])
        let IslandSize = 0;
        while(queue.length > 0){
            const currentNode = queue.shift();
            IslandSize++;
            visited.add(`${currentNode[0]},${currentNode[1]}`);
            for(let child of discoveringChildNodes(currentNode)){

                queue.push(child);

            }
        }

        return IslandSize;
    }

    
    // Main driver
    for (let i = 0; i < grid.length; i++){

        for(let j = 0; j < grid[0].length;j++){

            const currentNode = grid[i][j]
            if (currentNode === 0){
                continue
            }

            if (visited.has(`${i},${j}`)) continue;

            let size = bfs(i, j)
            
            if (size > result) result = size;
        }
    }
    return result;

};








