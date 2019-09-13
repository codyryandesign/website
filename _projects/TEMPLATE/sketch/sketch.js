
function setup() {
  canvas = createCanvas(GLOBAL_WIDTH, GLOBAL_HEIGHT);
  canvas.parent('sketch-holder');
}

function draw() {
  background(0);
  detectKeyPress();
}
