let angle;
let w;
let cols;
let rows;
let curves;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');
  //frameRate(5);
  angle = -PI/2;
  w = width/10;
  cols = floor(width/w - 1);
  rows = floor(height/w - 1);
  curves = make2DArray(rows, cols);

  for(let j = 0; j < rows; j++) {
    for(let i = 0; i < cols; i++) {
      curves[j][i] = new Curve();
    }
  }

}

function draw() {
  background(0,10);
  stroke(255);
  noFill();
  let d = w - .1*w;
  let r = d/2;
  for(let i = 0; i < cols; i++) {
    let cx = w + i * w + w/2;
    let cy = w/2;
    stroke(255);
    strokeWeight(1);
    ellipse(cx,cy, d, d);
    let x = r * cos(angle * (i+1));
    let y = r * sin(angle * (i+1));
    stroke(255);
    strokeWeight(8);
    point(cx + x, cy + y);

    stroke(255);
    strokeWeight(.04);
    line(cx + x, 0 , cx + x, height);

    for(let j = 0; j < rows; j++) {
      curves[j][i].setX(cx + x);
    }
  }

   for(let j = 0; j < rows; j++) {
    let cy = w + j * w + w/2;
    let cx = w/2;
    stroke(255);
    strokeWeight(1);
    ellipse(cx,cy, d, d);
    let x = r * cos(angle * (j+1));
    let y = r * sin(angle * (j+1));
    stroke(255);
    strokeWeight(8);
    point(cx + x, cy + y);

    stroke(255);
    strokeWeight(.04);
    line(0, cy + y, width, cy + y);

    for(let i = 0; i < cols; i++) {
      curves[j][i].setY(cy + y);
    }
  }
     for(let j = 0; j < rows; j++) {
    for(let i = 0; i < cols; i++) {
      curves[j][i].addPoint();
      curves[j][i].show();
    }
  }

  angle -= 0.005;
  if(angle < -TWO_PI - HALF_PI) {
    for(let j = 0; j < rows; j++) {
      for(let i = 0; i < cols; i++) {
        curves[j][i].reset();
        //println("curves reset");
      }
    }
    angle = -HALF_PI;
  }


}

function make2DArray(rows, cols) {
	var arr = new Array(rows)
	for(var i = 0; i < arr.length; i++) {
		arr[i] = new Array(cols);
	}
	return arr;
}
