function setup() {

    var white = (255, 255, 255);
var startX = 72;

    createCanvas(800,600);
    noStroke();

    background(230, 255, 3);

//head
fill(232, 196, 149); 
 circle(100,100,30); 

//body
 fill(214, 41, 67);
 rect(startX, 125, 55, 135);
 
 //left arm
 fill(232, 196, 149);
 rect(70, 125, 11, 90);

 //right arm
 fill(232, 196, 149);
 rect(118, 125, 11, 90);

 //left eye
 fill(11, 36, 4);
 circle(90,97,5);

 //left eye white
 fill(255, 255, 255);
 circle(90,97,1.9);

//right eye
 fill(11, 36, 4);
 circle(110,97,5);

 //right eye white
 fill(255, 255, 255);
 circle(110,97,1.9);

 //pants
 fill(11, 0, 107);
 rect(startX, 230, 55, 107);

 //shoes
fill(56, 2, 2);
rect(startX, 335, 24, 10)

fill(56, 2, 2);
rect(103, 335, 24, 10)



}