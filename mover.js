// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function(mass, x, y) {
  this.position = createVector(x, y);
  this.prevPosition = createVector(x,y);
  this.velocity = createVector(1, 0);
  this.acceleration = createVector(0, 0);
  this.mass = mass;

  this.applyForce = function(force) {
    var f = p5.Vector.div(force,this.mass);
    this.acceleration.add(f);
  };
    
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.prevPosition.set(this.position.x,this.position.y);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.display = function(vol) {
    stroke(255, 150);
    strokeWeight(1);
    fill(0, 150);
    //ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
    line(this.position.x, this.position.y, this.prevPosition.x, this.prevPosition.y);
    ellipseMode(CENTER);
    ellipse(this.position.x, this.position.y, vol, vol);
  };

  this.checkEdges = function() {
    if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  };
};