// Rotten Oranges - BFS question


function RottenOranges(grid){


let visited = new Set();
let RottenOranges = [];
let FreshOrangesCount = 0;
let timer = -1;


// getChilds function
    function getChilds(node){
        let childs =  [];
        for(let [dy, dx] of [[0,1],[0,-1],[1,0],[-1,0]]){
            let [newR, newC] = [node[0] + dy, node[1] + dx];
            if(newR < 0 || newR >= grid.length || newC < 0 || newC >= grid[0].length) continue;
            if(visited.has(`${newR},${newC}`)) continue;
            if(grid[newR][newC] == 0)continue;
            if(grid[newR][newC] == 2)continue;
            childs.push([newR,newC]);
        }
        return childs;
    }
// bfs function - Make the RottenOranges as a queue
    function bfs(){
    while (RottenOranges.length > 0){
        let size = RottenOranges.length;
            for(let i = 0; i < size; i++){
                currentNode = RottenOranges.shift();
                for(let child of getChilds(currentNode)){
                    grid[currentNode[0]][currentNode[1]] = 2;
                    visited.add(`${child[0]},${child[1]}`);
                    RottenOranges.push(child);
                    FreshOrangesCount -= 1;
                }
            }

            timer += 1;
        
        }
    }

// main driver

for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[0].length; j++){
        let currentOrange = grid[i][j];
        if(currentOrange == 0) continue;
        if(currentOrange == 1) {
            FreshOrangesCount+=1;
            continue;
        }
        RottenOranges.push([i, j]);
    }
}

if(FreshOrangesCount == 0) return 0;
// Start BFS
bfs();


if(FreshOrangesCount == 0) return timer;

return -1;


}

let grid = [[2,1,1],[1,1,0],[0,1,1]]
console.log(RottenOranges(grid));


