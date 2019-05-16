class Edge {
    constructor(node1, node2, weight, isBold) {
        this.node1 = node1;
        this.node2 = node2;
        this.weight = weight;
        
        // for visualization
        this.isBold  = isBold;
        this.isVisited = false;
    }

    draw() {
        // set colors
        strokeWeight(this.isBold ? 2 : 0.05)
        fill( this.isBold ? (255,0,0) : (0, 0, 0, 0.7*255))

        // draw line between the 2 nodes
        line(this.node1.position.x, this.node1.position.y, this.node2.position.x, this.node2.position.y);

        // check if directed edge
        if(!this.node2.isConnectedTo(this.node1))
            // if so draw arraw at the end of the line
            this.drawArrow();
    }

    drawArrow() {
        const position1 = this.node1.position;
        const position2 = this.node2.position;
        const offset = 10;

        push() //start new drawing state
        let angle = atan2(position1.y - position2.y,
                         position1.x - position2.x); //gets the angle of the line
        translate(position2.x, position2.y); //translates to the destination vertex
        rotate(angle-HALF_PI); //rotates the arrow point
        triangle(-offset*0.25, 15, offset*0.25, 15, 0, 10); //draws the arrow point as a triangle
        pop();
    }
}