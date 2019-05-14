//@D Visibility
//Ray Casting
//Cody's Implementation of The Coding Train

let boundaries = [];
let particles = [];
let xoff;
let yoff;

let noiseVector;
let mouseVector;

var randomParticle;

//GUI VARS

//Background color and alpha GUI control
var backgroundC = '#4d206e';
var backgroundA = .083;
var backgroundAMin = 0;
var backgroundAMax = 1.0;
var backgroundAStep = .001;
//Stroke color and alpha GUI control
var rayC = '#d3f7ff';
var rayS = 100;
var raySMin = 0;
var raySMax = 100;
var raySStep = 1;
var rayA = .027;
var rayAMin = 0;
var rayAMax = 1.0;
var rayAStep = .001;
//Fill color and alpha GUI control
var fillC = '#f31a12';
var fillA = .186;
var fillAMin = 0;
var fillAMax = 1.0;
var fillAStep = .001;
var boundaryC = '#505050'

var numParticles = 2;
var numParticlesMin = 1;
var numParticlesMax = 10;
var numParticlesStep = 1;

var numRays = 360;
var numRaysMin = 1;
var numRaysMax = 720;
var numRaysStep = 1;

var rayIncrement = 1;
var rayIncrementMin = .1;
var rayIncrementMax = 10;
var rayIncrementStep = .1;

var angleVal = 0;
var angleValMin = 0;
var angleValMax = 360;
var angleValStep  = 1;

var rayColorEnabled = false;
//END GUI VARS
var gui;
var visible = true;


function setup() {
  canvas = createCanvas(window.innerWidth/2, window.innerHeight/2);
  canvas.parent('sketch-holder');
  //default HSB vals: 360, 100, 100, 1
  colorMode(HSB);
  blendMode(HARD_LIGHT)
  // blendMode(LIGHTEST)
  background(0);
  gui = createGui('Settings', 0, 0);
	gui.addGlobals(
		'backgroundC',
    'backgroundA',
		'rayC',
    'rayS',
    'rayA',
    'boundaryC',
    'numParticles',
    'numRays',
    'rayIncrement',
    // 'angleVal',
    'rayColorEnabled',);
  gui.hide();

  xoff = random(1000);
  yoff = random(1000);

  for (let i = 0; i < 7; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    boundaries.push(new Boundary(x1, y1, x2, y2, 255));
  }
  boundaries.push(new Boundary(0, 0, width, 0, 0));
  boundaries.push(new Boundary(0, height, width, height, 0));
  boundaries.push(new Boundary(0, 0, 0, height, 0));
  boundaries.push(new Boundary(width, 0, width, height, 0));
  for (let i = 0; i < numParticles; i++) {
    //Add particles to the scene
    particles.push(new Particle());
    //Pick one of the particles to be optionally controlled with mouse
    randomParticle = floor(random(particles.length));
  }

}

function draw() {

  //Custom function for adding and removing particles
  handleParticles();
  //monitor keys for User activity
  detectKeyPress();

  let bColor = color(backgroundC);
  background(hue(bColor), saturation(bColor), brightness(bColor), backgroundA);

  for (let boundary of boundaries) {
    boundary.show();
  }

  for(let i = 0; i < particles.length; i++) {
    noiseVector = createVector((noise(xoff+(i*1000))*windowWidth/2), (noise(yoff+(i*1000))*windowHeight/2))
    particles[i].applyForce(noiseVector);
    if(mouseIsPressed &&
    mouseX < width &&
    mouseX > 0 &&
    mouseY < height &&
    mouseY > 0) {
      noCursor();
      mouseVector = createVector(mouseX, mouseY);
      let mouseForce = mouseVector.sub(particles[randomParticle].force)
      particles[randomParticle].applyForce(mouseForce);
    }
    else {
      cursor();
    }
    particles[i].look(boundaries)
    particles[i].handleRays();
    xoff += random(0.01);
    yoff += random(0.01);

  }





}

function windowResized() {
  resizeCanvas(window.innerWidth/2, window.innerHeight/2);
}

function detectKeyPress() {
  if(key == 'p') {
    save('ray_casting.png');
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


function mouseIsPressedInWindow() {
  //TODO
}

function handleParticles() {
  if(particles.length < numParticles) {
    particles.push(new Particle());
  }
  if (particles.length > numParticles) {
    for (let a = particles.length; a > numParticles - 1; a--) {
      particles.splice(a, 1);
    }
  }
}
