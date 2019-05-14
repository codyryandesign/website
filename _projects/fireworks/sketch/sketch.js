var fireworks = [];

//GUI vars
var backgroundC = '#090017';
var backgroundA = 0.06;
var backgroundAMin = 0;
var backgroundAMax = 1;
var backgroundAStep = .01;

var rocketSpawnChance = .05;
var rocketSpawnChanceMin = .01;
var rocketSpawnChanceMax = 1;
var rocketSpawnChanceStep = .01;

var rocketSize = 1;
var rocketSizeMin = 0.1;
var rocketSizeMax = 5;
var rocketSizeStep = .01;

var particleSize = 3;
var particleSizeMin = 0;
var particleSizeMax = 20;
var particleSizeStep = .1;

var explosionSize = 30;
var explosionSizeMin = 1;
var explosionSizeMax = 100;
var explosionSizeStep = 1;

var particleDecay = .013;
var particleDecayMin = 0.001;
var particleDecayMax = .03;
var particleDecayStep = .001;

var gravityAmount = 0.19;
var gravityAmountMin = 0;
var gravityAmountMax = .8;
var gravityAmountStep = .01;

var windAmount = 0;
var windAmountMin = -.1;
var windAmountMax = .1;
var windAmountStep = .001;

var particleVelocity = 0.85;
var particleVelocityMin = 0;
var particleVelocityMax = 2;
var particleVelocityStep = .01;

var zoom = 1.0;
var zoomMin = 1.0;
var zoomMax = 10;
var zoomStep = 1;

var gui;
var visible = true;

function setup() {
  canvas = createCanvas(window.innerWidth/2, window.innerHeight/2);
  canvas.parent('sketch-holder');
  // colorMode(HSB, 360, 100, 100, 1)
  colorMode(HSB);

  gui = createGui('HSV GUI');
  gui.addGlobals(
    'backgroundC',
    'backgroundA',
    'rocketSpawnChance',
    'rocketSize',
    'particleSize',
    'explosionSize',
    'particleDecay',
    'gravityAmount',
    'windAmount',
    'particleVelocity',
    'zoom');
  gui.hide();
  // stroke(255);
  // strokeWeight(4);
}

function draw() {
  scale(zoom);
  gravity = createVector(0, gravityAmount);
  wind = createVector(windAmount, 0);
  bColor = color(backgroundC)
  background(hue(bColor), saturation(bColor), brightness(bColor), backgroundA);
  if(random(1) < rocketSpawnChance) {
    fireworks.push(new Firework());
  }

  for(var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if(fireworks[i].done)
      fireworks.splice(i, 1);
      //console.log("'spliced'")
  }

  detectKeyPress();

}

function detectKeyPress() {
  if(key == 'p') {
    save('fireworks.png');
    //nullify key value to prevent multiple downloads on subsequent loops
    key = null;
  }
  if(key == 's') {
    if(visible) {
      gui.show();
    }
    else {
      gui.hide();
    }
    visible = !visible;
    key = null;
  }
}
