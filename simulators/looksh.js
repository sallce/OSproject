
function Looksh(iniArray,startPoint) {//set up initialization properties
  this.iniArray = iniArray;
  this.startPoint = startPoint;
  this.current = 0;
  this.step = 0;
  this.depth = 30;
  this.before = [];
  this.after = [];
  this.lengthBefore = 0;
  this.lengthAfter = 0;
  this.totalMove = 0;
  

  this.display = function() { //draw stuff

    ellipse(this.startPoint*10, 10, 10, 10);

    if(this.current > 0){

      if(this.before.length > 0){

        line(this.startPoint*10, 10,this.before[this.before.length-1]*10,this.depth*1);
        //ellipse(this.before[this.before.length-1]*10,this.depth*1, 10, 10);
        textSize(14);
        text(this.startPoint, this.startPoint*10 + 5, 10);
        var j = 0
        var intCurrent = this.current.toFixed(0);

        if( intCurrent >= this.before.length){
          j = this.before.length - 1;
        }else{
          j = this.intCurrent;
        }
        var i = this.before.length - 1;

        while(j > 0){

          line(this.before[i]*10, this.depth*(this.before.length-i),this.before[i-1]*10,this.depth*(this.before.length-i+1));

          ellipse(this.before[i]*10,this.depth*(this.before.length-i), 10, 10);
          textSize(14);
          text(this.before[i], this.before[i]*10 + 5, this.depth*(this.before.length-i));

          ellipse(this.before[i-1]*10,this.depth*(this.before.length-i+1), 10, 10);
          text(this.before[i-1], this.before[i-1]*10 + 5, this.depth*(this.before.length-i+1));

          j = j - 1;
          i = i - 1; 
         
        }

        var numberOfAfterPoints = this.current - this.before.length;
        var points = 0;
        numberOfAfterPoints = numberOfAfterPoints.toFixed(0);
        if(numberOfAfterPoints >= this.after.length){
          points = this.after.length - 1;
        }else{
          points = numberOfAfterPoints;
        }

        var i = this.after.length - 1;
        
        while(points > 0){

          line(this.after[i]*10, this.depth*(this.after.length-i + this.before.length),this.after[i-1]*10,this.depth*(this.after.length-i+1 +this.before.length));

          ellipse(this.after[i]*10,this.depth*(this.after.length-i + this.before.length), 10, 10);
          textSize(14);
          text(this.after[i], this.after[i]*10 + 5, this.depth*(this.after.length-i + this.before.length));

          ellipse(this.after[i-1]*10,this.depth*(this.after.length-i+1 +this.before.length), 10, 10);
          text(this.after[i-1], this.after[i-1]*10 + 5, this.depth*(this.after.length-i+1+this.before.length));

          points = points - 1;
          i = i - 1;
         
        }

        if(numberOfAfterPoints > (this.after.length + 5)){
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
    while(this.before.length > 0) {
        this.before.pop();
    }
    while(this.after.length > 0) {
        this.after.pop();
    }

    this.current = 0;

    var i = 0;
    while(i < this.iniArray.length){
      if(this.iniArray[i]<this.startPoint){
        //before initial point
        this.before.push(this.iniArray[i]);
      }else{
        //after initial point
        this.after.push(this.iniArray[i]);
      }
      i = i + 1;
    }
    this.lengthBefore = this.before.length;
    this.lengthAfter = this.after.length;
    

    this.before = sort(this.before, this.lengthBefore);

    this.after = sort(this.after, this.lengthAfter);

    if(this.lengthBefore == 0 && this.lengthAfter != 0){
      this.totalMove = this.after[this.lengthAfter - 1] - this.after[0];
    }else if(this.lengthBefore != 0 && this.lengthAfter == 0){
      this.totalMove = this.startPoint - this.before[0]
    }else if(this.lengthBefore != 0 && this.lengthAfter != 0){
      this.totalMove = this.startPoint - this.before[0] + this.after[this.lengthAfter - 1] - this.after[0];
    }else{
      this.totalMove = 0;
    }
   
    alert(this.totalMove);

  }


}
