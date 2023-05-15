/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let output = false;
    let progress = [];

    function getChilds(node, visited, char){

        let childs = [];
        for(let [dy, dx] of [[0,1],[0,-1],[1,0],[-1,0]]){
            let [newR, newC] = [node[0] + dy, node[1] + dx];
            if (newR < 0 || newR >= board.length || newC < 0 || newC >= board[0].length) continue;
            if (visited.has(`${newR},${newC}`)) continue;
            if(char != board[newR][newC]) continue;
    
            childs.push([newR,newC]);
        }
        return childs;
    }


    //dfs
    function dfs(row, col, visited, progress, index){
 
        progress.push(board[row][col]);
        visited.add(`${row},${col}`);
        
        if(progress.length == word.length) {
           console.log(progress)
            if(progress.join("") == word){
                
                output = true;
            }
       

        return;
        }

        for(let child of getChilds([row,col], visited, word[index + 1])){

           dfs(child[0],child[1], visited, progress, index + 1);
        }
        visited.delete(`${row},${col}`);
        progress.pop();
        
        
    }

    // Driver
    for(let i =0; i < board.length;i++){
        for(let j = 0;j < board[0].length;j++){
            let currentChar = board[i][j];
            if (currentChar != word[0]) continue;
            dfs(i,j, new Set(), [], 0);

        }
    }

    
    return output;
};

board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

console.log(exist(board, word));