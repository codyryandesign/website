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
var boundaryC = '#000000';
//Background color and alpha GUI control
var backgroundC = '#000000';
var backgroundA = 0.036;
var backgroundAMin = 0;
var backgroundAMax = 1.0;
var backgroundAStep = .001;
//Stroke color and alpha GUI control
var rayHue = '#603fff';

var raySat = 100;
var raySatMin = 0;
var raySatMax = 100;
var raySatStep = 1;

var rayBright = 100;
var rayBrightMin = 0;
var rayBrightMax = 100;
var rayBrightStep = 1;

var rayAlpha = .067;
var rayAlphaMin = 0;
var rayAlphaMax = 1.0;
var rayAlphaStep = .001;

numParticles = 1;
numParticlesMin = 1;
numParticlesMax = 10;
numParticlesStep = 1;

//Minimum speed at which particles can move
particleSpeed = .003;
particleSpeedMin = 0;
particleSpeedMax = 1.0;
particleSpeedStep = .001;

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

var randomizeRayColors = false;
var mouseFollowEnabled = true;
var enablePageText = true;
//END GUI VARS
var gui1;
// var visible = true;


function setup() {
	windowSetup();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');
  //default HSB vals: 360, 100, 100, 1
  colorMode(HSB);
  // blendMode(HARD_LIGHT)
  // blendMode(LIGHTEST)
  background(0);
  gui1 = createGui('Settings', 0, 0);
  gui2 = createGui('Settings', width-(width/3), 0);
	gui1.addGlobals(
    'boundaryC',
		'backgroundC',
    'backgroundA',
    'randomizeRayColors',
		'rayHue',
    'raySat',
    'rayBright',
    'rayAlpha',
);
	gui2.addGlobals(
		'numParticles',
		'numRays',
		'rayIncrement',
		'mouseFollowEnabled',
		'particleSpeed',
		'mEasing',
		'nEasing',
	)
  gui1.hide();
	gui2.hide();
	push();
	translate(mouseX, mouseY);
  xoff = width;
  yoff = height;
	pop();

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
		// push();
		// translate(mouseX, mouseY);
		noiseVector = createVector((noise(xoff+(i*1000))*(width)), (noise(yoff+(i*1000))*(height)));
		// noiseVector = createVector(noise(xoff, yoff));
    if(mouseIsPressed && mouseX < width &&
    mouseX > 0 &&
    mouseY < height &&
    mouseY > 0 &&
    mouseFollowEnabled) {
      noCursor();
      mouseVector = mouseFollow();
			// mouseVector.normalize();
			// mouseVector.setMag(100);

      // let mouseForce = mouseVector.sub(particles[randomParticle].force)
			let noisePlusMouseVector = noiseVector.copy();
			// noisePlusMouseVector.setMag(100);
			// noisePlusMouseVector.add(mouseVector);
	    particles[i].applyForce(mouseVector);
      // particles[randomParticle].applyForce(mouseVector);

    }
    else {
	    particles[i].applyForce(noiseVector);
			// particles[i].pos.set(mouseVector)
      cursor();
    }
		// pop();
		// particles[i].update();
    particles[i].look(boundaries)
    particles[i].handleRays();
    // particles[i].getHeading();
    xoff += random(.01);
    yoff += random(.01);


  }
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
