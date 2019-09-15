
let snowflakes = []; // array to hold snowflake objects

function setup() {
	windowSetup();
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent('sketch-holder');

}

function draw() {
  detectKeyPress();
  background(0, 230);
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(3); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 7);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // if(this.size < 8) {
      fill((sin(this.radius)+100))
    // } else {
    //     this.size -= .0001;
    //     fill(220);
    //     noStroke();
    // }

    let w = 0.6; // angular speed
    // x position follows a circle

    let angle = w * time + this.initialangle;

    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
