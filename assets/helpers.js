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


function renderPageText() {
  var x = document.getElementById("pageText");
  if (enablePageText) {
    x.style.opacity = '1';
  } else {
    x.style.opacity = '0';
  }
}
