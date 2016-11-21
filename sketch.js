var colo = 255;
var run = false;
var needOrder = true;
var selection = 1;
var initialArray = [];
var pnumber = 0;
var startPoint = Math.floor((Math.random() * 900) + 10);
var sstfsh;
var scanya;
var cscanyi;
var fcfsyi;
var looksh;


function setup() {
	var canva = createCanvas(1000, 400);
	canva.parent("demo")
	sstfsh = new Sstfsh(initialArray,pnumber,startPoint);
	scanya = new Scanya(initialArray,pnumber,startPoint);
	cscanyi = new Cscanyi(initialArray,pnumber,startPoint);
	fcfsyi = new Fcfsyi(initialArray,pnumber,startPoint);
	looksh = new Looksh(initialArray,pnumber,startPoint);
}

function draw() {
	background(0);
	strokeWeight(4);
	stroke(colo);
	if(run){

	  if(selection == 1){
	  	fcfsyi.display();
	  	fcfsyi.update();
	  }else if(selection == 2){
	  	sstfsh.display();
	  	sstfsh.update();
	  }else if(selection == 3){
	  	scanya.display();
	  	scanya.update();
	  }else if(selection == 4){
	  	cscanyi.display();
	  	cscanyi.update();
	  }else if(selection == 5){
	  	looksh.display();
	  	looksh.update();
	  	if(needOrder){
	  		looksh.order();
	  		needOrder = false;
	  	}
	  	
	  }

	}
	
}


