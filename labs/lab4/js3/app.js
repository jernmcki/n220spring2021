//make canvas

function setup() {
    createCanvas(1000, 650);
    background(194,194,194);
}
//set var for your y variable
var yspeed = 200

function draw(){

    //use mouse pressed with += 5 to have rect go down 5 pixels/fram
    if(mouseIsPressed){
        yspeed += 5
        rect(mouseX, yspeed, 100, 200)
        fill(235, 0, 0)

    }


}






