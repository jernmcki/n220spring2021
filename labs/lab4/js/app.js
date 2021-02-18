//create array
var x = [1, 2, 5, 10, 20, 40, 80, 160, 320];
function setup() {
    createCanvas(1000, 650);
    background(194,194,194);

    //create loop 10 times
    for(var i = 0; i < 10; i++) {
        fill(235, 0, 0);

        //position of array to get values in every loop
        circle(x[i], x[i], x[i]);

        fill(0, 251, 255);
        square(650, x[i], x[i]);

        fill(255, 255, 0);
        rect(500, x[i], 100, x[i]);





 
    }
}
