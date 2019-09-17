//Artwork

//GUI VARS
var boundaryC = '#505050'
//Background color and alpha GUI control
var backgroundC = '#000000';
var backgroundA = 1.0;
var backgroundAMin = 0;
var backgroundAMax = 1.0;
var backgroundAStep = .001;

//END GUI VARS
var gui1;
var visible = true;

var artworkArray = [];
function preload() {
  for(let i = 1; i < 2; i++) {
		artworkArray[i] = loadImage('artwork_captures/png/artwork' + i + '.png');
	}
	image(artworkArray[1], 0, 0, 50, 50);
	// for(let i = 1; i < 2; i++) {
	// 	artworkArray.push(img);
	// }

	//preload images in loop
	//
}


function setup() {
	windowSetup();
	colorSetup();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');

	// let i = 0;
	// for(let x = 0; x < width; x = x+(width/6)) {
	// 	for(let y = 0; y < height; y = y+(height/6)) {
	// 		image(artworkArray[i], 0, 0, 200, 200);
	// 		i++;
	// 	}
	// }
}

// function draw() {
// 	background(0, 0, 100, 1);
//
//
// }
