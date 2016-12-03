function Sstfsh(iniArray,startPoint) {//set up initialization properties
  this.iniArray = iniArray;
  this.startPoint = startPoint;
  this.current = 0;
  this.before = [];
  this.tempArray = [];
  this.depth = 30;
  this.totalMove = 0; 

  this.display = function() { //draw stuff
    ellipse(this.startPoint*10, 10, 10, 10);

    if(this.current > 0){

      if(this.before.length > 0){

        line(this.startPoint*10, 10,this.before[0]*10,this.depth*1);
        //ellipse(this.before[this.before.length-1]*10,this.depth*1, 10, 10);
        textSize(14);
        text(this.startPoint, this.startPoint*10 + 5, 10);

        var upBound = 0
        var intCurrent = this.current.toFixed(0);

        if( intCurrent >= this.before.length){
          upBound = this.before.length - 1;
        }else{
          upBound = this.intCurrent;
        }
        for(var i = 0; i < upBound; i ++){
          line(this.before[i]*10, this.depth*(i+1),this.before[i+1]*10,this.depth*(i+2));

          ellipse(this.before[i]*10,this.depth*(i+1), 10, 10);
          textSize(14);
          text(this.before[i], this.before[i]*10 + 5, this.depth*(i+1));

          ellipse(this.before[i+1]*10,this.depth*(i+2), 10, 10);
          text(this.before[i+1], this.before[i+1]*10 + 5, this.depth*(i+2));

        }

        if((intCurrent-this.before.length) > 5){
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

    while(this.before.length > 0) {
        this.before.pop();
    }

    while(this.tempArray.length > 0) {
        this.tempArray.pop();
    }

    var i = 0;
    var bestStart = 0;
    var bestDistance = abs(this.iniArray[bestStart] - this.startPoint);
    var tempPoint = this.startPoint;

    var tempIndex = 0;
    while(tempIndex < this.iniArray.length){
      this.tempArray[tempIndex] = this.iniArray[tempIndex];
      tempIndex = tempIndex + 1;
    }

    while(i < this.tempArray.length){
      var j = 0;
      while(j < this.tempArray.length){
        if(abs(this.tempArray[j] - tempPoint)<bestDistance){
          bestDistance = abs(this.tempArray[j] - tempPoint);
          bestStart = j;
        }
        j = j + 1;
      }
      this.before.push(this.iniArray[bestStart]);
      tempPoint = this.iniArray[bestStart];
      bestDistance = 10000;
      this.tempArray[bestStart] = 100000000;
      i = i + 1;
    }

    var i = 0;
    while(i < this.before.length - 1){
      moveInArray = moveInArray + abs(this.before[i+1] - this.before[i]);
      i = i + 1;
    }
    this.totalMove = moveInArray + abs(this.startPoint - this.before[0]);
  }


}
