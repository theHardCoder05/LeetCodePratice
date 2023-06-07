/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let output = 0;
    let visited = new Set();
  
    function dfs(row, col){
                 console.log(`${row},${col}`);
        visited.add(`${row},${col}`);
        for(let [dy, dx] of [[0,1],[0,-1], [1,0],[-1,0]]){
            let [newR, newC] = [row + dy, col + dx];
            if(newR < 0 || newR >= grid.length || newC < 0 || newC >= grid[0].length) continue;
            if(visited.has(`${newR},${newC}`))continue;
            if(grid[newR][newC] === "0") continue;
            dfs(newR, newC);
         
        }
    }

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length;j++){
            let currentNode = grid[i][j];
            if(currentNode === "0") continue;
            if(visited.has(`${i},${j}`))continue;
            output += 1
   
            dfs(i, j); 
        }
    }
    
    return output;
};


// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Input: grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
//   Output: 1