function dfs(graph, visited, node, dest, path){
    visited[node] = 1;
    path.push(node);
    
    if(node === dest){
        console.log(path);
    }
    
    for(adj of graph[node]){
        if(!visited[adj]){
            dfs(graph, visited, adj, dest, path);
        }
    }
    
    visited[node] = 0;
    path.pop();
}


var graph = [[4,3,1],[3,2,4],[3],[4],[]];
var path = [];
var visited = Array.from({length:graph.length},()=>0);
var src = 0, dest = graph.length-1;

dfs(graph, visited, src, dest, path);
console.log("END");
