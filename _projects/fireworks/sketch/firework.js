function Firework() {
  //Inherit Particle class properties
  //and initialize the particle object
  //at a randomized position below the canvas
  this.firework = new Particle(random(width), height, createVector(0, random(-5,-20)));
  //If the mouse is interacting with the sketch
  //determine the rocket's color by the mouse's
  //y coordinate
  // this.color = mouseIsPressed ? map(mouseY, 0, height, 0, 360) : random(360);
  this.sColor = mouseIsPressed ? random(360) : color(strokeC);
  this.fColor = mouseIsPressed ? random(360) : color(fillC);
  //Keep track of whether the rocket has
  //exploded or not
  this.exploded = false;
  //The rocket is done when its children
  //particles have all been removed from
  //the scene
  this.done = false;
  //Create an empty particle array for holding
  //explosion particles
  this.particles = [];
  this.prevPos;

  //Update firework properties every frame,
  //keeping track of applied vector forces,
  //and explosion conditions
  this.update = function() {
    if(!this.exploded) {
      this.prevPos = this.firework.pos.copy();
      //Only apply gravity to the rocket if
      //it hasn't yet exploded
      this.firework.applyForce(gravity);
      //Update the rocket particle's
      //position based on active forces
      this.firework.update();
      //When the rocket's velocity matches
      //the gravitational force acting on it
      if(this.firework.vel.y >= 0)
        //EXPLODE!
        this.explode();
    }
    //For every child particle created
    //when the rocket explodes
    for(var i = this.particles.length-1; i >= 0 ; i--) {
      //Apply gravity to the child-particle
      this.particles[i].applyForce(gravity);
      //Apply wind to the child-particle
      this.particles[i].applyForce(wind);
      //Update child-particle properties
      this.particles[i].update();
      //If the child-particle's lifespan
      //runs out
      if(this.particles[i].lifespan <= 0) {
        //Remove that child particle from the array
        this.particles.splice(i, 1);
      }
      else {
        //Otherwise, decrement the child-particle's
        //lifespan by a random amount of the particleDecay
        //value
        this.particles[i].lifespan -= random(particleDecay);
      }
    }
    //When the rocket has exploded and all
    //child-particles have died
    if(this.exploded && this.particles.length == 0)
      //The rocket can be removed from the scene
      this.done = true;
  }

  //A function for generating a random amount
  //of child-particles when the rocket explodes
  this.explode = function() {
    //Determine how many child-particles
    //the rocket will have
    var numParticles = random(100, 300);
    //For every child-particle
    for(let i = 0; i < numParticles; i++) {
      //Assign the child-particle a random
      //position based off the location of
      //the rocket's explosion
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, p5.Vector.random2D());
      //Give the child-particle a lifespan of 1
      p.lifespan = random(.1, 1);
      //Randomly assign the size of the child-particle
      p.size = random(particleSize);
      //Calculate the velocity of a child-particle
      //based off the explosionSize value
      p.vel.mult(random(explosionSize));
      //Push the fully-built child-particle to
      //the rocket's array
      this.particles.push(p);
    }
    //The rocket has now exploded
    this.exploded = true;
  }

  //Display the rocket particle
  //as it soars into the sky
  this.show = function() {
    if(!this.exploded) {
      //As long as it hasn't yet exploded
      stroke(this.sColor, 100, 100, random(.5, 1));
      fill(this.fColor, 100, 100, random(.5, 1));
      let mappedVelocity = map(this.firework.vel.y, 0, 10, 0, 1);
      strokeWeight(mappedVelocity);
      //Render the rocket as a point at it's
      //current position
      point(this.firework.pos.x, this.firework.pos.y);
      // line(this.firework.pos.x, this.firework.pos.y, this.prevPos.x, this.prevPos.y)
    }
    else
      //Otherwise, draw the child-particles instead
      for(var i = 0; i < this.particles.length; i++) {
        //Add an additional fall amount to particles after they explode
        this.particles[i].vel.mult(particleVelocity);
        //Color the particles based off the initial firework color, with a bit of randomness
        stroke(hue(this.sColor) + random(-10,10), 100, 100, this.particles[i].lifespan);
        fill(hue(this.fColor) + random(-10,10), 100, 100, this.particles[i].lifespan);
        strokeWeight(this.particles[i].size*this.particles[i].lifespan);
        //Render the child-particle as a point
        //point(this.particles[i].pos.x, this.particles[i].pos.y);
        line(this.particles[i].pos.x, this.particles[i].pos.y, this.particles[i].prevPos.x, this.particles[i].prevPos.y,)
        // push();
        // translate(this.particles[i].pos.x, this.particles[i].pos.y)
        // rotate(i/TWO_PI)
        // image(img, 0, 0);
        // pop();
      }
  }

}
