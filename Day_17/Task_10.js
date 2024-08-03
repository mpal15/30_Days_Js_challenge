// Use the graph class to represnt a simple network and perform BFS to find the shorest path between two nodes


class Graph{
    constructor(){
        this.graph = {};
    }

    addVertex(vertex){
        if(!this.graph[vertex]){
          this.graph[vertex] = [];
        }else{
            console.log(`Vertex ${vertex} already exists.`);
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.graph[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.graph[vertex2]){
            this.addVertex(vertex2);
        }

        this.graph[vertex1].push(vertex2);
        this.graph[vertex2].push(vertex1);
    }

    bfs(startVertex,endVertex){
        if(!this.graph[startVertex] || !this.graph[endVertex]){
            console.log('One or both vertices not found in the graph');
            return [];
        }

        const visited = new Set();
        const queue = [];
        const path = {};

        visited.add(startVertex);
        queue.push(startVertex);
        path[startVertex] = [startVertex]
        while(queue.length > 0){
            const currentVertex = queue.shift();
          
            if(currentVertex === endVertex){
                return path[currentVertex];
            }

            for( const neighbor of this.graph[currentVertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                    path[neighbor] = [...path[currentVertex],neighbor];
                }
            }
        }
       console.log(` No path found between ${startVertex} and ${endVertex}`);
       return [];
    }
}


// Example usage
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "E");

const shortestPath = g.bfs("A", "E");
console.log("Shortest path from A to E:", shortestPath);