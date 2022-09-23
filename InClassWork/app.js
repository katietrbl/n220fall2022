let tv = {x: 200, y: 200, width: 350, height: 300, colorA: "grey", colorB: (0, 255, 0), colorC: "black", isClicked: false}; 


function setup(){
    createCanvas(800,800);
}

function draw(){  
    background(220);
    drawTV(tv)
}

function drawTV(tV){
    fill(tv.colorA);
    rect(tv.x, tv.y, tv.width, tv.height);

    if(tV.isClicked === true){
        fill(tv.colorB);
        rect(tv.x + 50, tv.y + 50, tv.width - 100, tv.height - 150);
    }else if(tV.isClicked === false){
        fill(tv.colorC);
        rect(tv.x + 50, tv.y + 50, tv.width - 100, tv.height - 150);
    }
}
function mouseIsPressed() {
    tv.isClicked = !tv.isClicked;
  }