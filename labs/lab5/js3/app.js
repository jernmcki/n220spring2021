//define variables
var circleX = 400;
var circleY = 300;
var Size = [47, 50, 53, 57, 60];
var Size2 = 50;
var PrimColors = ["red", "blue", "green", "yellow","black","pink","purple"];

//setupcanvas and lock framerate to 10 
function setup() {
    createCanvas(800, 600);
    background(200);
    frameRate(10);
    textSize(20);
    text("Click circle to get different colors and sizes!", 220, 200, 400, 400);

}

function draw() {
    //if the mouse is pressed, pick a random color 
    if(mouseIsPressed) {
        var randomSize = Size[Math.floor(Math.random() * Size.length)];
        var randomColor = PrimColors[Math.floor(Math.random() * PrimColors.length)];
        follow(randomSize, randomColor);
    //if the mouse isn't pressed draw a regular blue circle on the screen
    }else {
        circle(circleX, circleY, Size2);
        fill(0, 0, 255);
    }
}

//follow function takes in the parameters to determine shape and color 
function follow(shape, color) {
    background(200);
    //when mouse is clicked, follow the cursor by using its x and y values 
    circle(mouseX, mouseY, shape)
    //whatever color is generated, apply it to circle
    fill(color);
}