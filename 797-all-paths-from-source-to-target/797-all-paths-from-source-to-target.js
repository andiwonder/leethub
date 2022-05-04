/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let target = graph.length - 1;
    let path = [0];
    let results = [];
    
    const backtrack = (currNode, path) => {
        if(currNode === target) {
            results.push([...path]);
            return;
        }
        for(let el of graph[currNode]) {
            path.push(el);
            backtrack(el, [...path]);
            path.pop();
        }
    };
    
    backtrack(0 , path);
    return results;
};