var diameter = 100;
var grow = true;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(31, 255, 98);
  fill(130, 255, 168)
  strokeWeight(3)
	ellipse(330,330,diameter)
	
	if(diameter > 200){
	grow = false;
	}
	
	if(diameter < 1){
	grow = true;
	}
	
	if(grow){
	diameter++
	}
	
	if(!grow){
	diameter--
	}
}