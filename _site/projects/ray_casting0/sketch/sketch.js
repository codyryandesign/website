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
var boundaryC = '#505050'
//Background color and alpha GUI control
var backgroundC = '#1c0032';
var backgroundA = 1.0;
var backgroundAMin = 0;
var backgroundAMax = 1.0;
var backgroundAStep = .001;
//Stroke color and alpha GUI control
var rayHue = '#99ff14';

var raySat = 100;
var raySatMin = 0;
var raySatMax = 100;
var raySatStep = 1;

var rayBright = 100;
var rayBrightMin = 0;
var rayBrightMax = 100;
var rayBrightStep = 1;

var rayAlpha = .09;
var rayAlphaMin = 0;
var rayAlphaMax = 1.0;
var rayAlphaStep = .001;

var numParticles = 8;
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

var randomizeRayColors = false;
var mouseFollowEnabled = true;
var enablePageText = true;
//END GUI VARS
var gui1;
var visible = true;

let pngGlassJar;
function preload() {
  pngGlassJar = loadImage('ray_casting_captures/glass-jar.png');
}


function setup() {
  // canvas = createCanvas(window.innerWidth/2, window.innerHeight/2);
  canvas = createCanvas(GLOBAL_WIDTH, GLOBAL_HEIGHT);
  canvas.parent('sketch-holder');
  //default HSB vals: 360, 100, 100, 1
  colorMode(HSB);
  //blendMode(HARD_LIGHT)
  // blendMode(LIGHTEST)
  frameRate(60)


  gui1 = createGui('Settings', 0, 0);
	gui1.addGlobals(
    'boundaryC',
		'backgroundC',
    'backgroundA',
    'randomizeRayColors',
		'rayHue',
    'raySat',
    'rayBright',
    'rayAlpha',
    'numParticles',
    'numRays',
    'rayIncrement',
    'mouseFollowEnabled',
    'enablePageText',
);
  gui1.hide();

  xoff = random(1000);
  yoff = random(1000);

  // for (let i = 0; i < 7; i++) {
  //   let x1 = random(width);
  //   let y1 = random(height);
  //   let x2 = random(width);
  //   let y2 = random(height);
  //   boundaries.push(new Boundary(x1, y1, x2, y2, 255));
  // }
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
  let bColor = color(backgroundC);
  background(hue(bColor), saturation(bColor), brightness(bColor), backgroundA);

  background(pngGlassJar);
  //Custom function for adding and removing particles
  handleParticles();
  //monitor keys for User activity
  detectKeyPress();


  for (let boundary of boundaries) {
    boundary.show();
  }

  for(let i = 0; i < particles.length; i++) {
    noiseVector = createVector((noise(xoff+(i*1000))*(GLOBAL_WIDTH/2)+GLOBAL_WIDTH/4), (noise(yoff+(i*1000))*(GLOBAL_HEIGHT/2)+GLOBAL_HEIGHT/2))
    particles[i].applyForce(noiseVector);
    particles[i].order = i+1;
    if(mouseIsPressed &&
    mouseX < width &&
    mouseX > 0 &&
    mouseY < height &&
    mouseY > 0 &&
    mouseFollowEnabled) {
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
    // particles[i].getHeading();
    xoff += 0.0001;
    yoff += 0.0001;

    // image(pngGlassJar, 0, 0);
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
