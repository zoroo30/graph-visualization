// create graph object
let graph = new Graph(false);

// only run ones when page is loaded
function setup() {
  createCanvas(640, 360);
  noLoop();
  //add some random nodes to the graph
  graph = generateDijkstraGraph1()

  Dijkstra.run(graph, graph.nodes[0]);
}

// draw loop
function draw() {
  background(200);
  graph.draw();
}

// when mousePressed add new node in mouse position
function mousePressed() {
  let newNode = graph.addNode(createVector(mouseX, mouseY));
  var j = 0;
  if (newNode)
    if (graph.isDirected)
      for (let i = graph.nodes.length-1; i >= Math.floor(j); i--) {
        j += 0.49
        graph.addEdge(graph.nodes[i], newNode);
      }
    else
      graph.nodes.forEach(node => {
        graph.addEdge(newNode, node);
      });


  if (!graph.isDirected)
    // runs prim's 
    Prims.run(graph);
  else
    // runs dijkstra
    Dijkstra.run(graph, graph.nodes[0]);

  draw();
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

function generateDijkstraGraph() {
  let graph = new Graph(true);

  // add nodes to the graph
  for (let i = 0; i < 7; i++) {
    let v = createVector(random(width), random(height));
    graph.addNode(v);
  }

  graph.addEdge(graph.nodes[0], graph.nodes[2], 100);
  graph.addEdge(graph.nodes[0], graph.nodes[1], 3);
  graph.addEdge(graph.nodes[0], graph.nodes[3], 4);
  graph.addEdge(graph.nodes[3], graph.nodes[2], 3);
  graph.addEdge(graph.nodes[3], graph.nodes[4], 8);
  graph.addEdge(graph.nodes[4], graph.nodes[5], 10);
  graph.addEdge(graph.nodes[1], graph.nodes[6], 9);
  graph.addEdge(graph.nodes[4], graph.nodes[6], 50);

  return graph;
}

function generateDijkstraGraph1() {
  let graph = new Graph(true);

  // add nodes to the graph
  for (let i = 0; i < 5; i++) {
    let v = createVector(random(width), random(height));
    graph.addNode(v);
  }

  // 0 >> s
  // 1 >> t
  // 2 >> y
  // 3 >> x
  // 4 >> z

  graph.addEdge(graph.nodes[0], graph.nodes[1], 10);
  graph.addEdge(graph.nodes[0], graph.nodes[2], 5);
  graph.addEdge(graph.nodes[1], graph.nodes[2], 2);
  graph.addEdge(graph.nodes[1], graph.nodes[3], 1);
  graph.addEdge(graph.nodes[2], graph.nodes[1], 3);
  graph.addEdge(graph.nodes[2], graph.nodes[3], 9);
  graph.addEdge(graph.nodes[2], graph.nodes[4], 2);
  graph.addEdge(graph.nodes[3], graph.nodes[4], 4);
  graph.addEdge(graph.nodes[4], graph.nodes[0], 7);
  graph.addEdge(graph.nodes[4], graph.nodes[3], 6);

  return graph;
}