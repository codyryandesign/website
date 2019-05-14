function Firework() {

  this.firework = new Particle(random(width), height, createVector(0, random(-5,-20)));
  this.color = mouseIsPressed ? map(mouseY, 0, height, 0, 360) : random(360);
  this.exploded = false;
  this.done = false;
  this.particles = [];

  this.update = function() {
    if(!this.exploded) {
      this.firework.applyForce(gravity);
      // this.firework.applyForce(wind*.1);
      this.firework.update();
      if(this.firework.vel.y >= 0)
        this.explode();
    }

    for(var i = this.particles.length-1; i >= 0 ; i--) {

      this.particles[i].applyForce(gravity);
      this.particles[i].applyForce(wind);
      this.particles[i].update();
      if(this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      }
      else {
        this.particles[i].lifespan -= random(particleDecay);
      }
    }

    if(this.exploded && this.particles.length == 0)
      this.done = true;
  }

  this.explode = function() {
    var numParticles = random(50, 300);
    for(let i = 0; i < numParticles; i++) {
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, p5.Vector.random2D());
      p.lifespan = 1;
      p.size = random(particleSize);
      p.vel.mult(random(explosionSize));
      this.particles.push(p);
    }
    this.exploded = true;
  }

  this.show = function() {
    if(!this.exploded) {
      stroke(this.color, 100, 100, 1);
      strokeWeight(rocketSize * this.firework.vel.mag()/2);
      point(this.firework.pos.x, this.firework.pos.y);
    }
    else
      for(var i = 0; i < this.particles.length; i++) {
        //Add an additional fall amount to particles after they explode
        this.particles[i].vel.mult(particleVelocity);
        //Color the particles based off the initial firework color, with a bit of randomness
        this.particles[i].color = this.firework.color + random(-30, 30);
        stroke(this.color + random(-20, 20), 100, 100, this.particles[i].lifespan);
        strokeWeight(this.particles[i].size*this.particles[i].lifespan);
        point(this.particles[i].pos.x, this.particles[i].pos.y);
      }
  }

}
