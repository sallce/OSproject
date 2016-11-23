function Fcfsyi(iniArray,startPoint) {//set up initialization properties
  this.iniArray = iniArray;
  this.startPoint = startPoint;
  this.current = 0;
  this.depth = 30;
  this.totalMove = 0; 

  this.display = function() { //draw stuff
    ellipse(this.startPoint*10, 10, 10, 10);

    if(this.current > 0){

      if(this.iniArray.length > 0){

        line(this.startPoint*10, 10,this.iniArray[0]*10,this.depth*1);
        //ellipse(this.before[this.before.length-1]*10,this.depth*1, 10, 10);
        textSize(14);
        text(this.startPoint, this.startPoint*10 + 5, 10);

        var upBound = 0
        var intCurrent = this.current.toFixed(0);

        if( intCurrent >= this.iniArray.length){
          upBound = this.iniArray.length - 1;
        }else{
          upBound = this.intCurrent;
        }
        for(var i = 0; i < upBound; i ++){
          line(this.iniArray[i]*10, this.depth*(i+1),this.iniArray[i+1]*10,this.depth*(i+2));

          ellipse(this.iniArray[i]*10,this.depth*(i+1), 10, 10);
          textSize(14);
          text(this.iniArray[i], this.iniArray[i]*10 + 5, this.depth*(i+1));

          ellipse(this.iniArray[i+1]*10,this.depth*(i+2), 10, 10);
          text(this.iniArray[i+1], this.iniArray[i+1]*10 + 5, this.depth*(i+2));

        }

        if((intCurrent-this.iniArray.length) > 5){
            textSize(18);
            text("Total head movement: ", 450, 500);
            text(this.totalMove, 500, 550);
        }

      }
    }
  }

  this.update = function() {//update properties achiving animation
    if(this.current < 10000){
      this.current = this.current + 0.1;
    }
  }

  this.order = function(){
    this.current = 0;

    var moveInArray = 0;

    var i = 0;
    while(i < this.iniArray.length - 1){
      moveInArray = moveInArray + abs(this.iniArray[i+1] - this.iniArray[i]);
      i = i + 1;
    }
    this.totalMove = moveInArray + abs(this.startPoint - this.iniArray[0]);
  }


}
