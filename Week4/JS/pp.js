var r;
var angle
var step

function setup() {
    createCanvas(500,500);

    r = 100;
    angle = 0; 
    step = TWO_PI/6; 

}

function draw(){
    translate(width/2, height/2);

    var x = r * sin(angle);
    var y = r * cos(angle);

    ellipse(x, y, 50);

    angle = angle + step;

}