//A flow field demonstration, based off The Coding Train's example,
//with interactive controls, and code description.
var credits = '@CODYRYANDESIGN	www.codyryandesign.com'
var credits2 = 'Purchase a screenshot today for $2'
var credits3 = 'Based on a generative code example by thecodingtrain.com'


var scl;
var cols, rows;

var particles = [];
var flowField = [];

//var notesArray = ["♩", "♪", "♫", "♬", "♭", "♮", "♯"];

var mic;
var micLevel;

var fr;

//GUI VARS

//Background color and alpha GUI control
var backgroundC = '#b7c1c8';
var backgroundA = 1;
var backgroundAMin = 0;
var backgroundAMax = 1.0;
var backgroundAStep = .001;
//Stroke color and alpha GUI control
var strokeC = '#8d2ce7';
var strokeA = .5;
var strokeAMin = 0;
var strokeAMax = 1;
var strokeAStep = .001;
//Fill color and alpha GUI control
var fillC = '#f31a12';
var fillA = .186;
var fillAMin = 0;
var fillAMax = 1.0;
var fillAStep = .001;
//Fill color and alpha GUI control
var creditsFillC = '#fdfffd';
var creditsFillA = 1.0;
var creditsFillAMin = 0;
var creditsFillAMax = 1.0;
var creditsFillAStep = .001;
// //Minimum speed at which particles can move
// var minSpeed = .1;
// var minSpeedMin = 0;
// var minSpeedMax = 20;
// var minSpeedStep = .01;
// //Maximum speed at which particles can move
// var maxSpeed = minSpeedMax;
// var maxSpeedMin = minSpeedMax;
// var maxSpeedMax = minSpeedMax+20;
// var maxSpeedStep = .01;
//Minimum speed at which particles can move
var particleSpeed = 2.0;
var particleSpeedMin = 0;
var particleSpeedMax = 20;
var particleSpeedStep = .01;
//What angle should the noise values be multiplied by?
var angleVal = .005;
var angleValMin = .00;
var angleValMax = .03;
var angleValStep = .001;
//How much does the flow field attract or repel the particles?
var fieldMagnitude = 0.5;
var fieldMagnitudeMin = -5;
var fieldMagnitudeMax = 5;
var fieldMagnitudeStep = .0001;
//How much does the target(mouse) attract or repel the particles?
var targetMagnitude = 0.5;
var targetMagnitudeMin = -5;
var targetMagnitudeMax = 5;
var targetMagnitudeStep = .0001;
//The amount of time that x and y noise values
//are incremented by every loop
var inc = -0.025;
var incAdjust = .1;
var incAdjustMin = .005;
var incAdjustMax = .03;
var incAdjustStep = .001;
//The amount of time that the z noise value
//is incremented by every loop
var zoff = -0.025;
var zoffAdjust = .01;
var zoffAdjustMin = .005;
var zoffAdjustMax = .03;
var zoffAdjustStep = .001;
//Allow particles to hue-shift over time
var rainbowTrails = true;
var rainbowSaturation = 70;
var rainbowSaturationMin = 0;
var rainbowSaturationMax = 100;
var rainbowSaturationStep = .1;
//Visualize the flow field vectors
var showFlowField = false;
//Enable or disable the flow field forces
var enableFlowField = true;
//Enable or disable the mouseTarget forces
var enableMouseTarget = false;
var enableMic = false;
//Enable or disable rendering of textual info
// var enablePageText = false;
//Enable or disable fullscreen-mode
// var toggleFullScreen = false;
//Enable or disable displaying credits overlay
var showCredits = false;

var numParticles = 1000;
var numParticlesMin = 0;
var numParticlesMax = 1000;
var numParticlesStep = 1;

//How large should the particle sizes be?
var particleSize = 5;
var particleSizetMin = 0.01;
var particleSizeMax = 30;
var particleSizeStep = 0.01;

var zoom = 1.0;
var zoomMin = 1.0;
var zoomMax = 10;
var zoomStep = 1;

var flowFieldZoom = .7;
var flowFieldZoomMin = .1;
var flowFieldZoomMax = 2;
var flowFieldZoomStep = .1;

//END GUI VARS



//gui
var gui1, gui2;
var visible = true;

let myFont;
function preload() {
	myFont = loadFont('/website/assets/Antaro.ttf');
}

function setup() {
	smooth();
	// pixelDensity(2.0);
	//frameRate(29);
	angleMode(DEGREES);
	colorMode(HSB);
	ellipseMode(CORNER);
	// blendMode(DIFFERENCE);
	//blendMode(SOFT_LIGHT);

  // canvas = createCanvas(window.innerWidth/2, window.innerHeight/2);
  canvas = createCanvas(windowWidth/2, windowHeight);
  canvas.parent('sketch-holder');

	gui1 = createGui('Background, Stroke, and Fill Color Manipulation', 0, 0);
	gui2 = createGui('Flow Field Manipulation', windowWidth-width/2, 0);
	gui1.addGlobals(
		'backgroundC',
		'backgroundA',
		'strokeC',
		'strokeA',
		'fillC',
		'fillA',
		'creditsFillC',
		'creditsFillA',);
	gui2.addGlobals(
		// 'minSpeed',
		// 'maxSpeed',
		'particleSpeed',
		'angleVal',
		'angleMult',
		'fieldMagnitude',
		'targetMagnitude',
		'zoffAdjust',
		'incAdjust',
		'rainbowTrails',
		'rainbowSaturation',
		'showFlowField',
		'enableFlowField',
		'enableMouseTarget',
		// 'enableMic',
		// 'enablePageText',
		// 'toggleFullScreen',
		'showCredits',
		'particleSize',
		'zoom',
		'flowFieldZoom',);
		gui1.hide();
		gui2.hide();

	// scl = floor((width + height) / numParticles);
	scl = 60;
	cols = floor(windowWidth/scl);
	rows = floor(windowHeight/scl);

	// mic = new p5.AudioIn();
	// mic.start();

	fr = createP('');

	flowField = new Array(cols * rows);
	// console.log(flowField.length)
	for(var i = 0; i < numParticles; i++) {
		particles[i] = new Particle();
		particles[i].pos = createVector(random(width), random(height));
	}

}

function draw() {
	// micLevel = mic.getLevel();
	//Enable user-activated zoom level
	scale(zoom);
	//Draw the background to the screen
	//utilizing user preferences
	let bColor = color(backgroundC);
	background(hue(bColor), saturation(bColor), brightness(bColor), backgroundA);
	//Set the x and y increments off GUI val
	inc = incAdjust;
	//Reset y-noise val
	var yoff = 0;
	for(var y = 0; y < rows+2; y++) {
		var xoff = 0;
		for(var x = 0; x < cols+2; x++) {
			var index = (x + y * cols);
			//angleMode(DEGREES);
			var noiseMap = map(noise(xoff, yoff, zoff), 0.0, 1.0, 0, 360)
			var angle = noiseMap*angleVal;
			//var angle = atan2(mouseY-y, mouseX-x);
			var v = p5.Vector.fromAngle(angle);
			v.setMag(fieldMagnitude);
			flowField[index] = v;
			xoff += inc;


			if(showFlowField) {
				push();
					translate(x * scl, y * scl);
					scale(flowFieldZoom);
					rotate(v.heading() * scl);
					// stroke(0, 0, 100, backgroundA+.1);
					// strokeWeight(1);
					stroke(0, .1)
					strokeWeight(1);
					//fill(0, 0, map(v.heading(), 0, TWO_PI, 100, 0), 1);
					line(0, 0, scl/2, 0);
					//ellipse(0, 0, scl/2, scl/2)
					//translate(scl, scl);
					fill(0, .1);
					triangle(scl/2, scl/8, scl, 0, scl/2, -scl/8);
				pop();
			}
		}
		yoff += inc;
	}
	zoff += zoffAdjust;

	particles.forEach(particle => {

		// //Only allow mouse input when:
		// //-The mouse is pressed
		// //-The mouse is within the canvas window
		if(
			mouseIsPressed &&
			mouseX < width &&
			mouseX > 0 &&
			mouseY < height &&
			mouseY > 0 &&
			enableMouseTarget)
		{
			//create a vector based off the mouse location
			mouse = createVector(mouseX, mouseY);
			//Steer the particle towards the mouse target ( if targetMagnitude > 0)
			//Steer the particle away from the mouse target ( if targetMagnitude < 0)
			particle.seek(mouse);
		}
		else {
			//noCursor();
		}
		// If the flow field is enabled in GUI
		if(enableFlowField){
		//the particles will follow the flow field
			particle.follow(flowField);
		}
		//Check to see if the current particle has left the window
		particle.edges();

		//Show the current position of the current particle
		particle.show();
		//Update particle properties
		particle.update();

	})
	//Display the frame rate of the sketch in the bottom-left corner
	fr.html(floor(frameRate()));
	//If the user presses a key
	detectKeyPress();
	//Enable or disable the rendering of textual info
	// renderPageText();

	handleCredits();

}
