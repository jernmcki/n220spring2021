var x = 0

function setup() {
    createCanvas(1500, 600);
    background(100);


    for( var i = 0; i < 25; i++) {
        x = x + 50;

    if(i % 3 == 0 && i % 5 == 0) {
        fill(4, 0, 255);
        square(x - 20, 275, 50);
    }
    else if(i % 3 == 0){
        fill(144, 0, 255);
        circle(x, 300, 30);
    }
    else if(i % 5 == 0){
        fill(0, 255, 26);
        square(x - 20, 275, 50);
    }else{
        fill(0, 0, 0);
        circle(x, 300, 30);
    }
        }
}