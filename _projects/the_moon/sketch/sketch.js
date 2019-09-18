let pointArray = []
let Palette = ['#73628A', '#313D5A']
// let zoff = 0;
let phase = 0;

//GUI VARS
//Background color and alpha GUI control
var backgroundC = '#b38bcf';
var backgroundA = .007;
var backgroundAMin = 0;
var backgroundAMax = 1.0;
var backgroundAStep = .001;
//Stroke color and alpha GUI control
var strokeC = '#9fa2a1';
var strokeA = .024;
var strokeAMin = 0;
var strokeAMax = 1.0;
var strokeAStep = .001;
//Fill color and alpha GUI control
var fillC = '#8ad8f3';
var fillA = .021;
var fillAMin = 0;
var fillAMax = 1.0;
var fillAStep = .001;

var noiseLevel = .06;
var noiseLevelMin = 0;
var noiseLevelMax = 10;
var noiseLevelStep = .01;

var zoomVal = 1.5;
var zoomValMin = 0;
var zoomValMax = 4;
var zoomValStep = .01;

var enablePageText = true;
//END GUI VARS
var gui1;
var visible = true;



function setup() {
	windowSetup();
	colorSetup();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');
	//noCursor()
	gui1 = createGui('Blob GUI');
	gui1.addGlobals(
		'backgroundC',
		'backgroundA',
		'strokeC',
		'strokeA',
		'fillC',
		'fillA',
		'noiseLevel',
		'zoomVal',
		'enablePageText',);
		gui1.hide();
		colorMode(HSB);
}

function draw() {
	translate(width/2, height/2);
	scale(zoomVal);
	strokeWeight(2);

	let bColor = color(backgroundC);
	background(hue(bColor), saturation(bColor), brightness(bColor), backgroundA);
	// stroke(random(160, 200), random(0, 10), 60)
	let sColor = color(strokeC);
	stroke(hue(sColor), saturation(sColor), brightness(sColor), strokeA);
	let fColor = color(fillC);
	fill(hue(fColor), saturation(fColor), brightness(fColor), fillA);

	beginShape();
	//adjusting angle 'a' changes oscillation frequency
	for(let a = 0; a <= TWO_PI; a+=radians(1)) {
		// let r = 100 //radius
		// let r = random(50,100) //radius
		//Increment angle while keeping radius constant
		let xoff = map(cos(a*mouseY), -1, 1, 0, noiseLevel)
		let yoff = map(sin(a*mouseY), -1, 1, 0, noiseLevel)
		let r = map(noise(xoff, yoff, zoff), 0, 1, width/2, noiseLevel)
		let x = r * cos(a)
		let y = r * sin(a)
		let z = r * tan(a)
		//Play around with rendering different shapes below
		vertex(x,y)
		// vertex(y,z)
		// vertex(z,x)
		//ellipse(x,y,r)
		// circle(x, y, x
	}
	endShape(CLOSE);

	beginShape();
	//adjusting angle 'a' changes oscillation frequency
	for(let a = 0; a <= TWO_PI; a+=radians(1)) {
		// let r = 100 //radius
		// let r = random(50,100) //radius
		//Increment angle while keeping radius constant
		let xoff = map(cos(a*mouseX), -1/2, 1/2, 0, noiseLevel)
		let yoff = map(sin(a*mouseX), -1/2, 1/2, 0, noiseLevel)
		let r = map(noise(xoff, yoff, zoff), 0, 1, width/4, noiseLevel)
		let x = r * cos(a)
		let y = r * sin(a)
		let z = r * tan(a)
		//Play around with rendering different shapes below
		vertex(x,y)
		// vertex(y,z)
		// vertex(z,x)
		//ellipse(x,y,r)
		// circle(x, y, x
	}
	endShape(CLOSE);

	beginShape();
	//adjusting angle 'a' changes oscillation frequency
	for(let a = 0; a <= TWO_PI; a+=radians(1)) {
		// let r = 100 //radius
		// let r = random(50,100) //radius
		//Increment angle while keeping radius constant
		let xoff = map(cos(a*mouseY), -1/4, 1/4, 0, noiseLevel)
		let yoff = map(sin(a*mouseY), -1/4, 1/4, 0, noiseLevel)
		let r = map(noise(xoff, yoff, zoff), 0, 1, width/6, noiseLevel)
		let x = r * cos(a)
		let y = r * sin(a)
		let z = r * tan(a)
		//Play around with rendering different shapes below
		vertex(x,y)
		// vertex(y,z)
		// vertex(z,x)
		//ellipse(x,y,r)
		// circle(x, y, x
	}
	endShape(CLOSE);


	fill(hue(fColor), saturation(fColor), brightness(fColor), fillA);




	phase += 0.0007
	zoff += .006

	detectKeyPress();
}
