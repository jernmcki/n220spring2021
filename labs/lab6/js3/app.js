//create your var for your rect and create its x and y val and size

var rectangle = {
    x: 100, y: 150,
    width: 200, height: 100,
    color: "#00ff00"
    
}


//create the function to setup your canvas
function setup(){
    createCanvas(600, 600);
    background(200);
    
}


//function to draw your rect
function draw() {

    if(rectangle.width <= 400) {
        rect(rectangle.x, rectangle.y, rectangle.width++, rectangle.height);
        fill(rectangle.color);
    if(rectangle.width > 200) {
        fill(0, 0, 255);
    }
    } else if(rectangle.height <= 300) {
        rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height++);
        fill(rectangle.color);
    } 

}