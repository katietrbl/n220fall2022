//let me = { name: "Katie", age: 19, hungry: true, fashioSense: "poor" }

//function setup(){
  //  createCanvas(800, 600);
//}

//me.age ++;
//me.fashioSense = 5;

//function draw(){

//}

//function drawFace(x,y) {

//}



let orb = {
    x: 200, y: 50, r: 15,
}
function setup (){
    createCanvas(800,600);
}
function draw(){
    background(0);
    circle(orb.x, orb.y, orb.r);
    
    orb.y += Math.sin(frameCount / 20);
}
function drawFace(x,y){

}

