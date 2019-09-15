let stars = [];
let speed;

function setup() {
  // smooth();
	pixelDensity(4.0);
	//frameRate(29);
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');
  function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);

    this.display = function() {
      noStroke();
      let mapX = map(mouseX, 0, width, 0, 255);
      let mapY = map(mouseY, 0, height, 0, 255);
      let distFromOrigin = sqrt(pow(mapX-width, 2), pow(mapY-height, 2));
      fill(255, 255, 255);
      let sx = map(this.x / this.z, 0, 1, 0, width);
      let sy = map(this.y / this.z, 0, 1, 0, height);
      let r = map(this.z, 0, width, 12, 0);
      ellipse(sx, sy, r, r);
      // line(sx, sy, sx-r, sy-r);
    } // display

    this.update = function() {
      this.z -= speed;

      if(this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
      }
    } // update
  } // Star

  for(let i = 0; i < 500; i += 1) {
    stars[i] = new Star();
  }
} // setup

function draw() {
  detectKeyPress()
  translate(width/2, height/2);
  speed = map(mouseX, 0, width, 2,10);
  background(0, speed+100);
  for(let i = 0; i < stars.length; i += 1) {
    stars[i].display();
    stars[i].update();
  }
} // draw
