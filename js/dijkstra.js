class Dijkstra {
    static run(graph, startNode) {
        let pq = new PriorityQueue();

        // Set distances to all nodes to be infinite except startNode
        startNode.value = 0;
        pq.enqueue(startNode);
        graph.nodes.forEach(node => {
            if (!node.position.equals(startNode.position)) node.value = Infinity;
            node.prev = null;
            node.edges.forEach(element => {
                element.isBold = false;
            });
        });

        while (!pq.isEmpty()) {
            let minNode = pq.dequeue();

            let currNode = minNode.data;
            let weight = minNode.priority;

            minNode.edges.forEach(edge => {
                let alt = minNode.value + edge.weight;
                if (alt < edge.node2.value) {
                    edge.node2.value = alt;
                    edge.node2.prev = minNode;
                    pq.enqueue(edge.node2);
                }
            });
        }

        // graph.nodes.forEach(node => {
        //     if (node.prev)
        //         node.prev.edges.forEach(element => {
        //                 if (element.node2.position.equals(node.position))
        //                     element.isBold = true;
        //         });
        // });

        let target = graph.nodes[graph.nodes.length - 1];
        while (target.prev) {
            for (let i = 0; i < target.prev.edges.length; i++) {
                if (target.prev.edges[i].node2.position.equals(target.position)) {
                    target.prev.edges[i].isBold = true;
                    break;
                }
            }
            target = target.prev;
        }
    }
}