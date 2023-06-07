// class Solution(object):
//     def validTree(self, n, edges):
//         """
//         :type n: int
//         :type edges: List[List[int]]
//         :rtype: bool
//         """
//         if len(edges) != n - 1:
//             return

//         isCycle = False
//         visited = set()
//         adjList = {}


//         def dfs(node, parent):
//             if node in visited:
//                 return
//             visited.add(node)
//             for neighbour in adjList[node]:
//                 if neighbour in visited:
//                     continue
//                 if node == parent:
//                     isCycle = True
//                 dfs(neighbour, node)


//         for i in range(n):
//             adjList[i] = []
        
//         for edge in edges:
//             adjList[edge[0]].append(edge[1])
//             adjList[edge[1]].append(edge[0])

//         dfs(0,-1)


// Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
// Output: true
// You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

// Return true if the edges of the given graph make up a valid tree, and false otherwise.

        
//         print(adjList)
//         return len(visited) == n


