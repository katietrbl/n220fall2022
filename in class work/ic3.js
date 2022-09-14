/* x = 50;
y = 50;
let greeting = "Hello World"

function
setup() {       
    createCanvas(800,600);
}

greeting += "d";

function
draw() {
    
    
    c=100;
    d=150
    text(greeting, x + 100,y * 3);
}
*/

function
    setup(){
        createCanvas(400,400);
    }

function
draw(){
    background(0);
    fill(255,99,71)
    circle(400-mouseY,400-mouseX,80);
}
//this section has the mouseX and mouseY swapped so that the inverse popps out
