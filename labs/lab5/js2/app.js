//declare variables for ellipse and movement speed
var ellipseX = 50;
var ellipseY = 200;
var ellipseSize = 50;
var xSpeed = 2.5;
var ySpeed = 2.5;

//create canvas
function setup() {
    createCanvas(800, 600);
}

function draw() {
    //each frame add xSpeed and ySpeed (2.5) to the x and y positions 
    ellipseX += xSpeed;
    ellipseY += ySpeed;
    background(222, 255, 173);
    ellipse(ellipseX, ellipseY, ellipseSize, ellipseSize)
    fill(252, 53, 3);

    //make rect for ball to bounce
    rect(180, 575, 450, 65);
    fill(171, 101, 27);

    var overlap = hitTestBox(ellipseX, ellipseY, ellipseX, ellipseY, ellipseSize, ellipseSize);

    if(overlap) {
        xSpeed = -xSpeed;
        ySpeed = -ySpeed;
    }

    //make ball bounce off walls by flipping the direction it is moving in
    if(ellipseX > width - ellipseSize || ellipseX < ellipseSize) {
        xSpeed = -xSpeed;
    }
    if(ellipseY > height - ellipseSize || ellipseY < ellipseSize) {
        ySpeed = -ySpeed;
    }
}
function hitTestBox(pointX, pointY, x, y, width, height) {
    if((pointX > x) && (pointX < x + width) && (pointY > y) && (pointY < y + height)) {
        return true;
    }
    return false;
}
