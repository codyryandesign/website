function Particle() {
	this.pos = createVector(random(width), random(height));
	this.prevPos = this.pos.copy();
	this.vel = createVector(0,0);
	this.acc = createVector(0,0);
	this.force = createVector(0,0);
	this.maxSpeed = random(minSpeed, maxSpeed)
	//this.maxSpeed = map(micLevel, 0.0, 1.0, .1, 5);
	this.hueSpeed;
	this.h = 0;
	this.size;
	this.color = hue(color(strokeC));
	//this.symbol = notesArray[floor(random(notesArray.length))];

	this.updatePrev = function() {
		this.prevPos = this.pos.copy();
	}

	this.update = function() {
		this.updatePrev();
		// this.maxSpeed = random(minSpeed, maxSpeed);
		// if(enableMic) {
		// 	tempVector = createVector(map(micLevel, 0.0, 1.0, -1, 1), map(micLevel, 0.0, 1.0, -1, 1));
		// 	tempVector.mult(.1);
		// 	this.acc.sub(tempVector, this.pos);
		// }
		// this.maxSpeed = maxSpeed;
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
		this.force = p5.Vector.sub(target, this.pos);
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
		if(rainbowTrails && !enableMic) {
			// this.hueSpeed = map(this.vel.mag(), 0, 3, .1, 2);
			this.hueSpeed = map(this.vel.mag(), minSpeed, maxSpeed, .01, 1);
			this.h = (this.h + this.hueSpeed) % 360;
			//this.h = map(this.vel.mag(), minSpeed, maxSpeed, -360, 360)
			stroke(this.h, rainbowSaturation, 100, strokeA);
			//Fill will not render for lines, only shapes
			fill(this.h, rainbowSaturation, 100, strokeA);
		} else if (true){
			// stroke(hue(sColor), saturation(sColor), brightness(sColor), this.strokeA);
			stroke(this.color, saturation(sColor), brightness(sColor), strokeA);
			//Fill will not render for lines, only shapes
			fill(hue(fColor), saturation(fColor), brightness(fColor), strokeA);
		} //else {
		// 	this.color = (this.color + map(micLevel, 0, .001, -.01, .01))%360;
		// 	// stroke(hue(sColor), saturation(sColor), brightness(sColor), this.strokeA);
		// 	stroke(this.color, saturation(sColor), brightness(sColor), strokeA);
		// 	//Fill will not render for lines, only shapes
		// 	fill(hue(fColor), saturation(fColor), brightness(fColor), strokeA);
		// }

		strokeWeight(this.size);

		line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
		//ellipse(this.pos.x, this.pos.y, this.pos.x - this.prevPos.x, this.pos.y - this.prevPos.y);
		//text(this.symbol, this.pos.x, this.pos.y);
	}

	this.edges = function() {
		if (this.pos.x > width) {
			this.pos.x = 0;
			this.size = random(.1, particleSize)
			this.size = particleSize;
			//this.maxSpeed = map(micLevel, 0.0, 1.0, 1, 5);
			this.color = hue(color(strokeC)) + random(-30, 30);
			this.updatePrev();
		}
		if (this.pos.x < 0) {
			this.pos.x = width;
			this.size = random(.1, particleSize)
			//this.maxSpeed = map(micLevel, 0.0, 1.0, 1, 5);
			this.color = hue(color(strokeC)) + random(-30, 30);
			this.updatePrev();
		}
		if (this.pos.y > height) {
			this.pos.y = 0;
			this.size = random(.1, particleSize)
			//this.maxSpeed = map(micLevel, 0.0, 1.0, 1, 5);
			this.color = hue(color(strokeC)) + random(-30, 30);
			this.updatePrev();
		}
		if (this.pos.y < 0) {
			this.pos.y = height;
			this.size = random(.1, particleSize)
			//this.maxSpeed = map(micLevel, 0.0, 1.0, 1, 5);
			this.color = hue(color(strokeC)) + random(-30, 30);
			this.updatePrev();
		}

	}


}
