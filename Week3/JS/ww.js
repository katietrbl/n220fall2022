//Katie Stinson 9/6/22
let x, y;
//these values that im adding will represent the shape/size of the circle and the speed at which they are moving

//here i am creating the canvas and also defining where the circle starts from
function
    setup(){
        createCanvas(800,600);
        x = 0;
        y = height / 2;
    }

function
draw(){
    //this gives a background and creates the circle
    background(200);
    stroke(0);
    fill(127,255,0);
    circle(x, y, 40, 40);
    //this simulates where the x axis of the circle moves from
    x += 5;

//here i am trying to reset the circle to the left side of the canvas so it is a continuous loop
    if (x >= 800){
        x = 0;

    }
}