// Implement a Graph class with methods to add verties,add verties,add edges, and perform a breadth-first search(BFS).

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

    bfs(startVertex){
        if(!this.graph[startVertex]){
            console.log(`vertex${startVertex} not found in the graph`);
            return [];
        }

        const visited = new Set();
        const queue = [];
        const bfsOrder = [];

        visited.add(startVertex);
        queue.push(startVertex);

        while(queue.length > 0){
            const currentVertex = queue.shift();
            bfsOrder.push(currentVertex);

            for( const neighbor of this.graph[currentVertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        return bfsOrder;
    }
}

const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "C");

console.log("BFS starting from vertex A:", g.bfs("A"));