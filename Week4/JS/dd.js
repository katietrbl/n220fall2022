//Drawing Drawer

//Create a composition of some object - a car, a rocket, a set of keys.
//Move that composition code into a new function ("drawKeys()", for instance).
//Add two arguments to the function (x and y)
//Use those arguments to control the position of each of the drawing calls in the function (things like rect() and circle())
//Finally, either:
//Place the function call in the draw() function, and have your composition follow mouseX and mouseY
//Draw 3+ of your compositions in different spaces on the screen by writing your function call three or more times in either setup() or draw()


//im going to make a car 


//this sets the variables x and y so that i can create the drawCar function so i can repeat easily
var car = {
    x: 0,
    y: 0,
}

function setup() {
 createCanvas (800,600);

}
//here im just making it draw the car multiple times
function draw() {

    drawCar(100, 200);
    drawCar(50, 50);
    drawCar(300,300)
}

//this part just makes the shape of the car
function drawCar(x,y) {
//drawing the car!
rect(x, y, 90, 40);
ellipse(x+8, y+40, 20);
ellipse(x+80, y+40, 20);
}
