function Cscanyi(x, y) {//set up initialization properties
  this.x = x;
  this.y = y;

  this.display = function() { //draw stuff
    stroke(255);
    fill(255, 150);
    ellipse(this.x, this.y, 48, 48);
  }

  this.update = function() {//update properties achiving animation
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);

  }
}
