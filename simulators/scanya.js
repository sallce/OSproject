function Scanya(iniArray,startPoint) {//set up initialization properties
  this.iniArray = iniArray;
  this.startPoint = startPoint;
  this.current = 0;
  this.tempArray = [];
  this.step = 0;
  this.depth = 20;
  this.final_array = [];
  this.totalMove = 0; 
  

 this.display = function() { //draw stuff

    if(this.current > 0){

      if(this.final_array.length > 0){

        var upBound = 0
        var intCurrent = this.current.toFixed(0);

        if( intCurrent >= this.final_array.length){
          upBound = this.final_array.length - 1;
        }else{
          upBound = this.intCurrent;
        }
        for(var i = 0; i < upBound; i ++){
          line(this.final_array[i]*10, this.depth*(i+1),this.final_array[i+1]*10,this.depth*(i+2));

          ellipse(this.final_array[i]*10,this.depth*(i+1), 10, 10);
          textSize(14);
          text(this.final_array[i], this.final_array[i]*10 + 5, this.depth*(i+1));

          ellipse(this.final_array[i+1]*10,this.depth*(i+2), 10, 10);
          text(this.final_array[i+1], this.final_array[i+1]*10 + 5, this.depth*(i+2));

        }

        if((intCurrent-this.final_array.length) > 5){
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
    this.totalMove = 0;

    while(this.final_array.length>0){
      this.final_array.length.pop();
    }

    while(this.tempArray.length > 0) {
        this.tempArray.pop();
    }

    var tempIndex = 0;
    while(tempIndex < this.iniArray.length){
      this.tempArray[tempIndex] = this.iniArray[tempIndex];
      tempIndex = tempIndex + 1;
    }


    var arrayLength = this.tempArray.length;
    var diskLoction; // after sorting, where is the header
    var temp;
    this.tempArray[arrayLength] = this.startPoint;
    arrayLength = arrayLength + 1;


    for(var i = 0; i < arrayLength; i++)    // sorting disk locations
    {
      for(var j=i; j < arrayLength; j++)
      {
        if(this.tempArray[i] > this.tempArray[j])
        {
          temp=this.tempArray[i];
          this.tempArray[i] = this.tempArray[j];
          this.tempArray[j] = temp;
        }
      }
    }

    for(var i = 0; i< arrayLength; i++)   // to find loc of disc in array
    {
      if(this.startPoint == this.tempArray[i]) { 
        diskLoction = i; 
        break; 
      }
    }

    var count = 0;

    for(var i = diskLoction; i>=0 ;i--){
      this.final_array[count] = this.tempArray[i];
      count = count + 1;
    }

    for(var i = diskLoction + 1; i < arrayLength; i++){
      this.final_array[count] = this.tempArray[i];
      count = count + 1;
    }
    var current_move = 0;
    for(var i = 0; i< count-1; i++){
      current_move = abs(this.final_array[i+1] - this.final_array[i]);
      this.totalMove = this.totalMove + current_move;
      }
    console.log(this.tempArray);
  }
}
