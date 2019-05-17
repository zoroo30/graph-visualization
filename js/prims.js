class Prims {
    static run(graph) {
        var reached = [];
        var unreached = [];

        for (var i = 0; i < graph.nodes.length; i++) {
            unreached.push(graph.nodes[i]);//beginning all the vertices are unreached
            graph.nodes[i].edges.forEach(element => {
                element.isBold = false;
            });
        }

        reached.push(unreached[0]);//random point for the reached
        unreached.splice(0, 1);

        while(unreached.length > 0){
            var record = Infinity;//beginning the dist record is 10000
            var rIndex;
            var uIndex;
            var eIndex;

            for (var i = 0; i < reached.length; i++) {
                let edges = reached[i].edges;
                for (var j = 0; j < edges.length; j++) {
                    var v1 = reached[i].position;
                    var v2 = edges[j].node2.position;

                    let unreachedIndex = Prims.contains(unreached,v2);
                    if(unreachedIndex == -1) continue;

                    var d = edges[j].weight;

                    if (d < record) {
                        record = d;//update the record to make the smallest dist in the record
                        rIndex = i;
                        eIndex = j;
                        uIndex = unreachedIndex;
                    }
                }
            }

            // stroke(255, 0, 0);
            // strokeWeight(2);
            reached[rIndex].edges[eIndex].isBold = true;
            //line(reached[rIndex].position.x, reached[rIndex].position.y, unreached[uIndex].position.x, unreached[uIndex].position.y);
    
            reached.push(unreached[uIndex]);//random point for the reached
            unreached.splice(uIndex, 1);

        }
    }

    static contains(array, item) {
        for (let index = 0; index < array.length; index++) {
            if (array[index].position.equals(item)) {
                return index;
            }
        }
        return -1;
    }
}