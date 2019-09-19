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

var img = [];
function preload() {
  //preload images in loop
  for(let i = 1; i < 22; i++) {
	img[i] = loadImage('artwork_captures/png/artwork' + i + '.png');
	}
}


function setup() {
	windowSetup();
	colorSetup();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');
  //then randomly place loaded images into the scene
  for(let i = 1; i < 22; i++) {
    push();
    let randX = random(50, width-50);
    let randY = random(50, height-50);
    translate(randX, randY)
    console.log(randX, randY)
    rotate(random(-.33, .33))
    scale(.1);
    image(img[i], 0, 0, img[i].width, img[i].height);
    pop();
  }

}

function draw() {
	detectKeyPress();
}
