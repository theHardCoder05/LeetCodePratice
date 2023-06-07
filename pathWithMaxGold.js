/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let maxgold = 0;
    let visited = new Set();
    let counter = 0;



    function getNeighbour(node){
         let result = [];
        
        for (let [dy, dx] of [[1, 0],[-1, 0],[0, -1],[0, 1]]) {
            let [newR, newC] = [node[0] + dy, node[1] + dx];
            if (newR < 0 || newC < 0 || newR >= grid.length || newC >= grid[0].length) continue;
            if (grid[newR][newC] === 0) continue;
            if (visited.has(`${newR},${newC}`)) continue;
            result.push([newR, newC]);
        }
        
        return result;
    }

    function dfs(node){

        let [i, j] = node;
        counter +=grid[i][j];
        maxgold = Math.max(maxgold, counter);
        visited.add(`${i},${j}`);
        for (let child of getNeighbour([i, j])){
      
            dfs(child);
        }

        counter -=grid[i][j];
        visited.delete(`${i},${j}`);
    }

   //main driver 
    for(let i = 0; i < grid.length;i++){
        for(let j = 0; j < grid[0].length;j++){
            let currentNode = grid[i][j];
            if(currentNode === 0) continue;
            dfs([i,j]);
        
        }
    }

    return maxgold;
};

// In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.

// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.