//Katie Stinson 9/8/22

//here i am setting the variables of how fast the circle will move on each of the axis' and setting the x and y values
var speedX = 2;
var speedY = 6;
var diameter = 20;
var velocity = 10;
var size = 25;
var x;
var y;


//this makes the canvas so that we dont have a blank page and the x and y values have the height and width to show where the circle will move from
function setup() {
createCanvas (800,600);
x = width/2;
y = height/2;
}


//now here is the fun part. i start by creating the circle and add the += values to make it so the circle will move at a set speed
//next i add two if statements that make it so that the ball will stay on the screen but will move in random ways and continuously bounce for eternity. yay!
function draw(){
background(220);
fill(200);
stroke(0);
circle(x, y, size * 2);
x += speedX;
y += speedY;
if (x > (width - size) || x < size) {
speedX = -speedX;
}
if (y > (height - size) || y < size) {
speedY = -speedY;
}
}