//A flow field demonstration, based off The Coding Train's example,
//with interactive controls, and code description.

var scl;
var cols, rows;

var particles = [];
var flowField = [];

var fr;

//GUI VARS

//Background color and alpha GUI control
var backgroundC = '#deb8d1';
var backgroundA = .003;
var backgroundAMin = 0;
var backgroundAMax = 1.0;
var backgroundAStep = .001;
//Stroke color and alpha GUI control
var strokeC = '#000000';
var strokeA = .033;
var strokeAMin = 0;
var strokeAMax = 1.0;
var strokeAStep = .001;
//Fill color and alpha GUI control
var fillC = '#f31a12';
var fillA = .186;
var fillAMin = 0;
var fillAMax = 1.0;
var fillAStep = .001;
//Minimum speed at which particles can move
var minSpeed = 1;
var minSpeedMin = 0;
var minSpeedMax = 20;
var minSpeedStep = .01;
//Maximum speed at which particles can move
var maxSpeed = 3;
var maxSpeedMin = 0;
var maxSpeedMax = minSpeedMax+10;
var maxSpeedStep = .01;
//What angle should the noise values be multiplied by?
var angleVal = .3
var angleValMin = -1;
var angleValMax = 1;
var angleValStep = .001;
//How much does the flow field attract or repel the particles?
var fieldMagnitude = 0.05;
var fieldMagnitudeMin = -.5;
var fieldMagnitudeMax = .5;
var fieldMagnitudeStep = .0001;
//How much does the target(mouse) attract or repel the particles?
var targetMagnitude = 0.5;
var targetMagnitudeMin = -.5;
var targetMagnitudeMax = .5;
var targetMagnitudeStep = .0001;
//The amount of time that x and y noise values
//are incremented by every loop
var inc = .101;
var incAdjust = .1;
var incAdjustMin = -1.0;
var incAdjustMax = 1.0;
var incAdjustStep = .001;
//The amount of time that the z noise value
//is incremented by every loop
var zoff = -0.025;
var zoffAdjust = .01;
var zoffAdjustMin = -1.0;
var zoffAdjustMax = 1.0;
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

var numParticles = 1000;
var numParticlesMin = 0;
var numParticlesMax = 1000;
var numParticlesStep = 1;

//How large should the particle sizes be?
var particleSize = 9;
var particleSizetMin = 0.01;
var particleSizeMax = 30;
var particleSizeStep = 0.01;

var zoom = 1.0;
var zoomMin = 1.0;
var zoomMax = 10;
var zoomStep = 1;
//END GUI VARS

//gui
var gui, gui2;
var visible = true;

function setup() {
	// frameRate(30);
	angleMode(DEGREES);
	colorMode(HSB);
	// blendMode(DIFFERENCE);
	blendMode(SOFT_LIGHT);

  canvas = createCanvas(window.innerWidth/2, window.innerHeight/2);
  canvas.parent('sketch-holder');

	guiColors = createGui('Background, Stroke, and Fill Color Manipulation', 0, 0);
	guiFlowField = createGui('Flow Field Manipulation', windowWidth-width/2, 0);
	guiColors.addGlobals(
		'backgroundC',
		'backgroundA',
		'strokeC',
		'strokeA',
		'fillC',
		'fillA',);
	guiFlowField.addGlobals(
		'minSpeed',
		'maxSpeed',
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
		'particleSize',
		'zoom',);
		guiColors.hide();
		guiFlowField.hide();

	// scl = floor((width + height) / numParticles);
	scl = 40;
	cols = floor(windowWidth/scl);
	rows = floor(windowHeight/scl);


	fr = createP('');

	flowField = new Array(cols * rows);
	// console.log(flowField.length)
	for(var i = 0; i < numParticles; i++) {
		particles[i] = new Particle();
	}

}

function draw() {
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
	for(var y = 0; y < rows; y++) {
		var xoff = 0;
		for(var x = 0; x < cols; x++) {
			var index = (x + y * cols);
			angleMode(DEGREES);
			var angle = ((noise(xoff, yoff, zoff) * angleVal));
			var v = p5.Vector.fromAngle(TWO_PI*2*(angle));
			//var v = p5.Vector.fromAngle(angle);
			v.setMag(fieldMagnitude);
			flowField[index] = v;
			xoff += inc;


			if(showFlowField) {
				push();
					translate(x * scl, y * scl);
					rotate(v.heading());
					stroke(255);
					strokeWeight(1);
					line(0, 0, scl, 0);
				pop();
			}
		}
		yoff += inc;
	}
	zoff += zoffAdjust;

	particles.forEach(particle => {

		//Only allow mouse input when:
		//-The is mouse is pressed
		//-The mouse is within the canvas window
		if(
			mouseIsPressed &&
			mouseX < width &&
			mouseX > 0 &&
			mouseY < height &&
			mouseY > 0)
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
		//If the flow field is enabled in GUI
		if(enableFlowField){
		//the particles will follow the flow field
			particle.follow(flowField);
		}
		//Check to see if the current particle has left the window
		particle.edges();
		//Update particle properties
		particle.update();
		//Show the current position of the current particle
		particle.show();

	})
	//Display the frame rate of the sketch in the bottom-left corner
	fr.html(floor(frameRate()));
	//If the user presses a key
	detectKeyPress();

}

//A function for resizing the canvas if the window size is changed
function windowResized() {
  resizeCanvas(windowWidth/2, windowHeight/2);
}

//A function for detecting key-press activity by the User
function detectKeyPress() {
	//If the 'p' key is pressed
  if(key == 'p') {
		//Save an image of the canvas
    save('flowfield.png');
  }
	//If the 's' key is pressed
  if(key == 's') {
		//And the visible bool is true
    if(visible) {
			//Show the GUI panels
      guiColors.show();
			guiFlowField.show();
    }
    else {
			//Otherwise, hide the GUI panels
      guiColors.hide();
			guiFlowField.hide();
    }
		//Toggle visible bool
    visible = !visible;
    //nullify key value to prevent multiple downloads on subsequent loops
    key = null;
  }
}
