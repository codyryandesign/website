//Fireworks!

//Create a gloabl fireworks var
//for holding all active fireworks
var fireworks = [];

//Declare global GUI vars
//These vars can be referenced
//anywhere in the sketch
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

//Create the gui panel
var gui;
//and toggle it's visibility
var visible = true;

//The setup function is only run once
function setup() {
  //Create a canvas object whose
  //dimensions are based off the browser
  //window size
  canvas = createCanvas(window.innerWidth/2, window.innerHeight/2);
  canvas.parent('sketch-holder');
  // colorMode(HSB, 360, 100, 100, 1)
  //Draw all colors using
  //Hue, Saturation, Brightness, and Alpha
  colorMode(HSB);

  //Title the GUI panel
  gui = createGui('HSV GUI');
  //and add in all global GUI vars
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
    'particleVelocity');
  //Initially hide the GUI from view
  gui.hide();
}

//The draw loop attempts to execute
//60 frames every second
function draw() {
  //Create a gravitational force
  //vector based off the gravityAmount
  gravity = createVector(0, gravityAmount);
  //Create a gravitational force
  //vector based off the windAmount
  wind = createVector(windAmount, 0);
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

//Handle user key presses
function detectKeyPress() {
  //If the user presses the 'p' key
  if(key == 'p') {
    //Take a snapshot of the canvas
    save('fireworks.png');
    //nullify key value to prevent multiple downloads on subsequent loops
    key = null;
  }
    //If the user presses the 's' key
  if(key == 's') {
    //Toggle the visibility of GUI panel(s)
    if(visible) {
      gui.show();
    }
    else {
      gui.hide();
    }
    visible = !visible;
    //nullify key value to prevent multiple downloads on subsequent loops
    key = null;
  }
}
