//Katie Stinson 9/8/22
//now for a simple one, phew.
//here im creating the canvas and setting the framerate to one which will count from 1 for every frame
function setup(){
    createCanvas(400, 400);
    frameRate(1);
    }
    
    //this draw function makes it so that the frame count will be displayed on the console, not onto the browser
    function draw(){
    background(220);
    noStroke();
    console.log(frameCount);
    }
    