const GLOBAL_WIDTH = 1024;
const GLOBAL_HEIGHT = 576;

function windowSetup() {
  // smooth();
  // pixelDensity(4.0);
  // frameRate(30);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

//Global brightness control
var globalBrightness = 1.0;
var globalBrightnessMin = 0.0;
var globalBrightnessMax = 1.0;
var globalBrightnessStep = .001;

function adjustGlobalBrightness() {
  //draw a rect over the entire canvas area
  //but leave its alpha variable to allow
  //for simple fading.
	push();
	noStroke();
	fill(0,0,0,1-globalBrightness);
	rect(0, 0, window.innerWidth, window.innerHeight);
	pop();
}

//background color picker
var bColorPicker;
//stroke color picker
var sColorPicker;
//fill color picker
var fColorPicker;
//global mask color picker
var gColorPicker;
function colorSetup() {
  //colorMode([mode], [max1], [max2], [max3], [maxAlpha])
  colorMode(HSB, 360, 100, 100, 1);
  // bColorPicker = createColorPicker(color('black'));
  // sColorPicker = createColorPicker(color('white'));
  // fColorPicker = createColorPicker(color('red'));
  // gColorPicker = createColorPicker(color('black'));
}
//GUI VARS

//Background color and alpha GUI control
var backgroundC = '#ffffff';
var backgroundA = .005;
var backgroundAMin = 0;
var backgroundAMax = 1.0;
var backgroundAStep = .001;
//Stroke color and alpha GUI control
var strokeC = '#8d2ce7';
var strokeA = 1.0;
var strokeAMin = 0;
var strokeAMax = 1;
var strokeAStep = .001;
//Fill color and alpha GUI control
var fillC = '#f31a12';
var fillA = .186;
var fillAMin = 0;
var fillAMax = 1.0;
var fillAStep = .001;

// FORCE-AFFECTING VARS
//The amount of time that x and y noise values
//are incremented by every loop
var inc = .1;
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
//Adjust the force of gravity in the system
var gravityAmount = 0.19;
var gravityAmountMin = 0;
var gravityAmountMax = .8;
var gravityAmountStep = .01;
//Adjust the force of wind in the system
var windAmount = 0;
var windAmountMin = -.1;
var windAmountMax = .1;
var windAmountStep = .001;
/*PARTICLE-AFFECTING VARS*/
//Add or remove particles from system
var numParticles = 2;
var numParticlesMin = 1;
var numParticlesMax = 10;
var numParticlesStep = 1;
//Adjust particle render size
var particleSize = 200;
var particleSizeMin = 0;
var particleSizeMax = 20;
var particleSizeStep = .1;
//Adjust particle life-span
var particleDecay = .013;
var particleDecayMin = 0.001;
var particleDecayMax = 1;
var particleDecayStep = .001;
//Adjust particle velocity
var particleVelocity = 0.85;
var particleVelocityMin = 0;
var particleVelocityMax = 2;
var particleVelocityStep = .01;
//control canvas magnification
var zoom = 1.0;
var zoomMin = 1.0;
var zoomMax = 10;
var zoomStep = 1;



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
var particleSpeedMin = .01;
var particleSpeedMax = 20;
var particleSpeedStep = .01;
//What angle should the noise values be multiplied by?
var angleVal = .314;
var angleValMin = 0.0;
var angleValMax = 1.0;
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

//Allow particles to hue-shift over time
var rainbowTrails = false;
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
var particleSize = .5;
var particleSizetMin = 0.01;
var particleSizeMax = 30;
var particleSizeStep = 0.01;


var flowFieldZoom = .7;
var flowFieldZoomMin = .1;
var flowFieldZoomMax = 2;
var flowFieldZoomStep = .1;

//END GUI VARS



//gui
var gui1, gui2;
var visible = true;


//A function for detecting key-press activity by the User
function detectKeyPress() {
  if(keyIsPressed === true) {
  	//If the 'p' key is pressed
    if(key == 'p') {
  		//Save an image of the canvas
      save('sketch.png');
    }
  	//If the 's' key is pressed
    if(key == 's') {
  		//And the visible bool is true
      if(visible) {
  			//Show the GUI panels
        if(typeof gui1 != 'undefined')
          gui1.show();
        if(typeof gui2 != 'undefined')
  			  gui2.show();
      }
      else {
  			//Otherwise, hide the GUI panels
        if(typeof gui1 != 'undefined')
          gui1.hide();
        if(typeof gui2 != 'undefined')
          gui2.hide();
      }
  		//Toggle visible bool
      visible = !visible;
      //nullify key value to prevent multiple downloads on subsequent loops
    }
    if(key == '-'){
      if(backgroundC != null) {
        backgroundC = hexToComplimentary(backgroundC);
      }
      if(strokeC != null) {
        strokeC = hexToComplimentary(strokeC);
      }
      if(fillC != null) {
        fillC = hexToComplimentary(fillC);
      }
      if(creditsFillC != null) {
        creditsFillC = hexToComplimentary(creditsFillC);
      }
    }
    if(key == '=') {
      strokeC = hexToComplimentary(strokeC);
    }
    key = null;
  }
}

function doubleClicked() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function renderPageText() {
  var x = document.getElementById("pageText");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
}



function toggleFullScreen() {
  let fs = fullscreen();
  fullscreen(!fs);
  // var x = document.getElementById("fsbutton");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
}

// function displayButton() {
//   if(!fullscreen()) {
//     var x = document.getElementById("fsbutton");
//     x.style.display = "block";
//   }
// }

//Example block-toggle function
// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

function value_limit(val, min, max) {
  return val < min ? min : (val > max ? max : val);
}

function handleCredits(){
  if(showCredits != null && showCredits) {
    push();
    translate(width/2, height/2);
    scale(2);
    textFont(myFont);
    creditsColor = color(creditsFillC);
    fill(hue(creditsColor), saturation(creditsColor), brightness(creditsColor), creditsFillA);
    noStroke();

    text(credits, 0-250, 0, 500, 10);
    // text(credits2, width-200, height-20, 200, 80);
    pop();
  }
}

/* hexToComplimentary : Converts hex value to HSL, shifts
 * hue by 180 degrees and then converts hex, giving complimentary color
 * as a hex value
 * @param  [String] hex : hex value
 * @return [String] : complimentary color as hex value
 */
function hexToComplimentary(hex){

    // Convert hex to rgb
    // Credit to Denis http://stackoverflow.com/a/36253499/4939630
    var rgb = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16); }).join(',') + ')';

    // Get array of RGB values
    rgb = rgb.replace(/[^\d,]/g, '').split(',');

    var r = rgb[0], g = rgb[1], b = rgb[2];

    // Convert RGB to HSL
    // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
    r /= 255.0;
    g /= 255.0;
    b /= 255.0;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2.0;

    if(max == min) {
        h = s = 0;  //achromatic
    } else {
        var d = max - min;
        s = (l > 0.5 ? d / (2.0 - max - min) : d / (max + min));

        if(max == r && g >= b) {
            h = 1.0472 * (g - b) / d ;
        } else if(max == r && g < b) {
            h = 1.0472 * (g - b) / d + 6.2832;
        } else if(max == g) {
            h = 1.0472 * (b - r) / d + 2.0944;
        } else if(max == b) {
            h = 1.0472 * (r - g) / d + 4.1888;
        }
    }

    h = h / 6.2832 * 360.0 + 0;

    // Shift hue to opposite side of wheel and convert to [0-1] value
    h+= 180;
    if (h > 360) { h -= 360; }
    h /= 360;

    // Convert h s and l values into r g and b values
    // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
    if(s === 0){
        r = g = b = l; // achromatic
    } else {
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        };

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;

        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);

    // Convert r b and g values to hex
    rgb = b | (g << 8) | (r << 16);
    return "#" + (0x1000000 | rgb).toString(16).substring(1);
  }

  function touchStarted() {
    return;
  }
