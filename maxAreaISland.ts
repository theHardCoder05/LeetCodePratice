function maxAreaOfIsland (grid: number[][]): number {
    const visited = new Set<string>();
    let maxIslandSize = 0;

    function getChilds(node: [number, number]): [number, number][] {
        const childs: [number, number][] = [];
        for (const [dy, dx] of [[1,0],[-1,0],[0,1],[0,-1]]) {
            const [newR, newC] = [node[0] + dy, node[1] + dx];
            if (newR < 0 || newR >= grid.length || newC < 0 || newC >= grid[0].length) continue;
            if (grid[newR][newC] === 0) continue;
            if (visited.has(`${newR},${newC}`)) continue;
            childs.push([newR, newC]);
            visited.add(`${newR},${newC}`);
        }
        return childs;
    }

    function bfs(row: number, col: number): number {
        const queue: [number, number][] = [];
        queue.push([row, col]);
        let size = 0;
        while (queue.length > 0) {
            const [row, col] = queue.shift()!;
            size++;
            visited.add(`${row},${col}`);

            for (const child of getChilds([row, col])) {
                queue.push(child);
            }
        }
        return size;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const currentNode = grid[i][j];
            if (visited.has(`${i},${j}`) || currentNode === 0) continue;
            const tempResult = bfs(i, j);
            if (tempResult > maxIslandSize) maxIslandSize = tempResult;
        }
    }

    return maxIslandSize;
}


// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0

// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.