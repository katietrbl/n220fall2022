let tallOne = {x: 50, y: 100, width: 20, height: 200}
let tallTwo = {x: 500, y: 100, width: 20, height: 200}

function setup(){
    createCanvas(600,700);
}

function draw(){
    background(250);
    drawtallOne(tallOne);
    drawtallTwo(tallTwo);
}

function drawtallOne(tallOne){
    fill(200);
    rect(tallOne.x, tallOne.y, tallOne.width, tallOne.height);
}

function drawtallTwo(tallTwo){
    fill(200);
    rect(tallTwo.x, tallTwo.y, tallTwo.width, tallTwo.height);
}

