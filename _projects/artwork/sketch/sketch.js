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
  // for(let i = 1; i < 22; i++) {
    push();
      translate(1371, 104)
      rotate(.13)
      scale(.1);
      image(img[1], 0, 0, img[1].width, img[1].height);
    pop();
    push();
      translate(589, 363)
      rotate(.11)
      scale(.1);
      image(img[2], 0, 0, img[2].width, img[2].height);
    pop();
    push();
      translate(398, 661)
      rotate(.16)
      scale(-.1);
      image(img[3], 0, 0, img[3].width, img[3].height);
    pop();
    push();
      translate(619, 711)
      rotate(.02)
      scale(.1);
      image(img[4], 0, 0, img[4].width, img[4].height);
    pop();
    push();
      translate(224, 369)
      rotate(.08)
      scale(-.1);
      image(img[5], 0, 0, img[5].width, img[5].height);
    pop();
    push();
      translate(1166, 220)
      rotate(-.02)
      scale(.1);
      image(img[6], 0, 0, img[6].width, img[6].height);
    pop();
    push();
      translate(601, 653)
      rotate(-.22)
      scale(.1);
      image(img[7], 0, 0, img[7].width, img[7].height);
    pop();
    push();
      translate(1660, 114)
      rotate(-.08)
      scale(.1);
      image(img[8], 0, 0, img[8].width, img[8].height);
    pop();
    push();
      translate(439, 887)
      rotate(-.31)
      scale(.1);
      image(img[8], 0, 0, img[8].width, img[8].height);
    pop();
    push();
      translate(328, 333)
      rotate(-.23)
      scale(.1);
      image(img[9], 0, 0, img[9].width, img[9].height);
    pop();
    push();
      translate(950, 218)
      rotate(-.21)
      scale(.1);
      image(img[10], 0, 0, img[10].width, img[10].height);
    pop();
    push();
      translate(1002, 103)
      rotate(.16)
      scale(.1);
      image(img[11], 0, 0, img[11].width, img[11].height);
    pop();
    push();
      translate(625, 190)
      rotate(-.27)
      scale(.1);
      image(img[12], 0, 0, img[12].width, img[12].height);
    pop();
    push();
      translate(1777, 610)
      rotate(-.25)
      scale(.1);
      image(img[13], 0, 0, img[13].width, img[13].height);
    pop();
    push();
      translate(1457, 412)
      rotate(.001)
      scale(.1);
      image(img[14], 0, 0, img[14].width, img[14].height);
    pop();
    push();
      translate(1167, 532)
      rotate(.2)
      scale(.1);
      image(img[15], 0, 0, img[15].width, img[15].height);
    pop();
    push();
      translate(1868, 282)
      rotate(.13)
      scale(.1);
      image(img[16], 0, 0, img[16].width, img[16].height);
    pop();
    push();
      translate(176, 229)
      rotate(-.2)
      scale(.1);
      image(img[17], 0, 0, img[17].width, img[17].height);
    pop();
    // push();
    //   translate(1736, 440)
    //   rotate(-.31)
    //   scale(.1);
    //   image(img[18], 0, 0, img[18].width, img[18].height);
    // pop();
    // push();
    //   translate(459, 510)
    //   rotate(-.24)
    //   scale(.1);
    //   image(img[19], 0, 0, img[19].width, img[19].height);
    // pop();
    // push();
    //   translate(1155, 435)
    //   rotate(-.17)
    //   scale(.1);
    //   image(img[19], 0, 0, img[19].width, img[19].height);
    // pop();
  // }

}

function draw() {
	detectKeyPress();
}
