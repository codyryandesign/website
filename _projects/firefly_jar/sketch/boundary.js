class Boundary {
  constructor(x1, y1, x2, y2, s) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
    this.s = s;
  }

  show() {
    push();
    let boundaryColor = color(boundaryC);
    if(this.s != 0)
      stroke(hue(boundaryColor), saturation(boundaryColor), brightness(boundaryColor), 1);
    else {
      stroke(0, 0, 0, 1);
    }
    line(this.a.x, this.a.y, this.b.x, this.b.y);
    pop();
  }
}
