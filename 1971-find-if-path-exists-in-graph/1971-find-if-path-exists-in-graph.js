/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let graph = {};

    for(let edge of edges) {        
        if(graph[edge[0]] === undefined) {
            graph[edge[0]] = [edge[1]];
        } else {
            graph[edge[0]].push(edge[1]);
        }
        if(graph[edge[1]] === undefined) {
            graph[edge[1]] = [edge[0]];
        } else {
            graph[edge[1]].push(edge[0]);
        }
    }
    
    let stack = [source];
    let visited = new Array(n).fill(false);
    
    while(stack.length !== 0) {
        let node = stack.pop();
        if(node == destination) return true;
        if(visited[node]) continue;
        visited[node] = true;
        
        for(let neighbor of graph[node]) {
            stack.push(neighbor);
        }
    }
    
    return false;
};