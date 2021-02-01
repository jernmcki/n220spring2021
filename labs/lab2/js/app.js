var ball = {

    x: 300,
    y: 200,
    xSpeed: 4,
    ySpeed: 3,
}

function setup() {

    createCanvas(800, 550);

}

function draw() {

background(0, 247, 255)
fill(255, 251, 0);
stroke(0, 137, 168)
strokeWeight(8);



ellipse(ball.x, ball.y, 40, 40);

if(ball.x > width || ball.x < 0) {

ball.xSpeed = ball.xSpeed*-1;

}

if(ball.y > height || ball.y < 0) {

ball.ySpeed = ball.ySpeed*-1;

}


ball.x = ball.x + ball.xSpeed;
ball.y = ball.y + ball.ySpeed;
}
