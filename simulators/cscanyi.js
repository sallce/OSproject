function Cscanyi(iniArray,startPoint) {//set up initialization properties
  this.iniArray = iniArray;
  this.startPoint = startPoint;
  this.current = 0;
  this.step = 0;
  this.depth = 30;
  this.finalArray = [];
  this.sortedArray = [];
  this.after = false;
  this.before = false;
  this.lengthSortedArray = 0;
  this.lengthfinalArray = 0;
  this.totalMove = 0;

  this.display = function() { //draw stuff
    //stroke(255);
    //fill(255, 100);
    //ellipse(this.startPoint, 10, 10, 10);
    //ellipse(this.startPoint*10, 10, 10, 10);

    if(this.current > 0){

      if(this.finalArray.length > 0){

        //line(this.startPoint*10, 10,this.finalArray[0]*10,this.depth*1);
        //ellipse(this.before[this.before.length-1]*10,this.depth*1, 10, 10);
        //textSize(14);
        //text(this.startPoint, this.startPoint*10 + 5, 10);

        var upBound = 0
        var intCurrent = this.current.toFixed(0);

        if( intCurrent >= this.finalArray.length){
          upBound = this.finalArray.length - 1;
        }else{
          upBound = this.intCurrent;
        }
        for(var i = 0; i < upBound; i++){
          if(this.after == true && this.finalArray[i] != 95 || this.before == true && this.finalArray[i] != 0) {
          line(this.finalArray[i]*10, this.depth*(i+1),this.finalArray[i+1]*10,this.depth*(i+2));

          ellipse(this.finalArray[i]*10,this.depth*(i+1), 10, 10);
          textSize(14);
          text(this.finalArray[i], this.finalArray[i]*10 + 5, this.depth*(i+1));

          ellipse(this.finalArray[i+1]*10,this.depth*(i+2), 10, 10);
          text(this.finalArray[i+1], this.finalArray[i+1]*10 + 5, this.depth*(i+2));
          }
        }

        if((intCurrent-this.finalArray.length) > 5){
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
    while(this.sortedArray.length > 0) {
        this.sortedArray.pop();
    }
    while(this.finalArray.length > 0) {
        this.finalArray.pop();
    }
   
    this.current = 0;
    var i = 0;
    while(i < this.iniArray.length){
      this.sortedArray.push(this.iniArray[i]);
      i = i + 1;
    }
   
    this.lengthSortedArray = this.sortedArray.length;
    /* Add startPoint to the sorted array */
    this.sortedArray.push(this.startPoint);
    this.lengthSortedArray = this.lengthSortedArray + 1;
     
    /* Add tail track to the sorted array */
    var tailTrack = 95;
    this.sortedArray.push(tailTrack);
    this.lengthSortedArray = this.lengthSortedArray + 1;
     
    /* Add head track to the sorted array */
    var headTrack = 0;
    this.sortedArray.push(headTrack);
    this.lengthSortedArray = this.lengthSortedArray + 1;
     
    this.sortedArray = sort(this.sortedArray, this.lengthSortedArray);
     
     /* Locate the starting location */
     var startLocation;
     for(var i = 0; i < this.lengthSortedArray; i++) {
      if(this.sortedArray[i] == this.startPoint) {
       startLocation = i;
       break;
      }
     }
     
     /* Decide which direction(head or tail track) to move to first */
     var moveHead = abs(this.sortedArray[startLocation] - this.sortedArray[startLocation - 1]);
     var moveTail = abs(this.sortedArray[startLocation] - this.sortedArray[startLocation + 1]);
     
     if( moveHead > moveTail) { // if moveHead > moveTail then move to the tail first.
      this.after = true;
      for(var i = startLocation; i < this.lengthSortedArray; i++) {  // tracks from start location to the tail track
       this.finalArray.push(this.sortedArray[i]);
      }
      for(var i = 0; i < startLocation; i++) { // tracks from head to start location
       this.finalArray.push(this.sortedArray[i]);
      }
      this.totalMove = tailTrack - moveHead;
     }
     else if(moveHead <= moveTail){
      this.before = true;
      for(var i = startLocation; i >= 0; i--) { // tracks from start location to head
       this.finalArray.push(this.sortedArray[i]);
      }
      for(var i = this.lengthSortedArray - 1; i > startLocation; i--) { // tracks from the tail track to start location
       this.finalArray.push(this.sortedArray[i]);
      }
      this.totalMove = tailTrack - moveTail;
     }
     console.log(this.finalArray);
  }
}
