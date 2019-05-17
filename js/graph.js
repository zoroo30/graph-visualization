class Graph {
    constructor(isDirected) {
        this.isDirected = isDirected;
        this.nodes = [];
    }

    addNode(position) {
        // check if unique node
        let isUnique = true;
        for (let node of this.nodes) {
            if (node.position.equals(position)) {
                isUnique = false;
                break;
            }
        }

        // if not return
        if (!isUnique) return;

        // if unique add it
        let newNode = new Node(position);
        this.nodes.push(newNode);

        return newNode;
    }

    addEdge(node1, node2, weight) {
        node1.addEdge(node2, weight);
        if (!this.isDirected)
            node2.addEdge(node1, weight);
    }

    draw() {
        this.nodes.forEach(node => {
            node.draw();
        });
    }
}