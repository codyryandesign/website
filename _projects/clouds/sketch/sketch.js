

var bubbles = [];

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');
	windowSetup();
	colorSetup();
  for (var i = 0; i < 14; i++) {
    bubbles[i] = new Bubble();
  }
	gui1 = createGui('Settings', 0, 0);
	gui1.addGlobals(
		'globalBrightness',
);
	gui1.hide();
}

function draw() {
  detectKeyPress();
  background(200, 180, 250, 1);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
	adjustGlobalBrightness();
}

function Bubble() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.randomFill = random(250, 255);
  this.randomWidth = random(23, 24);
  this.randomHeight = random(23, 24);

  this.display = function() {
    stroke(255);
    strokeWeight(1);
    fill(0, 0, 100 - (2 * sin(this.x)), 1);
    randomMove = random(9, 10);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x + 10, this.y + 10, this.randomWidth, this.randomHeight);
    ellipse(this.x + 30, this.y + 10, this.randomWidth, this.randomHeight);
    ellipse(this.x + 30, this.y - 10, this.randomWidth, this.randomHeight);
    ellipse(this.x + 20, this.y - 10, this.randomWidth, this.randomHeight);
    ellipse(this.x + 40, this.y, this.randomWidth, this.randomHeight);
  }

  this.move = function() {
    randomMoveX = random(.1, .2);
    randomMoveY = random(-.1, .1);
    this.x = this.x += randomMoveX;
    this.y = this.y += randomMoveY;

    if (this.x >= width + 130) {
      this.x = -130;
      this.y = random(height);
    }
  }
}


function mouseClicked() {
  bubbles.push(new Bubble());
}

function keyPressed() {
  bubbles.splice(Bubble.length - 1, 1);
}
