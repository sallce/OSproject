var colo = 255;
var run = false;
var sstfsh;
var scanya;
var cscanyi;
var fcfsyi;
var looksh;

function setup() {
	var canva = createCanvas(600, 400);
	canva.parent("demo")
	sstfsh = new Sstfsh(random(width),random(height));
}

function draw() {
	background(0);
	strokeWeight(4);
	stroke(colo);
	if(run){

	  sstfsh.display();
	  sstfsh.update();
	}
	
}
