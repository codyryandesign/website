//A function for resizing the canvas if the window size is changed
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function renderPageText() {
  var x = document.getElementById("pageText");
  if (enablePageText) {
    x.style.opacity = '1';
  } else {
    x.style.opacity = '0';
  }
}

function toggleFullScreen() {
  let fs = fullscreen();
  fullscreen(!fs);
  var x = document.getElementById("fsbutton");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  resizeCanvas(windowWidth, windowHeight);
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
