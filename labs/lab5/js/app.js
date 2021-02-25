
//set vars for different colors
var colors = ["purple", "red", "orange", "green"];

//creat your canvas
function setup() {
    createCanvas(500,500);
    background(200);

}

//draw your cirlce with the changing colors
function draw() {
    circle(250, 250, 450);
    strokeWeight(3);
    text("Click me to change color!", 100, 200, 350, 300);
    textSize(28);
}


//create function when mouse is clicked, the circle will change colors
function mouseClicked() {

    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    if(randomColor == "purple") {
        fill(colors[0]);
    }else if(randomColor == "red") {
        fill(colors[1]);
    }else if(randomColor == "orange") {
        fill(colors[2]);
    }else {
        fill(colors[3]);
    }

}

// for some reason, the circle wont appear at all. Could you give me some feedback as to why that is?