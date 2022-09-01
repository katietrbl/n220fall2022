document.write("Hello World");
console.log
let size = 10;

function setup(){
    createCanvas(800,600);
    console.log(size);
}

function draw(){
    background(0);
    size = size + 1;
    circle(mousex, mouseY, 30)
}