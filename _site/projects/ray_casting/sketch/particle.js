class Particle {
  constructor() {
    this.pos = p5.Vector.random2D();
    this.posPrev

    // this.position = p5.Vector.random2D();
    // this.positionPrev;
    // this.velocity = createVector(0, 0);
    // this.acceleration = createVector(0, 0);

    this.rays = [];
    this.heading = 0;
    this.color = random(360);
    this.blackestBlack = 0;
    this.lerpColor;
    this.saturation = random(raySat, 100);
    this.force;

    for (let a = 0; a < numRays; a+= 1) {
    // for (let a = 0; a < 40; a++) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  rotate() {
    this.heading += p5.Vector.fromAngle(createVector(mouseX, mouseY).angleBetween(this.pos) );
    for (let i = 0; i < this.rays.length; i++) {
      this.rays[i].setAngle(radians(i) + this.heading);
    }
  }

  // applyForce(force) {
  //   let f = createVector(force);
  //   this.acceleration.add(f);
  // }
  //
  // update() {
  //   this.positionPrev = this.position.copy();
  //   // Velocity changes according to acceleration
  //   this.velocity.add(this.acceleration);
  //   // position changes by velocity
  //   this.position.add(this.velocity);
  //   // We must clear acceleration each frame
  //   this.acceleration.mult(0);
  // }

  applyForce(force) {
    this.posPrev = this.pos.copy();
    this.pos.set(force);
  }

  // getHeading() {
  //   let posCopy = this.pos.copy();
  //   this.heading = atan2(this.pos.y, this.pos.x);
  //   // console.log(heading);
  // }

  // seek(target) {
  // this.force = target.sub(this.pos);
  // //Reduce the magnitude of the target force
  // this.force.setMag(.6)
  // this.force.limit(this.maxSpeed);
  // this.applyForce(this.force);
  // }

  look(boundaries) {
    let closestMax = Infinity;
    for (let ray of this.rays) {
      let closest = null;
      let record = Infinity;
      for(let boundary of boundaries) {
        const pt = ray.cast(boundary);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if(d < record) {
            record = d;
            // let ptFract = point(pt.x/2, pt.y/2)
            closest = pt;
            if(closest < closestMax) {
              closestMax = closest;
            }
          }
        }
      }
      if(closest) {
        // push();
        let rColor = color(rayHue);
          // let lColor = lerpColor(color(this.color), color(0,0,0, .01), .5);
        if(!randomizeRayColors) {
          stroke(hue(rColor), saturation(rColor), brightness(rColor), rayAlpha);
        }
        else {
          stroke(this.color, raySat, rayBright, rayAlpha);
        }
        // translate(this.pos.x, this.pos.y);
        // rotate(this.heading);
        line(this.pos.x, this.pos.y, closest.x, closest.y)
        // ellipse(this.pos.x, this.pos.y, this.pos.x-this.closest.x, this.pos.y-this.closest.y)
        // pop();
      }
      if (record < .5) {
        this.color = random(360);
        this.saturation = random(raySat, 100);
      }
    }

  }

  // cross(boundary) {
  //   //Calculate the slope of the boundary
  //   let m = (boundary.a.y - boundary.b.y / boundary.a.x - boundary.b.x);
  //   //Calculate the y-intercept
  //   let b =  boundary.a.y - (m * boundary.a.x)
  //   //y = mx + b
  //   if(floor(this.pos.y) < m * this.pos.x + b) {
  //     //TODO IMPLEMENT CROSS DETECTION
  //   }
  //   //When particle crosses a boundary
  //
  //   // if(e >= 5) {
  //   //     this.color = random(360);
  //   //   }
  //   }

    handleRays() {
      if(this.rays.length < numRays) {
        for (let a = this.rays.length; a < numRays; a++) {
          this.rays.push(new Ray(this.pos, radians(a)));
        }
      }
      else if (this.rays.length > numRays) {
        for (let a = this.rays.length; a > numRays - 1; a--) {
          this.rays.splice(a, 1);
        }
      }
    }

}
