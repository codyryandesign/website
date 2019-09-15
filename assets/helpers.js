const GLOBAL_WIDTH = 1024;
const GLOBAL_HEIGHT = 576;

function windowSetup() {
  // smooth();
  // pixelDensity(4.0);
  // frameRate(30);
}

function windowResized() {
  resizeCanvas(1024, 576);
}

//A function for detecting key-press activity by the User
function detectKeyPress() {
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
    key = null;
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
    key = null;
  }
  if(key == '=') {
    strokeC = hexToComplimentary(strokeC);
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
