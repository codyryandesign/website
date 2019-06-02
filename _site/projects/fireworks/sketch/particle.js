
//A simple class for creating vector-based objects
//that can be influened by other vector forces.
function Particle(x,y, velocity) {
//Initialize the particle object with
//an x,y position
  this.pos = createVector(x,y);
  //Create a placeholder of msot recent position
  this.prevPos;
  //and optional velocity
  this.vel = velocity || createVector(0,0);
  //Also give the object an acceleration vector
  this.acc = createVector(0,0);
  //Keeps track of how long the particle has existed for
  this.lifespan;
  //Keeps track of the size of the particle object
  this.size;
  //Store this color of the particle
  this.color;
  //this.img = img;

//A function for handling forces that act on the object
  this.applyForce = function(force) {
    //Pass in a vector force and
    //add it to the particles acceleration
    this.acc.add(force);
  }

//Update particle object properties during every loop
  this.update = function() {
    this.prevPos = this.pos.copy();
    //Add the acceleration to the velocity
    this.vel.add(this.acc);
    //Add the velocity to the object's position
    this.pos.add(this.vel);
    //Reset acceleration information for the next frame
    this.acc.mult(0);
  }

}
