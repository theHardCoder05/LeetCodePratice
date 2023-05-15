// Get childs function
//TODO: debug to find out why not working...
function getChilds(node, board, visited, char) {
    let childs = [];
    for (let [dy, dx] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      let [newR, newC] = [node[0] + dy, node[1] + dx];
      if (
        newR < 0 ||
        newR >= board.length ||
        newC < 0 ||
        newC >= board[0].length
      )
        continue;
      if (visited.has(`${newR},${newC}`)) continue;
      if (char !== board[newR][newC]) continue;
      childs.push([newR, newC]);
    }
    return childs;
  }


function dfs(row, col, board, tempArray, visited, word, index, output){

    tempArray.push(board[row][col]);
    visited.add(`${row},${col}`);

    if(tempArray.length === word.length){
        if(tempArray.join("") === word){
            output.value = true;
        }
        return;
    }
    for (let child of getChilds([row,col], board, visited, word[index + 1])){
        dfs(child[0], child[1], board, tempArray, visited, word, index + 1, output)
    }

    visited.delete(`${row},${col}`);
    tempArray.pop();
  
}


  // word searching from a grid
function wordSearch(board, word) {
    let output= { value: false };
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        let currentChar = board[i][j];
        if (currentChar !== word[0]) continue;
       dfs(i, j, board, [], new Set(), word, 0, output);
      }
    }
    return output.value;
  }
  

  
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"

console.log(wordSearch(board, word));