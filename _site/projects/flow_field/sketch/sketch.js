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



let myFont;
function preload() {
	myFont = loadFont('/website/assets/Antaro.ttf');
}

function setup() {
	angleMode(DEGREES);
	ellipseMode(CORNER);
	// blendMode(DIFFERENCE);
	//blendMode(SOFT_LIGHT);
	windowSetup();
	colorSetup();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');

	gui1 = createGui('Background, Stroke, and Fill Color Manipulation', 0, 0);
	gui2 = createGui('Flow Field Manipulation', windowWidth-width/2, 0);
	gui1.addGlobals(
		'globalBrightness',
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
	cols = floor(width/scl);
	rows = floor(height/scl);

	// mic = new p5.AudioIn();
	// mic.start();

	fr = createP('');

	flowField = new Array(cols * rows);
	// console.log(flowField.length)
	for(var i = 0; i < numParticles; i++) {
		particles[i] = new Particle();
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
	//Reset y-noise val
	var yoff = 0;
	for(var y = 0; y < rows+2; y++) {
		var xoff = 0;
		for(var x = 0; x < cols+2; x++) {
			var index = (x + y * cols);
			//angleMode(DEGREES);
			var noiseMap = map(noise(xoff, yoff, zoff), 0.0, 1.0, 0, 360)
			var angle = noiseMap*angleVal;
			// var angle = atan2(mouseY-y, mouseX-x);
			var v = p5.Vector.fromAngle(angle);
			v.setMag(fieldMagnitude);
			flowField[index] = v;
			xoff += incAdjust;


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
	// fr.html(floor(frameRate()));
	//If the user presses a key
	detectKeyPress();
	//Enable or disable the rendering of textual info
	// renderPageText();

	handleCredits();
	adjustGlobalBrightness();


}
