class Node {
    constructor(position) {
        this.position = position;
        this.edges = [];
        
        // for dijkstra
        this.value = Infinity;
        this.prev = null;
    }

    addEdge(neighbor, weight) {
        // return if edge already exists
        if(this.isConnectedTo(neighbor)) return;

        // return if self loop
        if(this.position.equals(neighbor.position)) return;

        // calculate distance from new neighbor (edge weight)
        const edgeWeight = weight ? weight : dist(this.position.x, this.position.y,
                        neighbor.position.x, neighbor.position.y);

        // create the new edge
        let newEdge = new Edge(this, neighbor, edgeWeight, false);

        // add it
        this.edges.push(newEdge);
    }

    // Is this node connected to another node?
    isConnectedTo(neighbor) {
        let isConnected = false;
        for(let edge of this.edges) {
            if(edge.node2.position.equals(neighbor.position)){
                isConnected = true;
                break;
            }
        }
        return isConnected;
    }

    draw() {
        // draw edges
        this.edges.forEach(edge => edge.draw());

        // set color and stroke
        fill(0);
        stroke(0);

        // draw node
        ellipse(this.position.x, this.position.y, 16, 16);
    }
}