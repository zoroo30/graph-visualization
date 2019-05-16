// create graph object
let graph = new Graph(false);

// only run ones when page is loaded
function setup() {
  createCanvas(640, 360);

  //add some random nodes to the graph
  graph = generateRandomGraph(50, 10, true)
}

// draw loop
function draw() {
  background(200);
  graph.draw();

  if (!graph.isDirected)
    // runs prim's 
    Prims.run(graph);

}

// when mousePressed add new node in mouse position
function mousePressed() {
  let newNode = graph.addNode(createVector(mouseX, mouseY));
  if (newNode)
    graph.nodes.forEach(node => {
      graph.addEdge(newNode, node);
    });
}

function generateRandomGraph(numberOfNodes, numberOfEdges, isDirected) {
  let graph = new Graph(isDirected);

  // add nodes to the graph
  for (let i = 0; i < numberOfNodes; i++) {
    let v = createVector(random(width), random(height));
    graph.addNode(v);
  }

  let len = graph.nodes.length;

  // make sure the graph is connected (in case of undirected graphs)
  if (!graph.isDirected)
    for (let i = 0; i < len; i++)
      graph.addEdge(graph.nodes[i], graph.nodes[Math.round(random(len - 1))]);


  // add edges to the graph
  for (let i = 0; i < numberOfEdges; i++)
    graph.addEdge(graph.nodes[Math.round(random(len - 1))], graph.nodes[Math.round(random(len - 1))]);

  return graph;
}