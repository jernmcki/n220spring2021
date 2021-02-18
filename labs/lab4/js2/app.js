//create array
//used colorz because color was too specific
var colorz = ["#ffb3f9", "#ffb25e", "#bfb4a8"];
//set var x to establish 0
var x = 0
function setup() {
    createCanvas(1000, 650);
    background(194,194,194);
//set i < 3 to establish the dif colors being set
//when you say "horizontal" i put the colors horizontal with each other, i hope thats what you wanted
    for( var i = 0; i < 3; i++) {
        x = x + 100;
        fill(colorz[i])
        rect(x, 200, 100, 300)
    }
}
