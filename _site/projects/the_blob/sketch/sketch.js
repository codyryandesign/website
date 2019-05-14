let pointArray = []
let Palette = ['#73628A', '#313D5A']
let zoff = 0;
let phase = 0;

//GUI VARS
var backgroundC = '#000000';
var backgroundA = 0;
var backgroundAMin = 0;
var backgroundAMax = 1.0;
var backgroundAStep = .001;
var strokeC = '#0b62c1';
var strokeA = .033;
var strokeAMin = 0;
var strokeAMax = 1.0;
var strokeAStep = .001;
var fillC = '#fb8e0b';
var fillA = .009;
var fillAMin = 0;
var fillAMax = 1.0;
var fillAStep = .001;

var noiseLevel = 1;
var noiseLevelMin = 1;
var noiseLevelMax = 10;
var noiseLevelStep = 1;

var zoomVal = 3;
var zoomValMin = 0;
var zoomValMax = 4;
var zoomValStep = .01;
//END GUI VARS
var visible = true;



function setup() {
	canvas = createCanvas(windowWidth/2, 400);
  canvas.parent('sketch-holder');
	//noCursor()
	gui = createGui('Blob GUI');
	gui.addGlobals(
		'backgroundC',
		'backgroundA',
		'strokeC',
		'strokeA',
		'fillC',
		'fillA',
		'noiseLevel',
		'zoomVal');
		gui.hide();
		colorMode(HSB);
}

function draw() {
	// HSL color is also supported and can be specified
// by value



	let bColor = color(backgroundC);
	background(hue(bColor), saturation(bColor), brightness(bColor), backgroundA);


	translate(width/2, height/2)
	scale(zoomVal);
	// stroke(random(160, 200), random(0, 10), 60)
	let sColor = color(strokeC);
	stroke(hue(sColor), saturation(sColor), brightness(sColor), strokeA);
	strokeWeight(2)
	let fColor = color(fillC);
	fill(hue(fColor), saturation(fColor), brightness(fColor), fillA);
	beginShape();
	//adjusting angle 'a' changes oscillation frequency
	for(let a = 0; a < TWO_PI; a+=radians(1)) {
		// let r = 100 //radius
		// let r = random(50,100) //radius
		//Increment angle while keeping radius constant
		let xoff = map(cos(a), -1, 1, 0, noiseLevel)
		let yoff = map(sin(a), -1, 1, 0, noiseLevel)
		let r = map(noise(xoff, yoff, zoff), 0, 1, width/8, noiseLevel)
		let x = r * cos(a)
		let y = r * sin(a)
		let z = r * tan(a)
		//Play around with rendering different shapes below
		vertex(x,y)
		// vertex(y,z)
		//circle(x,y, r)
		// circle(x, y, x)

	}
	endShape(CLOSE)




	phase += 0.0007
	zoff += .006

	detectKeyPress();
}

function detectKeyPress() {
  if(key == 'p') {
    save('blob_noise.png');
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
