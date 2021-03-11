
//created var for rect and set its positon, color, and height and weight
var rectangle = {
    x: 100, y: 150,
    width: 400, height: 300,
    color: "#ff00b7"
    
}
//create function for canvas
function setup(){
    createCanvas(600, 600);
    background(200);
}


//draw the rectangle and fill it
function draw() {
    rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    fill(rectangle.color);
}