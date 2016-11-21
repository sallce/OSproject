function Fcfsyi(iniArray,startPoint) {//set up initialization properties
  this.iniArray = iniArray;
  this.startPoint = startPoint;
  this.current = 0;
  this.step = 0;
  this.depth = 20;
  

  this.display = function() { //draw stuff
    stroke(255);
    fill(255, 100);
    ellipse(this.startPoint, 10, 10, 10);
  }

  this.update = function() {//update properties achiving animation

  }

  this.order = function(){

  }
}
