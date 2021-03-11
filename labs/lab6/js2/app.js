//create multiple circles with the same diameter but have different x and y values

var circles = [
    {x: 30, y: 20, diameter: 30},
    {x: 80, y: 80, diameter: 30},
    {x: 160, y: 130, diameter: 30},
    {x: 200, y: 200, diameter: 30},
    {x: 300, y: 300, diameter: 30},
    {x: 400, y: 400, diameter: 30},
    {x: 250, y: 40, diameter: 30},
    {x: 330, y: 60, diameter: 30},
    {x: 240, y: 100, diameter: 30},
    {x: 280, y: 150, diameter: 30},
    {x: 360, y: 180, diameter: 30},
    {x: 450, y: 230, diameter: 30}
]

//create your canvas

function setup() {
    createCanvas(600, 600);
    background(200);
}

//create the draw function and have i be less than the circles length
//have the circles slowly move down screen and multiply

function draw() {
    for(var i = 0; i < circles.length; i++) {
        circle(circles[i].x, circles[i].y, circles[i].diameter);
        circles[i].y += Math.random() * 5;
        fill(0, 200, 0);
        
        if(circles[i].y > 600) {
            circles[i].y = 0;
        }

    }

}