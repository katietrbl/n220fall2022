//Write a function that takes a color as an argument ( you can use color(170, 200, 150) )
//sets the red component of that color to zero  ( colorVariableArgumentName.setRed(0) )
//Returns that new color without red
//Then, test this function by drawing a circle to the screen using the result. You might have something like:
//let noRed = removeRed( color(170, 200, 150) );
//fill(noRed);

// setting the color var so i dont have to have dry code

let color = (170, 200, 150);

function setup() {
    createCanvas (800,600);
    background(220);
   }
//here im creating the circle and setting the size
function draw() {
circle(400, 300, 50, 50);
fill(color);
}


function drawCircle(x,y,z) {
    if(x <= 170)
    {
        x == 0;
    }
}
    