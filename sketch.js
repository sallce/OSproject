var run = false;
var needOrder = true;
var selection = 1;
var initialArray = [];
var pnumber = 0;
var startPoint = Math.floor((Math.random() * 80) + 10);
var restart = false;
var sstfsh;
var scanya;
var cscanyi;
var fcfsyi;
var looksh;


function setup() {
	var canva = createCanvas(1000, 580);
	canva.parent("demo")
	fcfsyi = new Fcfsyi(initialArray,startPoint);
	sstfsh = new Sstfsh(initialArray,startPoint);
	scanya = new Scanya(initialArray,startPoint);
	cscanyi = new Cscanyi(initialArray,startPoint);
	looksh = new Looksh(initialArray,startPoint);
}

function draw() {
	background(191,201,202);
	strokeWeight(1.5);
	stroke(84,153,199);
	if(restart == true){
		startPoint = Math.floor((Math.random() * 80) + 10);
		fcfsyi = new Fcfsyi(initialArray,startPoint);
		sstfsh = new Sstfsh(initialArray,startPoint);
		scanya = new Scanya(initialArray,startPoint);
		cscanyi = new Cscanyi(initialArray,startPoint);
		looksh = new Looksh(initialArray,startPoint);
		restart = false;
	}
	if(run){

	  if(selection == 1){
	  	fcfsyi.display();
	  	fcfsyi.update();
	  	if(needOrder){
	  		fcfsyi.order();
	  		needOrder = false;
	  	}

	  }else if(selection == 2){
	  	sstfsh.display();
	  	sstfsh.update();
	  	if(needOrder){
	  		sstfsh.order();
	  		needOrder = false;
	  	}

	  }else if(selection == 3){
	  	scanya.display();
	  	scanya.update();
	  	if(needOrder){
	  		scanya.order();
	  		needOrder = false;
	  	}

	  }else if(selection == 4){
	  	cscanyi.display();
	  	cscanyi.update();
	  	if(needOrder){
	  		cscanyi.order();
	  		needOrder = false;
	  	}

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


