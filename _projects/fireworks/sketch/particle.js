

function Particle(x,y, velocity) {

  this.pos = createVector(x,y);
  this.vel = velocity || createVector(0,0);
  this.acc = createVector(0,0);
  this.lifespan;
  this.size;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }



}
