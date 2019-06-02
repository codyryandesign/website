class Curve {

  constructor() {
    this.path = [];
    this.current = createVector();

  }

  setX(x) {
    this.current.x = x;
  }

  setY(y) {
    this.current.y = y;
  }

  addPoint() {
    //Add a point to the draw shape 20% of the time
    if(random(1) <= .5)
      this.path.push(this.current);
    //current = new PVector();
  }

  show() {
    push();
    stroke(255,255,200,50);
    beginShape();
    for(let v of this.path) {
      vertex(v.x, v.y);
    }
    endShape();
    pop();
    point(this.current.x, this.current.y);
    this.current = createVector();
  }

  reset() {
    this.path = [];
  }
}
