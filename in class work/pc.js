function setup() {
    createCanvas(900,900);
}
//this is for the head and ears
function draw(){
  background(211, 211, 211);
  stroke(255);
  fill(0);
  triangle(255, 370, 240, 220, 370, 260);
  stroke(30);
  fill(0);
  triangle(430, 260, 560, 220, 545, 370);
  //this it for the eyes
ellipse(400,400,300,300);
ellipseMode(RADIUS);
fill(255);
ellipse(340, 380, 45, 45);
ellipseMode(CENTER);
fill(0,100,180);
ellipse(340, 380, 45, 45)
ellipseMode(RADIUS)
fill(32, 178, 170);
ellipse(340, 380, 45, 45)
ellipseMode(CENTER);
fill(32, 178, 170);
ellipse(460, 380, 75, 75);
  stroke(255)
  fill(0)
  //this is for the nots
  triangle(380,420,400,445,420,420);
//this is the cats mouth
  line(420,520,365,520,320)
}

