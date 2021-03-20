var counter = 0;


//create the function to setup your canvas
function setup(){
    createCanvas(1000, 1000);
    background(200);
    frameRate(5);
    
}

function draw(){
    //set the y var to mouse y and set xmouse equal to x var
    var yspeed = mouseY;
    var xmouse = mouseX;
    if(mouseY > 0 && mouseY < 1000 && mouseX > 0 && mouseX < 1000){
        var circlesize = 1000 - xmouse;
        // set the counter less than 0 so the circles get bigger and brighter as they go to the right
        if(counter < 10){
            //make mouse press to express to pressing of the mouse with a speed equal to 100 so it isn't too fast or slow
            if(mouseIsPressed){
                yspeed += 100
                circle(mouseX, yspeed, circlesize)
            } else {
                circle(mouseX, mouseY, circlesize) 
            }
            if(xmouse >= 0 && xmouse < 100){
                fill(255, 17, 0)
            }
            if(xmouse > 100 && xmouse < 200){
                fill(207, 16, 2)
            }
            if(xmouse > 200 && xmouse < 300){
                fill(161, 12, 2)
            }
            if(xmouse > 300 && xmouse < 400){
                fill(120, 8, 0)
            }
            if(xmouse > 400 && xmouse < 500){
                fill(84, 6, 0)
            }
            if(xmouse > 500 && xmouse < 600){
                fill(61, 5, 1)
            }
            if(xmouse > 600 && xmouse < 700){
                fill(41, 3, 0)
            }
            if(xmouse > 700 && xmouse < 800){
                fill(31, 2, 0)
            }
            if(xmouse > 800 && xmouse < 900){
                fill(23, 1, 0)
            }
            if(xmouse > 900 && xmouse <= 1000){
                fill(0, 0, 0)
            }
            counter++
        }
    }
}