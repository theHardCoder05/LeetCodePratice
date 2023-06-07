/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let visited = new Set();
    let timer = -1;
    let rottenOranges = [];
    let freshOranges = 0;
    
    function getChilds(node){
        let childs = [];
        for (let [dy, dx] of [[0,1], [0,-1], [1,0], [-1,0]]){
            let [newR, newC] = [node[0] + dy, node[1] + dx];
            if (newR < 0 || newR >= grid.length || newC < 0 || newC >= grid[0].length) continue;
            if (visited.has(`${newR},${newC}`)) continue;
            if (grid[newR][newC] == 0) continue;
            if (grid[newR][newC] == 2) continue;
            childs.push([newR, newC]);

        }
        return childs;
    }

    function bfs(){

        while (rottenOranges.length > 0){

            let size = rottenOranges.length;
            for (let i = 0; i < size; i++){
                currentOrange = rottenOranges.shift();
                for (let child of getChilds(currentOrange)){
                   
                    grid[currentOrange[0]][currentOrange[1]] = 2;
                    visited.add(`${child[0]},${child[1]}`);
                    rottenOranges.push(child);
                    freshOranges -= 1;
                }
              
            }
            
            timer += 1;
        }

    }

 
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length;j++){
         
            let currentOrange = grid[i][j];
            if (currentOrange == 1) {
                freshOranges += 1;
                continue;
            }
            if (currentOrange == 0) continue;
        
            rottenOranges.push([i, j]);
        }
    }

    if (freshOranges == 0) return 0;
    bfs();
 
    
    if (freshOranges == 0) return timer;

    return -1;
};


// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4