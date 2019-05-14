class Particle {
  constructor() {
    this.pos = p5.Vector.random2D();
    this.rays = [];
    this.color = random(360);
    this.saturation = random(rayS, 100);
    this.force;

    for (let a = 0; a < numRays; a+= rayIncrement) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  applyForce(force) {
    this.pos.set(force);
  }

  seek(target) {
  this.force = target.sub(this.pos);
  //Reduce the magnitude of the target force
  this.force.setMag(.6)
  this.force.limit(this.maxSpeed);
  this.applyForce(this.force);
  }

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
            closest = pt;
            if(closest < closestMax) {
              closestMax = closest;
            }
          }
        }
      }
      if(closest) {
        push();
        let rColor = color(rayC);
        if(rayColorEnabled) {
          stroke(hue(rColor), rayS, brightness(rColor), rayA);
        }
        else {
          stroke(this.color, this.saturation, 100, rayA);
        }
        line(this.pos.x, this.pos.y, closest.x, closest.y)
        pop();
      }
      if (record < .5) {
        this.color = random(360);
        this.saturation = random(rayS, 100);
      }
    }

  }

  cross(boundary) {
    //Calculate the slope of the boundary
    let m = (boundary.a.y - boundary.b.y / boundary.a.x - boundary.b.x);
    //Calculate the y-intercept
    let b =  boundary.a.y - (m * boundary.a.x)
    //y = mx + b
    if(floor(this.pos.y) < m * this.pos.x + b) {
      //TODO IMPLEMENT CROSS DETECTION
    }
    //When particle crosses a boundary

    // if(e >= 5) {
    //     this.color = random(360);
    //   }
    }

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
