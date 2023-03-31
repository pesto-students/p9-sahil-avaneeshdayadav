function dfs(graph, visited, node, dest){
    visited[node] = 1;
    if(node === dest){
        return true;
    }
    
    for(adj of graph[node]){
        if(!visited[adj]){
            if(dfs(graph, visited, adj, dest))
                return true;
        }
    }
    return false;
}


var n = 6;
var edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
var graph = Array.from({length: n},()=>[]);
var visited = Array.from({length: n}, () => 0);
var src = 0, dest = 5;


// Build the graph
for(edge of edges){
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
}

if(dfs(graph, visited, src, dest))
    console.log("Node "+src+" was found.");
else
    console.log("Node "+src+" was not found.");
