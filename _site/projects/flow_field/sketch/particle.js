function Particle() {
	this.pos = createVector(random(width), random(height));
	this.prevPos;
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
	this.force = createVector(0,0);
	this.maxSpeed;
	this.hueSpeed;
	this.h = 0;
	this.size;

	this.updatePrev = function() {
		this.prevPos = this.pos.copy();
	}

	this.update = function() {
		this.updatePrev();
		this.maxSpeed = random(minSpeed, maxSpeed);
		this.vel.add(this.acc);
		this.vel.limit(this.maxSpeed);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.follow = function(vectors) {
		var x = floor(this.pos.x / scl);
		var y = floor(this.pos.y / scl);
		var index = x + y * cols;
		this.force = vectors[index];
		this.applyForce(this.force);
	}

	this.seek = function(target) {
		this.force = target.sub(this.pos);
		//Reduce the magnitude of the target force
		this.force.setMag(targetMagnitude)
		this.force.limit(this.maxSpeed);
		this.applyForce(this.force);
	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}

	this.show = function() {
		let sColor = color(strokeC);
		let fColor = color(fillC);
		if(rainbowTrails) {
			stroke(this.h, rainbowSaturation, 100, strokeA);
			//Fill will not render for lines, only shapes
			fill(this.h, rainbowSaturation, 100, strokeA);
		} else {
			stroke(hue(sColor), saturation(sColor), brightness(sColor), strokeA);
			//Fill will not render for lines, only shapes
			fill(hue(fColor), saturation(fColor), brightness(fColor), fillA);
		}

		strokeWeight(this.size);
		this.hueSpeed = map(this.vel.mag(), 0, 3, .1, 2);
		this.h = (this.h + this.hueSpeed) % 360;
		line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
		//ellipse(this.pos.x, this.pos.y, this.pos.x - this.prevPos.x, this.pos.y - this.prevPos.y);
	}

	this.edges = function() {
		if (this.pos.x > width) {
			this.pos.x = 0;
			this.size = random(.1, particleSize)
			this.updatePrev();
		}
		if (this.pos.x < 0) {
			this.pos.x = width;
			this.size = random(.1, particleSize)
			this.updatePrev();
		}
		if (this.pos.y > height) {
			this.pos.y = 0;
			this.size = random(.1, particleSize)
			this.updatePrev();
		}
		if (this.pos.y < 0) {
			this.pos.y = height;
			this.size = random(.1, particleSize)
			this.updatePrev();
		}

	}


}
