//Fireworks!

//Create a gloabl fireworks var
//for holding all active fireworks
var fireworks = [];

//Declare global GUI vars
//These vars can be referenced
//anywhere in the sketch
backgroundC = '#1b0450';
backgroundA = 0.06;
backgroundAMin = 0;
backgroundAMax = 1;
backgroundAStep = .01;
//Stroke color and alpha GUI control
strokeC = '#8d2ce7';
strokeA = 1.0;
strokeAMin = 0;
strokeAMax = 1;
strokeAStep = .001;
//Fill color and alpha GUI control
fillC = '#f31a12';
fillA = .186;
fillAMin = 0;
fillAMax = 1.0;
fillAStep = .001;

var rocketSpawnChance = .05;
var rocketSpawnChanceMin = .01;
var rocketSpawnChanceMax = 1;
var rocketSpawnChanceStep = .01;

var rocketSize = 1;
var rocketSizeMin = 0;
var rocketSizeMax = 100;
var rocketSizeStep = .01;

var particleSize = 200;
var particleSizeMin = 0;
var particleSizeMax = 200;
var particleSizeStep = .1;

var explosionSize = 30;
var explosionSizeMin = 1;
var explosionSizeMax = 100;
var explosionSizeStep = 1;

var particleDecay = .1;
var particleDecayMin = 0.001;
var particleDecayMax = 1;
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

//Create the gui panel
var gui1;
//and toggle it's visibility
var visible = true;

var enablePageText = false;


//To use an image, we have to preload it before setup()
// let img;
// function preload() {
//   img = loadImage('moose.png')
// }

//The setup function is only run once
function setup() {
  //Create a canvas object whose
  //dimensions are based off the browser
  //window size
	windowSetup();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');
  // colorMode(HSB, 360, 100, 100, 1)
  //Draw all colors using
  //Hue, Saturation, Brightness, and Alpha
  colorMode(HSB);

  //Title the GUI panel
  gui1 = createGui('HSV GUI');
  //and add in all global GUI vars
  gui1.addGlobals(
    'backgroundC',
    'backgroundA',
		'strokeC',
		'fillC',
    'rocketSpawnChance',
    'rocketSize',
    'particleSize',
    'explosionSize',
    'particleDecay',
    'gravityAmount',
    'windAmount',
    'particleVelocity',
    'enablePageText',);
  //Initially hide the GUI from view
  gui1.hide();
}

//The draw loop attempts to execute
//60 frames every second
function draw() {
  //Create a gravitational force
  //vector based off the gravityAmount
  gravity = createVector(0, gravityAmount);
  //Create a gravitational force
  //vector based off the windAmount
  wind = createVector(random(windAmount), 0);
  //Take in background color-picker
  //value as a color
  bColor = color(backgroundC)
  //Render the background according to the
  //hue, saturation, brightness of bColor
  //Also assign alpha based off backgroundA
  background(hue(bColor), saturation(bColor), brightness(bColor), backgroundA);
  //Change probability of a new rocket being
  //spawned based off rocketChance value
  if(random(1) < rocketSpawnChance) {
    //Push the new rocket object into the
    //rockets array
    fireworks.push(new Firework());
  }
  //Working backwards through the rockets array
  for(var i = fireworks.length - 1; i >= 0; i--) {
    //update every rocket's properties
    fireworks[i].update();
    //and show it on the screen
    fireworks[i].show();
    //When a rocket has finished activities
    if(fireworks[i].done)
      //Remove it from the rockets array
      fireworks.splice(i, 1);
  }
  //Listen for user key presses
  detectKeyPress();


}
